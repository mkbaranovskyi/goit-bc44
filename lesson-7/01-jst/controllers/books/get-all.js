const { BookModel } = require('../../database/models');

async function getAll(req, res, next) {
  try {
    const books = await BookModel.find({});
    res.json(books);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
}