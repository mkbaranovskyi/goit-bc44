const { BookModel } = require('../../database/models')
const { addBookSchema } = require('../../schemas/add-book.schema')

async function create(req, res, next) {
  try {
    const { title, author, genre, isbn } = req.body

    const { error } = addBookSchema.validate({ title, author, genre, isbn });
    if (error) {
      const err = new Error(error.message)
      err.code = 400
      throw err
    }

    const newBook = await BookModel.create({ title, author, genre, isbn })
    res.status(201).send(newBook)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}