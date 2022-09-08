const url = 'https://us-central1-api-nt2-ejemplo.cloudunctions.net/app/api/read'

const peticion = fetch(url)



const miCallBack = function(respuesta){
  return respuesta.json()
}

console.log(peticion)

peticion.then(() => {
  console.log("Se completo la promesa")
})

peticion.then(function() {
  console.log("Hola")
})

peticion.then(miCallBack)
.then(console.log)

peticion.catch((error) => {
  console.error("Promesa incumplida (hubo un error)", error)
})


peticion.finally(() =>{
  console.log("Me ejecuto indistintamente")
})
