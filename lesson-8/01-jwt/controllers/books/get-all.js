const { BookModel } = require('../../database/models');

async function getMany(req, res, next) {
  const { page, limit, title, author } = req.query

  let searchCriteris = {}

  if (title) {
    searchCriteris.title = title
  }

  if (author) {
    searchCriteris.author = author
  }

  const books = await BookModel.find(
    searchCriteris,
    null,
    {
      skip: (page - 1) * limit,
      limit,
    });
  res.json(books);
}

module.exports = {
  getAll: getMany,
}