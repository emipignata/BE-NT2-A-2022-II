const x = 17

const explicito = String(x)



console.log("x", typeof x, x)
console.log("explicito", typeof explicito, explicito)

console.log(x == explicito)

console.log(x === explicito)

const implicito = x + ""

console.log("implicito", typeof implicito, implicito)

const invalido = null 

//valores null y undefined
console.log(invalido == undefined)
console.log(invalido === undefined)

const array = []

if (array){
  console.log("Hola")
}