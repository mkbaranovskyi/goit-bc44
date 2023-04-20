// '.test.js === .spec.js`

/**
 * 1. Отримує рік як вхідний параметр
 * 2. При неправильному форматі вхідного параметру викидає помилку
 * 3. Повертає true, якщо високосний, інакше - false
 * 
 * 
 * 2000 - true
 * 2001 - false
 * 2004 - true
 * 1900 - false
 * 
 * 0 - error
 * 2000.4 - error
 * -2000 - error
 * string, null, undefined, {}, true, false - error
 * 
 * 1. Ділиться на 400 - true
 * 2. Ділиться на 100 та не ділиться на 400 - false
 * 3. Ділиться на 4 - true
 * 
 */

const { isLeapYear } = require('./is-leap-year')

describe('test isLeapYear function', () => {

  beforeAll(() => {
    // Наприклад, підключення до БД перед всіма тестами, що цього вимагають
    console.log('before all')
  })

  afterAll(() => {
    // Наприклад, закриття конекшену до БД після всіх тестів цього блоку
    console.log('after all')
  })

  beforeEach(() => {
    console.log('before each')
  })

  afterEach(() => {
    console.log('after each')
  })


  // test == it

  test('2000 returns true', () => {
    const result = isLeapYear(2000)
    expect(result).toBe(true)
  })

  it('2001 returns false', () => {
    expect(isLeapYear(2001)).toBe(false)
  })

  test('2004 returns true', () => {
    expect(isLeapYear(2004)).toBe(true)
  })

  test('1900 returns false', () => {
    expect(isLeapYear(1900)).toBe(false)
  })


  // На практиці, не обов'язково розписувати ВСІ-ВСІ випадки неправильних параметрів. Будьте раціональні і самі подумайте, що у вас реально може потрапити випадково на вхід, а що не може

  // test('0 throws error', () => {
  //   expect(() => isLeapYear(0)).toThrow('must not be zero')
  // })

  test('2000.4 throws error', () => {
    expect(() => isLeapYear(2000.4)).toThrow('must be integer')
  })

  test('-2000 throws error', () => {
    expect(() => isLeapYear(-2000)).toThrow('must be positive')
  })

  test('"2000" throws error', () => {
    expect(() => isLeapYear("2000")).toThrow('must be a number')
  })

  // test('true throws error', () => {
  //   expect(() => isLeapYear(0)).toThrow('must be a number')
  // })

  test('{} throws error', () => {
    expect(() => isLeapYear({})).toThrow('must be a number')
  })

  test('null throws error', () => {
    expect(() => isLeapYear(null)).toThrow('must be a number')
  })

  test('undefined throws error', () => {
    expect(() => isLeapYear(undefined)).toThrow('must be a number')
  })
})
