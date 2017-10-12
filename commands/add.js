const accessDB = require('../dbOperations').accessDB

const add = (task) => {
  accessDB(`INSERT INTO tasks (task) VALUES ('${task}') RETURNING id`)
    .then(result => console.log(`Created task ${result[0].id}`))
    .catch(console.error)
}

module.exports = { add }
