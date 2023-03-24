const { program } = require('commander')

async function run() {
  // node index --age 20 --name Petya
  // node index -a 20 -n Petya
  program
    .option('-a --age, <string>')
    .option('-n --name, <string>')

  program.parse(process.argv)

  const options = program.opts()
  console.log(options)
  // { age: '20', name: 'Petya' }
}

run()