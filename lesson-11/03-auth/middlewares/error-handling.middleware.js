const errorHandlingMiddleware = (err, req, res, next) => {
  const message = err.message || 'Server error'
  const code = err.code || 500
  res.status(code).send({ message })
}

module.exports = {
  errorHandlingMiddleware,
}