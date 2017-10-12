const accessDB = require('../dbOperations').accessDB
const connectDB = require('../dbOperations').connectDB
const printToConsole = require('../printToConsole.js').printToConsole

const list = () => {
  accessDB("SELECT * FROM tasks WHERE complete='false'")
    .then((result) => {
      printToConsole(result)
    })
}

module.exports = { list }
