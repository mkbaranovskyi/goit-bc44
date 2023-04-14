const express = require('express')
const authController = require('../../controllers/auth')
const { controllerWrapper } = require('../../servcies')
const { userAuthMiddleware } = require('../../middlewares')

const router = express.Router()

router.post('/sign-up', controllerWrapper(authController.signUp))
router.post('/sign-in', controllerWrapper(authController.signIn))
router.post('/logout', userAuthMiddleware, controllerWrapper(authController.logout))

module.exports = router