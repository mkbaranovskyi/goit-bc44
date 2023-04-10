const { BookModel } = require('../../database/models')
const { addBookSchema } = require('../../schemas/add-book.schema')

async function updateOne(req, res, next) {
  try {
    const { id } = req.params
    const { author, title, favorite, genre, isbn } = req.body

    const { error } = addBookSchema.validate({ title, author, favorite, genre, isbn });
    if (error) {
      const err = new Error(error.message)
      err.code = 400
      throw err
    }

    // const result = await Book.updateOne(id, { author, title, genre, isbn })
    const result = await BookModel.findByIdAndUpdate(id, { author, title, favorite, genre, isbn }, { new: true })
      .catch((error) => {
        const err = Error(error.message)
        err.code = 400
        throw err
      });

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