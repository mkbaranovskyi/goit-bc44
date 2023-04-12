const express = require('express')
const bookController = require('../../controllers/books')

const router = express.Router()

router.get('/', bookController.getAll)
router.get('/:id', bookController.getOne)
router.post('/', bookController.create)
router.put('/:id', bookController.updateOne)
router.delete('/:id', bookController.deleteOne)

module.exports = router