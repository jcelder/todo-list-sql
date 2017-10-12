const accessDB = require('../dbOperations').accessDB

const remove = (id) => {
  accessDB(`DELETE FROM tasks WHERE id = '${id}' RETURNING *`)
    .then(result => console.log(`Deleted task ${result[0].id}: '${result[0].task}'`))
    .catch(console.error)
}

module.exports = { remove }
