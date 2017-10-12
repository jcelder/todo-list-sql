const accessDB = require('../dbOperations').accessDB

const complete = (id) => {
  accessDB(`UPDATE tasks SET complete = 'true' WHERE id = '${id}' RETURNING *`)
    .then(result => console.log(`Completed task ${result[0].id}: '${result[0].task}'`))
    .catch(console.error)
}

module.exports = { complete }
