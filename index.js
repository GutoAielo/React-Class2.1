if (true) {
  const message = 'Hello!'
  console.log(message)
}
//console.log(message)//ReferenceError: message is not defined

for (const color of ['green', 'red', 'yellow']) {
  const message = 'Hello!'
  console.log(color)
  console.log(message)
}
//console.log(color)

//Example of Block Escope with VAR although will be Global Escope
if (true) {
  var count = 0
  console.log(count)
}
console.log(count)

//Example of Local Escope with VAR
function execute() {
  var text = 'Local Escope with VAR!'
  console.log(text)
}
execute()
//console.log(text); //ReferenceError: text is not defined

//Example of Local Escope with LET and CONST
function execute2() {
  let txt = 0
  const test = 2

  function execute3() {}
  console.log(txt)
  console.log(test)
  console.log(execute3)
}
execute2()
//console.log(txt) //ReferenceError: txt is not defined
//console.log(test) //ReferenceError: txt is not defined
//console.log(execute3) //ReferenceError: txt is not defined

//Example of Nest Escope

function execute3() {
  const txt = 'Nest Escope'
  if (true) {
    const name = 'Car'
    console.log(txt)
  }
  //console.log(name)//ReferenceError: name is not defined
}
execute3()

//Example of Global Escope

let gName = 'Guto'
console.log(gName)

//Example of Hoisting

printName()

function printName() {
  console.log('Name: ' + gName)
}
