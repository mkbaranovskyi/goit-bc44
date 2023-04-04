const bookRepository = require('../../books')

async function getOne(req, res, next) {
  try {
    const { id } = req.params
    const book = await bookRepository.findOne(id)
    if (book === null) {
      // res.status(404).send({ message: 'Not found' })

      const error = new Error('The book is not found')
      error.code = 404

      throw error
    }

    res.json(book)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getOne,
}