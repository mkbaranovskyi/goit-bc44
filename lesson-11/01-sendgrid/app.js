require('dotenv').config()
const sgMail = require('@sendgrid/mail')

const { SENDGRID_API_KEY, SENDGRID_SENDER_ADDRESS } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const msg = {
  to: 'fokal82334@saeoil.com',
  from: SENDGRID_SENDER_ADDRESS,
  subject: 'Hello',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => console.log('The email is sent'))
  .catch((e) => console.error(JSON.stringify(e, null, 2)))