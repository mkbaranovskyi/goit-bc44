const { UserModel } = require('../../database/models/user.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const { createHttpException, checkHash } = require('../../servcies')

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body

    // TODO 12.04.2023: Додайте валідацію через Joi

    const user = await UserModel.findOne({ email })
    if (!user) {
      throw createHttpException('User is not found', 404)
    }

    const match = await checkHash(password, user.passwordHash)
    if (!match) {
      res.status(401).json({ message: 'Invalid email or password' })
      return
    }

    // Проблема: нашу БД можуть викрасти, тоді зловмисник отримає доступ до наших токенів у відкритому вигляді. Так йому навіть не знадобиться робити `sign-in` - у нього вже є валідний токен. Цю проблему можна вирішити по-різному:

    // Варіант 1: ставимо дуже короткий термін життя токену (до 1 години). Навіть якщо його вкрадуть - зловмисник не встигне зробити багато шкоди з цими токенами, які швидко експайряться і стають невалідними 
    // const token = 'tokenValue12345'
    // await UserModel.findByIdAndUpdate(user._id, { token })
    // res.json({ token })

    // Варыант 2: генерувати рандомний сесійний ключ та зберігати в БД саме його, а не токен
    const sessionKey = crypto.randomUUID()
    await UserModel.findByIdAndUpdate(user._id, { sessionKey })
    
    const token = {
      userId: String(user._id),
      sessionKey,
    }

    res.json({ token })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  signIn,
}