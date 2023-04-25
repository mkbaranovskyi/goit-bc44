const express = require('express')
const bookController = require('../../controllers/books')
const { userAuthMiddleware } = require('../../middlewares')
const { controllerWrapper } = require('../../servcies')

const router = express.Router()

router.get(
  '/',
  controllerWrapper(bookController.getAll),
)

router.get(
  '/:id',
  controllerWrapper(bookController.getOne),
)

router.post(
  '/',
  userAuthMiddleware,
  // Це те ж саме
  controllerWrapper(bookController.create),
  // Що це
  // async (req, res, next) => {
  //   try {
  //     await bookController.create(req, res, next)
  //   } catch (e) {
  //     next(e)
  //   }
  // }
)

router.put(
  '/:id',
  controllerWrapper(bookController.updateOne),
)

router.delete(
  '/:id',
  controllerWrapper(bookController.deleteOne),
)

module.exports = router