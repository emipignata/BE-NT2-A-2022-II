import { personas, EDAD_MINIMA } from './personas'

/**
 * CONSIGNA:realizar una funcion que dado un array de objetos persona devuelva
 * un nuevo array solamente con las personas que puedan entrar al casino
 * 
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */

console.log(personas)



const array = personas.filter(function(element){
  return element.age >= EDAD_MINIMA
})

const array2 = personas.filter(element => element.age >= EDAD_MINIMA)

console.log(array, array2)