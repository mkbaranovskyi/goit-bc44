const booksRepository = require('./books/index')

async function run() {
  // console.log(await findAll())

  // const book = await findOne('CTHE0f1kkWwqS5sL2tI8')
  // if (book === null) {
  //   console.log('The book is not found')
  // }

  // const newBook = await booksRepository.create('1984', 'George Orwell')
  // console.log(newBook)

  // const updatedBook = await booksRepository.updateOne(
  //   'CTHE0f1kkWwqS5sL2tI8_',
  //   {
  //     author: 'Maksym',
  //     title: 'The Best',
  //   }
  // )

  // console.log(updatedBook)

  await booksRepository.deleteOne('CTHE0f1kkWwqS5sL2tI8_')
}

run()