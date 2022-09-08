if (true){
  var ambito = "Esta variable estara disponible hasta que el codigo y/o funcion termine"

  console.log("ambito", ambito)
}

console.log("ambito", typeof ambito)

if (true){
  let blockscoped = "Esta variable estara solo disponible dentro de este bloque de control"

  console.log("blockscoped", blockscoped)

  const otroBlock = "Esta variable tambien estara solo disponible dentro de este bloque de control"

  console.log("otroBlock", otroBlock)
}

console.log("blockscoped", typeof blockscoped)
console.log("otroBlock", typeof otroBlock)