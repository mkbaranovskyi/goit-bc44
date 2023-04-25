const { UserModel } = require('../database/models')
const { createHttpException, verifyJWT } = require('../servcies')

const userAuthMiddleware = async (req, res, next) => {
  const unauthorizedMessage = 'Unaukthorized'

  try {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      throw createHttpException(unauthorizedMessage, 401)
    }

    const [bearer, token] = authorizationHeader.split(' ')
    if (bearer !== 'Bearer' || !token) {
      throw createHttpException(unauthorizedMessage, 401)
    }
    try {
      const tokenPayload = verifyJWT(token)
      if (!tokenPayload.userId || !tokenPayload.sessionKey) {
        throw createHttpException(unauthorizedMessage, 401)
      }
      
      const user = await UserModel.findById(tokenPayload.userId)
      if (!user) {
        throw createHttpException(unauthorizedMessage, 401)
      }
      
      if (tokenPayload.sessionKey !== user.sessionKey) {
        throw createHttpException(unauthorizedMessage, 401)
      }

      req.user = user

      next()
    } catch (error) {
      throw createHttpException(unauthorizedMessage, 401)
    }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  userAuthMiddleware,
}