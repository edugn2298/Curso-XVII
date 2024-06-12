/*
1) Crea una función que reciba un array de numeros y los sume
*/

function suma_array(array, suma = 0, contador = 0){
  if (array.lenght <= 0 ){
    suma += array(contador);
    console.log(suma);
    contador++;
    suma_array(array,suma,contador);
  }
}

/*
2) Crea una función que reciba un array de numeros y devuelva el mayor
*/

function mayor(array2 ,superior = 0,contador=0){
  if(contador < array2.length){
    if(array2[contador] > superior){
      superior = array2[contador];
      console.log(superior);
      contador++;
      mayor(array2,superior,contador);
    } else {
      console.log(superior);
      contador++;
      mayor(array2,superior,contador);
    }
  } else if (contador == array2.length){
    console.log(superior);
  }
}

/*
3) Crea una funcion que reciba dos arrays y compare si son iguales
*/

const array1 = [2,3,5];
var numeros = [5,2,7,8,10,2,3,4];
const array3 = [1,2,3];
function comparacion(array1,array2, contador = 0){
  if(array1.length == array2.length){
    if (array1.length != contador){
      if(array1[contador] === array2[contador]){
        contador++;
        comparacion(array1,array2,contador);
      }else {
        console.log('No son iguales');
        console.log(array1,array2);  
      }
    }else if (array1.length == contador){
      console.log('Son iguales');
      console.log(array1,array2);
    }
    
  }else {
    console.log('No son iguales');
    console.log(array1,array2);
  }
}

comparacion(array1,numeros);
comparacion(array1,array3);
comparacion(array3,array3);