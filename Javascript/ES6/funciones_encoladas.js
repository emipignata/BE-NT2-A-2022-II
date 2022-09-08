function imprimirUno(){
  console.log("Uno")  
}

function imprimirDos(){
  console.log("Dos")  
}

function imprimirTres(){
  console.log("Tres")  
}

setTimeout(imprimirUno, 3000)


setTimeout(imprimirDos)
setTimeout(imprimirUno)

imprimirTres()


console.log("Hola mundo....  yo me tengo que ejecutar 1ero")

const interval = setInterval(imprimirUno, 1000)

//console.log(interval)