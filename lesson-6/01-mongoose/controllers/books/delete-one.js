const { BookModel } = require('../../database/models')

async function deleteOne(req, res, next) {
  try {
    const { id } = req.params

    const result = await BookModel.findByIdAndDelete(id)
      .catch((error) => {
        const err = Error(error.message)
        err.code = 400
        throw err
      })

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