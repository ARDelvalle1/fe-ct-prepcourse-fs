function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var mayor=0, indice

  if(array[0]===undefined)
  {
    return 0
  }

  if(array[0]<0){
    mayor=array[0]
    indice=0;
  }
  for(var i=0; i < array.length; i++) {
    if(array[i]>mayor) {
      mayor=array[i]
      indice=i
      }}
    return indice;
  }
 



module.exports = encontrarIndiceMayor;
