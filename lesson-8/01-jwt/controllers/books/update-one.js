const { BookModel } = require('../../database/models')
const { addBookSchema } = require('../../schemas/add-book.schema');
const { createHttpException } = require('../../servcies');

async function updateOne(req, res, next) {
  const { id } = req.params
  const { author, title, favorite, genre, isbn } = req.body

  const { error } = addBookSchema.validate({ title, author, favorite, genre, isbn });
  if (error) {
    throw createHttpException(error.message, 400)
  }

  // const result = await Book.updateOne(id, { author, title, genre, isbn })
  const result = await BookModel.findByIdAndUpdate(id, { author, title, favorite, genre, isbn }, { new: true })
    .catch((error) => {
      throw createHttpException(error.message, 400)
    });

  if (result === null) {
    throw createHttpException('The book is not found', 404)
  }

  res.json(result)
}

module.exports = {
  updateOne,
}