function saludo(nombre){
  console.log(`Hola ${nombre}`)
  //console.log('Hola ' + nombre)
}


const o = new Object()

console.log(o)

o.firstName = "Carlos"
o.lastName = "Perez"
o.isTeaching = true
o.age = 31
o.friends = ["Ignacio", "Gabriel", "Belen", 5.9, new Object()]
o.sayHello = saludo
o.sayHello2 = function(nombre){
  console.log('Hola ' + nombre)
}


console.log(o)

o.sayHello(o.friends[0])

o.sayHello2(o.friends[1])


delete o.sayHello2 //Eliminamos atributos de un objeto Javascript

console.log(o)



let cadeno_objeto = JSON.stringify(o)
console.log(typeof cadeno_objeto, cadeno_objeto)

cadeno_objeto = JSON.parse(cadeno_objeto)
console.log(typeof cadeno_objeto, cadeno_objeto)


console.log("***************************")

const o2 = {}
console.log(o2)
o2["firstName"] = "Ana"
o2["lastName"] = "Perez"

console.log(o2, o2["lastName"], o2.firstName, o2[0], o2.hola)


let a = 0

o2[a] = 31

console.log(o2, o2[0], o2["0"], o2['0'], o2[`0`])

console.log("******************")

const o3 = {
  firstName: "Daniel",
  lastName: "Guzman",
  saludo: saludo,
  direccion: {
    calle: "Av. Libertador",
    numero: 6700
  },
  estudios: [
    {
      titulo: "Ingeniero Informatico",
      anio: "2013",
      sede: "Guayana"
    },
    {
      titulo: "MsC. Ciencias de la Computacion",
      anio: "2019",
      sede: "UCA"
    },
  ]
}

console.log(o3)

o3.saludo("Gabriel")

console.log(o3.estudios[0])