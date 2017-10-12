
const printToConsole = (arr) => {
  console.log(
    `ID Description\n-- ------------`,
  )
  arr.forEach((task) => {
    console.log(`${task.id}  ${task.task}`)
  })
}

module.exports = { printToConsole }
