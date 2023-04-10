const { BookModel } = require('../../database/models')
const mongoose = require('mongoose');
const { mapBookOutput } = require('./servcies/book-mapping.service');

async function getOne(req, res, next) {
  try {
    const { id } = req.params

    // const book = await BookModel.find({ _id: new mongoose.Types.ObjectId(id) })
    // const book = await BookModel.findOne({ _id: new mongoose.Types.ObjectId(id) })
    // const book = await BookModel.findById(id, '-author -title');
    const book = await BookModel.findById(id, 'author title')
      .catch((error) => {
        const err = Error(error.message)
        err.code = 400
        throw err
      });
    if (book === null) {
      const error = new Error('The book is not found')
      error.code = 404
      throw error
    }

    const mappedBook = mapBookOutput(book)

    res.json(mappedBook)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getOne,
}