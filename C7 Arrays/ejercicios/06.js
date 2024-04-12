function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  var j=0, invertido=[]
  for(i=array.length-1;i>=0;i--){
    invertido[j]=array[i]
    j=j+1
  }
  return invertido
}

module.exports = invertirArray;
