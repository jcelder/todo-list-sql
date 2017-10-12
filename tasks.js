#!/usr/local/bin/node

const command = process.argv[2]
const task = process.argv.slice(3).join(' ')
const list = require('./commands/list').list
const add = require('./commands/add').add
const remove = require('./commands/delete').remove
const complete = require('./commands/complete').complete


switch (command) {
  case 'list':
    list()
    // process.exit(0)
    break;
  case 'add':
    add(task)
    // process.exit(0)
    break;
  case 'complete':
    complete(task)
    // process.exit(0)
    break;
  case 'delete':
    remove(task)
    break;
  default:
    console.log('Test')
}
