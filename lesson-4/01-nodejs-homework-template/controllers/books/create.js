const bookRepository = require('../../books')
const { addBookSchema } = require('../../schemas/add-book.schema')

async function create(req, res, next) {
  try {
    const { title, author } = req.body
  
    const { error } = addBookSchema.validate({ title, author });
    if (error) {
      const err = new Error(error.message)
      err.code = 400
      throw err
    }
  
    const newBook = await bookRepository.create(title, author)
    res.status(201).send(newBook)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}