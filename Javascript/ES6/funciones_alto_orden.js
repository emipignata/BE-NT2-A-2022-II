const saludar = (function(){
  var mensaje = "Hola mundo"

  console.log(mensaje)

  function saludando(){
    console.log(`Mensaje dentro del clousure: ${mensaje} `)  
  }

  return saludando
})()

console.log(typeof saludar)

saludar()



const counter = (function(){
  let contador = 0

  console.log("Inicializacion de counter... (Buscando data a la API)")

  function dec(){
    contador --
  }

  return {
    showContador: function(){
      console.log(contador)
    },
    sum: (num) => contador += num,
    inc: () => contador++,
    dec
    //dec: () => contador--
  }  

})()



console.log(counter, typeof counter)

counter.showContador()
counter.sum(15)
counter.showContador()
counter.dec()
counter.dec()
counter.dec()
counter.showContador()
