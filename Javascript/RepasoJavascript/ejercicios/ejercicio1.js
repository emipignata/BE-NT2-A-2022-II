/**
 * Hacer una funcion que dado un array de participantes del curso me devuelva el alumno con mayor edad.
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


function participanteMayorEdad(array){
  console.log(array.length)

  var edad = 0
  var alumno = null

  for(let i = 0; i < array.length; i++){
    console.log(`Arr[${i}] => `, array[i])

    if (array[i].age >= edad){
      edad = array[i].age
      // alumno = array[i] // Si dejamos esta sentencia lo que pasa es que deja la referencia
      alumno = Object.assign({}, array[i])

    }

    

  }

  return alumno

  /**
   * OTRA FORMA DE RECORRIDO
   */

  /*
  console.log('************ OTRA FORMA DE RECORRIDO DE ARRAYS ***********')

  array.forEach((element, index) => {
    console.log(`Arr[${index}] => `, element)
  })
  */

}

const alumnos = [
  {
    firstName: "Dani",
    lastName: "Guzman",
    age: 31
  },
  {
    firstName: "Ana",
    lastName: "Lopez",
    age: 22
  },
  {
    firstName: "Laura",
    lastName: "Mejia",
    age: 40
  }
]

const alumnoMayorEdad = participanteMayorEdad(alumnos)

console.log(`${alumnoMayorEdad.firstName} ${alumnoMayorEdad.lastName} es el alumno con mayor edad`)


/*

function myFunction(){
  console.log("hola")
}

const myFunction2 = function() {
  console.log("hola")
}

const myFunction3 = () => {
  console.log("Hola mundo")
}

*/