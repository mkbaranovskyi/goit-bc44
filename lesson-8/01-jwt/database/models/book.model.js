const mongoose = require('mongoose')
const { BOOK_GENRE } = require('../../enums')
const { regIsbn } = require('../../regexp')

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    favorite: {
      type: Boolean,
      default: false,
      trim: true,
    },
    genre: {
      type: String,
      // enum: ["detective", "fantasy"],
      enum: Object.values(BOOK_GENRE),
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      required: true,
      match: regIsbn,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: true,
      updatedAt: false,
    }
  },
)

// book -> books
// mouse -> mice
const BookModel = mongoose.model('book', bookSchema)

module.exports = {
  BookModel,
}