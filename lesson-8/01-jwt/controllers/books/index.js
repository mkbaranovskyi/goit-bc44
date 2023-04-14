const { create } = require('./create');
const { deleteOne } = require('./delete-one');
const { getAll } = require('./get-all');
const { getOne } = require('./get-one');
const { updateOne } = require('./update-one');

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
}