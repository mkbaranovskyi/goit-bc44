function isLeapYear(year) {
  if (year < 0) {
    throw new Error('must be positive')
  }
  if (typeof year !== 'number') {
    throw new Error('must be a number')
  }
  if (!Number.isInteger(year)) {
    throw new Error('must be integer')
  }
  if (!year) {
    throw new Error('must be a number')
  }

  const date = new Date(year, 2, 0)
  const lastFebDate = date.getDate()
  return lastFebDate === 29
}

module.exports = {
  isLeapYear,
}