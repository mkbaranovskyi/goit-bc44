const bookRepository = require('../../books')

async function deleteOne(req, res, next) {
  try {
    const { id } = req.params

    const result = await bookRepository.deleteOne(id)
    if (result === null) {
      const err = new Error('The book is not found')
      err.code = 404
      throw err
    }

    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  deleteOne
}