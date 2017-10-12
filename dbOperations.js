const { Client } = require('pg')

const client = new Client({
  user: 'test',
  host: 'localhost',
  database: 'todo-list',
  password: '1234',
  port: 5432
})

const accessDB = (query) => {
  client.connect()

  return client.query(query)
    .then((result) => {
      client.end()
      return result.rows
    })
    .catch(err => console.error(err.message))
}

module.exports = { accessDB }
