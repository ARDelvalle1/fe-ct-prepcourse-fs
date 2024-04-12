function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  for(var i=0;i<numeros.length;i++){
    if(numeros[i+1]-numeros[i]===2){
      return numeros[i+1]-1
    }
  }
  if(numeros[0]===undefined){
    return null
  }
  return null
}

module.exports = encontrarNumeroFaltante;