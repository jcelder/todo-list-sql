
const printToConsole = (arr) => {
  console.log(
    `ID Description\n-- ------------`,
  )
  arr.forEach((task) => {
    console.log(`${task.id}  ${task.task}`)
  })
  console.log(`\nYou have ${arr.length} tasks`)
}

module.exports = { printToConsole }
