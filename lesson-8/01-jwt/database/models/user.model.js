const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
  },
  passwordHash: {
    type: String,
    required: true,
    trim: true,
  },
  // Варіант 1:
  // token: {
  //   type: String,
  //   required: true,
  // },
  sessionKey: {
    type: String,
    default: null,
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false,
})

const UserModel = mongoose.model('user', userSchema)

module.exports = {
  UserModel,
}