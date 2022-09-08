/**
 * ESTRUCTURA de datos
 * 
 * {
 *    firstName,
 *    lastName,
 *    age,
 *    phone
 *  },
 */


const CANTIDAD_CONTACTOS = 5

const nombres = ["Carlos", "Gabriel", "Camila", "Helu", "Santiago"]
const apellidos = ["Landa", "Fiorito", "Pignata", "Romero", "Guzman"]

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generarNombre = () => `${nombres[random(0,nombres.length - 1)]}`
const generarApellido = () => `${apellidos[random(0,apellidos.length - 1)]}`


//Telefono seria: 55-555-555
const generarTelefono = () => `${random(10,99)}-${random(100,999)}-${random(100,999)}`


const crearContacto = () => {
  return {
    nombreCompleto: `${generarApellido()}, ${generarNombre()}`,
    telefono: generarTelefono(),
    edad: random(18,50)
  }
}

//const prueba = crearContacto()
//console.log(prueba)

const contactos = Array.from({
  length: CANTIDAD_CONTACTOS
}, crearContacto)

//console.log(contactos)

/**
 * CONSIGNA FINAL: Dada una lista de contactos, crear una funcion que agrupe los 
 * contactos segun la primera letra de su nombre (nombre completo). 
 * Esta seria la estructura:
 * 
 * {
 * 
 *    F: [{}, {}, ..., {} ],
 *    C: [{}, {}, ..., {}]
 *    L: [{nombreCompleto: "Landa, Gabriel", edad: 48, telefono: "22-121-941"}, ..., {}]
 * 
 * }
 * 
 */


// Ejemplo reduce sumando todas las edades del listado
/*
const sumEdad = contactos.reduce((previousValue, element) => {
  console.log(previousValue, element)
  return previousValue + element.edad
}, 0)

console.log("sumEdad => ", sumEdad)
*/



/// 10/10
const agruparContactosGrupoDebora = (contactos) => {
  
  const agrupacion = contactos.reduce((grupo, contacto) => {
    // Empieza el show
    //console.log(objetoActual, contacto.nombreCompleto[0])
    const letra = contacto.nombreCompleto[0]

    //objetoActual

    if(!(letra in grupo)){
      grupo[letra] = []
    }

    grupo[letra].push(contacto);
  
    return grupo


    /*
    return {
      ...objetoActual,
      [letra] : []

    }*/

  },{})

  //console.log(agrupacion)

}



const agruparContactosAlternativa = (contactos) => {
  //console.log(contactos)
  
  const agrupacion = contactos.reduce((grupo, contacto) => {
    // Empieza el show
    //console.log(objetoActual, contacto.nombreCompleto[0])
    const letra = contacto.nombreCompleto[0]

    //objetoActual
    
    return {
      ...grupo,
      [letra] : [...(grupo[letra] || []), contacto]


    }

  },{})

  return agrupacion

}

const agrupacion = agruparContactosAlternativa(contactos)

console.log(agrupacion)

/**
 * CONSIGNA FINAL: Con el objeto contactos agrupados por la primera letra
 *  devolver un array agrupados por titulo (primera letra) y ordenado 
 * alfabeticamente
 * 
 * Ejemplo:
 * 
 * [
 * 
 *  {
 *    "title": "A",
 *    "data": [{}, {}, {}]
 *  },
 *  {
 *    "title": "F",
 *    "data": [{}, {}, {}]
 *  },
 *  {
 *    "title": "R",
 *    "data": [{}, {}, {}]
 *  }
 * 
 * ]
 */

//console.log(agrupacion["R"])



console.log(Object.keys(agrupacion).sort())

const letras = Object.keys(agrupacion).sort()

const listaContactos = letras.map((letra) => {
  //console.log(letra, agrupacion[letra])

  return {
    title: letra,
    data: agrupacion[letra]
  }
})

console.log(listaContactos)


