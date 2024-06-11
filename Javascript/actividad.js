const array = [2,3,5];
function suma_array(array, suma = 0, contador = 0){
  if (array.lenght <= 0 ){
    suma += array(contador);
    console.log(suma);
    contador++;
    suma_array(array,suma,contador);
  }
}
suma_array(array);