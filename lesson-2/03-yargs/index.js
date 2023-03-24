const yargs = require('yargs')

async function run() {
  // node index --age 20 --name Petya
  const arguments = process.argv
  const result = yargs(arguments)
  console.log(result.argv)
  /*
   {
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'G:\\Dev\\GOIT\\bc44\\lesson-2\\03-yargs\\index'
  ],

  age: 20,
  name: 'Petya',

  '$0': 'index'
}
   */
}

run()