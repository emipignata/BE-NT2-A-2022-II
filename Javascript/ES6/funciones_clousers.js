console.log("***** Clousere *****")

function helloFunction() {
  var mensaje = "Hola mundo"
  var edad = 18
  var pais = 'Argentina'

  function getMensaje(){
    return mensaje.toUpperCase()
  }

  function getEdad(){
    return edad
  }

  return {
    getMensaje,
    getEdad,
    tipo: 'tipo',
    pais
  }

  /*
  return {
    "getMensaje": getMensaje,
    "getEdad": getEdad,
    "tipo": 'tipo',
    "pais": pais
  }*/

}

console.log(typeof mensaje)
const clousere = helloFunction()

console.log(clousere.pais)
console.log(clousere.tipo)
console.log(clousere.getEdad())
