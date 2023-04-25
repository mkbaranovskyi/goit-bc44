const nodemailer = require("nodemailer")
require('dotenv').config()

const {
  EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_PASS,
  EMAIL_SENDER_HOST,
  EMAIL_SENDER_PORT,
} = process.env

const transporter = nodemailer.createTransport({
  host: EMAIL_SENDER_HOST,
  port: EMAIL_SENDER_PORT,
  secure: true,
  auth: {
    user: EMAIL_SENDER_ADDRESS,
    pass: EMAIL_SENDER_PASS,
  },
})

transporter
  .sendMail({
    from: `"Fred Foo" <${EMAIL_SENDER_ADDRESS}>`,
    to: "fokal82334@saeoil.com, rexokoh977@syinxun.com",
    subject: "Hello",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  })
  .then((res) => console.log(res))
  .catch((e) => console.error(JSON.stringify(e, null, 2)))