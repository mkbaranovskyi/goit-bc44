const Joi = require('joi');

const addBookSchema = Joi.object({
  title: Joi.number()
    .required(),

  author: Joi.string()
    .min(3)
    .max(30)
    .required(),
})

module.exports = {
  addBookSchema,
}