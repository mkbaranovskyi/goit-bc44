// НЕ ПОТРІБНО встановлювати цей модуль явно через `yarn add fs`, він вже доступний всюди, де є нода
// Всі операції з файловою системою - АСИНХРОННІ! Їх треба евейтити (якщо не працюєте через колбеки)

// Документація: https://nodejs.org/docs/latest-v18.x/api/fs.html#fspromiseswritefilefile-data-options

const fs = require('fs')

// Більшість методів модулю `fs` повертають undefined, тобто нічого. Отримати результат (якщо він є), можна в колбеку

// fs.writeFile('./text.txt', 'Hello mom', (err) => {
//   console.log('done')
// })

// const readResult = fs.readFile('./text.txt', (err, data) => {
//   console.log(data.toString('utf8'))
// })
// console.log(readResult) // undefined!


// Методи `fs/promises` повертають Promise

// const fsp = require('fs').promises
const fsp = require('fs/promises')

async function run() {
  // await fsp.writeFile('./text.txt', 'Hello mom')
  // console.log('done')

  // await fsp.appendFile('./text.txt', 'Hello mom\n')
  // console.log('appended')

  const result = await fsp.readFile('./text.txt')
  console.log(result.toString('utf-8'))
  // console.log(result.toString('base64'))

  // fsp.mkdir - створити папку
  // fsp.rm - видалити файл або папку
}

run()
