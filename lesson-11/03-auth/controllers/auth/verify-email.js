const verifyEmail = async (req, res, next) => {
  const { token } = req.params

  res.send(token)
}

module.exports = {
  verifyEmail,
}