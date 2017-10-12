const accessDB = require('../dbOperations').accessDB
const printToConsole = require('../printToConsole.js').printToConsole
const list = () => {
  accessDB("SELECT * FROM tasks WHERE complete='false'")
    .then((result) => {
      printToConsole(result)
    })
}

module.exports = { list }
