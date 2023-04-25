const nodemailer = require("nodemailer")
const { createHttpException } = require('./create-http-exception.service')

const {
  EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_PASS,
  EMAIL_SENDER_HOST,
  EMAIL_SENDER_PORT,
} = process.env

const sendEmailVerificationLetter = async (sendTo, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_SENDER_HOST,
      port: EMAIL_SENDER_PORT,
      secure: true,
      auth: {
        user: EMAIL_SENDER_ADDRESS,
        pass: EMAIL_SENDER_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Fred Foo" <${EMAIL_SENDER_ADDRESS}>`,
      to: sendTo,
      subject: "Hello",
      html: `<a href="http://localhost:3000/auth/email/verify/${token}">Click to verify your email</a>`,
    })
  } catch (e) {
    throw createHttpException('Sending email verification letter failed', 502)
  }
}

module.exports = {
  sendEmailVerificationLetter,
}