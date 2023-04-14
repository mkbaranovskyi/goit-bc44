const controllerWrapper = (controller) => {
  const fn = async (req, res, next) => {
    try {
     await controller(req, res, next) 
    } catch (e) {
      next(e)
    }
  }

  return fn
}

module.exports = {
  controllerWrapper,
}