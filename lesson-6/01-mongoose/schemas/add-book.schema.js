const Joi = require('joi');
const { BOOK_GENRE } = require('../enums');
const { regIsbn } = require('../regexp')

const addBookSchema = Joi.object({
  title: Joi.string()
    .required(),

  author: Joi.string()
    .min(3)
    .max(30)
    .required(),

  favorite: Joi.boolean()
    .default(false),

  genre: Joi.string()
    .valid(...Object.values(BOOK_GENRE)),

  isbn: Joi.string()
    // .pattern(/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/),
    .pattern(regIsbn),
})

module.exports = {
  addBookSchema,
}