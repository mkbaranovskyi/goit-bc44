const bookRepository = require('../../books')
const { addBookSchema } = require('../../schemas/add-book.schema')

async function updateOne(req, res, next) {
  try {
    const { id } = req.params
    const { author, title } = req.body

    const { error } = addBookSchema.validate({ title, author });
    if (error) {
      const err = new Error(error.message)
      err.code = 400
      throw err
    }

    const result = await bookRepository.updateOne(id, { author, title })
    if (result === null) {
      const err = new Error('The book is not found')
      err.code = 404
      throw err
    }

    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  updateOne,
}