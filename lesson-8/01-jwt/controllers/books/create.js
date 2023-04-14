const { BookModel } = require('../../database/models')
const { addBookSchema } = require('../../schemas/add-book.schema');
const { createHttpException } = require('../../servcies');

async function create(req, res, next) {
  const user = req.user
  const { title, author, genre, isbn } = req.body

  const { error } = addBookSchema.validate({ title, author, genre, isbn });
  if (error) {
    throw createHttpException(error.message, 400)
  }

  const newBook = await BookModel.create({ title, author, genre, isbn, owner: user })
  res.status(201).send(newBook)
}

module.exports = {
  create
}