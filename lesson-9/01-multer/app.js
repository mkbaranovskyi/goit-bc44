const express = require('express')
const multer = require('multer')
const path = require('path')
const fsp = require('fs/promises')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.static('./public'))

const tempPath = path.join(__dirname, 'temp')
const newPath = path.join(__dirname, 'public')

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: multerStorage })

const fileList = []

app.get('/kittens', async (req, res, next) => {
  res.json(fileList)
})

app.post(
  '/kittens',
  upload.single('myfile'),
  // upload.array('myfile', 3),
  // upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]),
  async (req, res, next) => {
    const file = req.file
    console.log(file)
    const filePath = path.join(newPath, 'kittens', file.filename)
    await fsp.rename(file.path, filePath)

    fileList.push({
      name: file.filename,
      path: file.filename,
    })

    console.log(fileList)

    res.send('ok')
  })


app.listen(3000)