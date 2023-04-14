const jwt = require('jsonwebtoken')
require('dotenv').config()

const { JWT_SECRET } = process.env

const token = jwt.sign(
  {
    userId: '6436f386da51596d868a82a1',
    sessionKey: '2cc69c14-d20d-4d46-8b23-cb559447506f',
  },
  JWT_SECRET,
  { expiresIn: '1s' },
)
console.log('token: ', token)

const decoded = jwt.decode(token)
console.log('decoded: ', decoded)


new Promise((res, rej) => setTimeout(res, 2000))
  .then(() => {
    const verificationResult = jwt.verify(token, JWT_SECRET)
    console.log('verificationResult: ', verificationResult)
  })

