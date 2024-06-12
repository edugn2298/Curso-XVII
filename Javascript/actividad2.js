var numeros = [5,2,7,8,10,2,3,4];
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

mayor(numeros);