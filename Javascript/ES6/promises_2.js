(async function(){
  console.log("Vamos a ejecutar el codigo dentro de la funcion")

  const url = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read'

  const buscarVehiculo = (id) => {
    return new Promise((completado, rechazado) => {
      fetch(`${url}/${id}`).then(res => {
        if (res.status === 200){
          return completado(res.json())
        }else{
          throw new Error('No se encontro nada')
        }
      })
      .catch(error => {
        return rechazado(error.message)
      })
    })
  }

  /** Trabajo con promesas de forma asincrona (como debe hacerse en el front) */
  /*
  const vehiculo = buscarVehiculo("eaf5ad5d-c733-413a-9fb2-16af13d09e04")

  vehiculo.then(data => console.log(data))
  vehiculo.catch(err => console.warn(err))
  */

  try {
    const vehiculo = await buscarVehiculo("eaf5ad5d-c733-413a-9fb2-16af13d09e04")
    console.log("Hola mundo este es mi vehiculo: ", vehiculo)

   
  }catch(error){
    console.error(error)
  }

   console.log("khjasbdkjlqwdasw")
  

})()