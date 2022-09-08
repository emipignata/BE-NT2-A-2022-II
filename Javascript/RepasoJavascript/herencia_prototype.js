const array = [1,2,3]


console.log(array)

array.push(5)


console.log(array)

console.log(typeof array, array.toString())

array.__proto__.toString = function() {
  return "Hello world"
}




const cadena = String("hola mundo")

console.log(cadena, cadena.toUpperCase(), typeof cadena)