function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:


    if(array.includes('Enero')===false||array.includes('Marzo')===false||array.includes('Diciembre')===false){
      
      return "No se encontraron los meses pedidos"
    }else{
      var resultado=[], j=0
      for(var i=0;i<array.length;i++){
        switch(array[i]){
          case 'Enero':
            resultado[j]=array[i]
            j=j+1
            break
          case 'Marzo':
            resultado[j]=array[i]
            j=j+1
            break
          case 'Noviembre':
            resultado[j]=array[i]
            j=j+1
            break
        }
      }
    }
    return resultado
    }

module.exports = mesesDelAño;
