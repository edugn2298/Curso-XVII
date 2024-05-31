
let numbers = [5,4,3,10,15,20,31,40]

function validacion(number){
  if (!isNaN(number)){
    if (number % 2 == 0){
        console.log('El número es PAR')
    } else {
        console.log('EL número es impar')
    }
  } else {
    console.log('El número es impar')
  }
}


for (let i=0; i < numbers.length; i++){
  console.log(numbers[i]);
  validacion(numbers[i]);
  console.log(numbers % 2);
  
}
