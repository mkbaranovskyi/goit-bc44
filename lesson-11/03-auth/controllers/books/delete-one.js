const { BookModel } = require('../../database/models')
const { createHttpException } = require('../../servcies')

async function deleteOne(req, res, next) {
  const { id } = req.params

  const result = await BookModel.findByIdAndDelete(id)
    .catch((error) => {
      throw createHttpException(error.message, 400)
    })

  if (result === null) {
    throw createHttpException('The book is not found', 404)
  }

  res.status(204).send()
}

module.exports = {
  deleteOne
}