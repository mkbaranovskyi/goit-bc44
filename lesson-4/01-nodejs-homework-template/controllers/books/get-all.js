const bookRepository = require('../../books')

async function getAll(req, res, next) {
  try {
    const books = await bookRepository.findAll();
    res.json(books);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
}