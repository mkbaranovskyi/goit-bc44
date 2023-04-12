const mongoose = require('mongoose')
const { BOOK_GENRE } = require('../../enums')
const { regIsbn } = require('../../regexp')

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    genre: {
      type: String,
      // enum: ["detective", "fantasy"],
      enum: Object.values(BOOK_GENRE),
      required: true,
    },
    isbn: {
      type: String,
      required: true,
      match: regIsbn,
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