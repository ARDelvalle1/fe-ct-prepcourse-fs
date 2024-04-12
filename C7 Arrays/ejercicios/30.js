function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

var busqueda, elRepetidoEs, posicion=0
while(posicion<numeros.length){
  busqueda=0
  for(var i=0;i<numeros.length;i++){
    if(numeros[posicion]===numeros[i]){
      busqueda=busqueda+1
    }if(busqueda===2){
        return elRepetidoEs=numeros[i]
    }
  }
  posicion=posicion+1
}if(posicion===numeros.length-1){
    return undefined
}
}

module.exports = encontrarElementoRepetido;