import { personas, EDAD_MINIMA } from './personas'

/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas`
 * devuelva un array con un atributo `allowed` (_boolean_) que indique 
 * si puede entrar o no en un casino
 */

const validarEdad = (edad) => edad >= EDAD_MINIMA



const agregarAllowed = (element) => {

  const aux = Object.assign({}, element)
  aux.allowed = validarEdad(aux.age)
  //console.log(aux)
  return aux
}

console.log(personas)

//const array = personas.map(element => agregarAllowed(element))

const array = personas.map(element => {
  return {
    ...element, // Spread operator: Separa cada uno de los atributos del objeto
    allowed : validarEdad(element.age)
  }
})



console.log(array, personas)

