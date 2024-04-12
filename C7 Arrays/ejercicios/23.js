function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  var resultado=[],total=num

  for(var i=0;i<10;i++){
    resultado[i]=total+2
    total=total+2
    if(i===resultado[i]){
      break
    }else if(i===9){
      return resultado
    }
  }
  return 'Se interrumpió la ejecución'
}

module.exports = breakStatement;
