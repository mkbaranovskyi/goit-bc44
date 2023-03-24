const path = require('path')
const fsp = require('fs/promises')
const bookList = require('./books.json')
const { nanoid } = require('nanoid')


const filePath = path.join(__dirname, 'books.json')

async function getBooks() {
  const books = await fsp.readFile(filePath)
  const parsed = JSON.parse(books)
  return parsed;
}

async function updateBooks(books) {
  await fsp.writeFile(filePath, JSON.stringify(books, null, 2))
}


async function findAll() {
  // const books = await fsp.readFile(filePath, 'utf-8')
  // const books = await fsp.readFile(filePath, { encoding: 'utf-8' })

  // const books = await fsp.readFile(filePath)
  // const parsed = JSON.parse(books)

  return await getBooks()
}

async function findOne(id) {
  const books = await getBooks()
  const book = books.find((item) => item.id === id)
  if (!book) {
    // Якщо не знайшли - 2 варіанти:

    // Варіант 1
    return null;

    // Варіант 2
    // throw new Error('The books is not found')
  }

  return book;
}

async function create(title, author) {
  const newBook = {
    id: nanoid(),
    title,
    author
  }

  // Не дописуємо, тому що подивіться, куди воно записує - не зовсім те, що треба!
  // await fsp.appendFile(filePath, JSON.stringify(newBook))

  const books = await getBooks()
  books.push(newBook)

  // Було
  // await fsp.writeFile(filePath, JSON.stringify(books, null, 2))
  // Стало
  await updateBooks(books)

  return newBook
}

async function updateOne(id, data) {
  const books = await getBooks()

  const bookIndex = books.findIndex((book) => book.id === id)
  if (bookIndex === -1) {
    return null;
  }

  books[bookIndex] = {
    id,
    // author: data.author,
    // title: data.title,
    ...data,
  }

  await updateBooks(books)

  return books[bookIndex]
}

async function deleteOne(id) {
  const books = await getBooks()
  
  const bookIndex = books.findIndex((book) => book.id === id)
  if (bookIndex === -1) {
    return null;
  }

  books.splice(bookIndex, 1)

  await updateBooks(books)
}

module.exports = {
  findAll,
  findOne,
  create,
  updateOne,
  deleteOne,
}