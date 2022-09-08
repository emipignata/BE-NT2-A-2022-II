saludo()

//noFunction()
//otraFuncion()

function saludo(){
  console.log("Hola mundo")
}

const noFunction = function(){
  console.log("Esta funcion no es tomada en cuenta por el mecanismo hoisting")
}

noFunction()

const otraFuncion = () => console.log("Otra funcion que no es tomada en cuenta por el mecanismo hoisting")

otraFuncion()
