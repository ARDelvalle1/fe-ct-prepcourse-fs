function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  var total=[]
  total[0]=num+2
  var suma
  for(var i=1;i<10;i++){
    if(i===5){
      continue
    }else if(i<5){
      total[i]=total[i-1]+2
    }
    else if(i>5){
      total[i-1]=total[i-2]+2
    }   
    }
    return total
  }

console.log(continueStatement(50))


module.exports = continueStatement;
