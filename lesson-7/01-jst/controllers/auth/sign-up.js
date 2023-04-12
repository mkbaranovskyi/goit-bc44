const { UserModel } = require('../../database/models/user.model')
const crypto = require('crypto')
const { createHash, createHttpException } = require('../../servcies')

/**
 * Хешування - математичне перетворення з такими особливостями:
 * 1. Незворотнє: з хешу неможливо отримати вхідний рядок
 * 2. Алгоритм завжди для однакових вхидніх даних генерує однакові вихідні (тобто хеш)
 * 3. Завжди генерує хеш однакової довжини (для конкретного алгоритму)
 * 4. Зміна навіть 1 символа вхідних даних ПОВНІСТЮ змінює вихідний рядок
 */

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body

    // TODO 12.04.2023: Додайте валідацію через Joi

    const passwordHash = await createHash(password)

    // Проблема: треба перевірити, що юзера з таким імейлом ще не існує

    // Варіант 1: явно перевірити наявність юзера
    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
      throw createHttpException('User is not found', 404)
    }

    const newUser = await UserModel.create({ email, passwordHash })
    // Варіант 2: просто обробити помилку при створенні, допускаючи, що помилка саме така, як ми напишемо
    // .catch((e) => {
    //    throw createHttpException('This email is already taken', 409)
    // })

    const sessionKey = crypto.randomUUID()
    await UserModel.findByIdAndUpdate(newUser._id, { sessionKey })

    /**
     * Можливі різні варіанти: 
     * - видавати токен юзеру одразу (тоді треба також додати в модель юзера стейт, де записувати, чи він верифікував свій імейл)
     * - не видавати токен одразу (тоді треба буде імплементувати автоматичний `sign-in` після верифікації імейлу
     * 
     * Імплементувати автоматичний логін після реєстрації можна:
     * - через фронт (автоматичний 2-й запит на бек на `sign-in`) 
     * - через бек (як зробили ми тут)
    */ 
    const token = {
      userId: String(newUser._id),
      sessionKey,
    }

    // TODO 12.04.2023: відправити листа на пошту юзеру для верифікації імейлу

    res.status(201).json({ token })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  signUp,
}