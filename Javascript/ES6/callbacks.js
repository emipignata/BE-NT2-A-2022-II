function obtenerUsuarioBD(callback){
  //Esto simula una llamada a la BD

  setTimeout(() => {
    const userData = {
      firstName: 'Carlos',
      lastName: 'Gonzalez',
      edad: 40
    }

    // suponiendo que tengo una llamada al Back y esta dura 1000 ms, aplico el callback en su respuesta
    callback(userData)

  }, 1000)
}

function saludoUsuario(user) {
  console.log(`Hola ${user.firstName} ${user.lastName}`)
}

obtenerUsuarioBD(console.warn)
obtenerUsuarioBD(console.error)

obtenerUsuarioBD(saludoUsuario)

obtenerUsuarioBD((user) => {
  if (user.edad >= 18){
    console.warn(`Bienvenido al Casino`)
  }else{
    console.error(`Error: No puedes entrar al casino`)
  }
  
  
})


