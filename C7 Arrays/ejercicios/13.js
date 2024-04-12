function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var pares = [], j=0
  for(i=0;i<array.length;i++){
    if(array[i]%2===0){
      pares[j]=array[i]
      j=j+1;
    }
  }
  return pares
  }


module.exports = filtrarNumerosPares;
