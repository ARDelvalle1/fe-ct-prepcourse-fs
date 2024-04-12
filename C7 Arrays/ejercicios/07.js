function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

    sorted = false;

while(!sorted) {
  sorted = true;
  for(var i=1; i < array.length; i++) {
    if(array[i] < array[i-1]) {
      let temp = array[i];
      array[i] = array[i-1];
      array[i-1] = temp;
      sorted = false;
    }
  }
}   
  return array
}

module.exports = ordenarArray;
