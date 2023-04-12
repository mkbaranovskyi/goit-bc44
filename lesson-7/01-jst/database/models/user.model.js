const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  // Варіант 1:
  // token: {
  //   type: String,
  //   required: true,
  // },
  sessionKey: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
})

const UserModel = mongoose.model('user', userSchema)

module.exports = {
  UserModel,
}