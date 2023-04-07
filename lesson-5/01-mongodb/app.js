require('dotenv').config()
const mongoose = require('mongoose')

const { MONGO_CLOUD_CONNECTION, MONGO_LOCAL_CONNECTION } = process.env

// Якщо підключаєтесь до монги в клауді:
mongoose.connect(MONGO_CLOUD_CONNECTION)
  .then(() => console.log('Connected to the cloud database!'))


// Якщо ви встановили монгу локально:
// mongoose.connect(MONGO_LOCAL_CONNECTION)
//   .then(() => console.log('Connected to the local database!'));