function calculadora(numero1,operador,numero2){
  if (operador == '+'){
    console.log(parseInt(numero1) + parseInt(numero2));
  } else if(operador == '-'){
    console.log(parseInt(numero1) - parseInt(numero2));
  }else if ( operador == '/'  ){
    console.log(parseInt(numero1) / parseInt(numero2) );
  } else if (operador == '*'){
    console.log(parseInt(numero1) * parseInt(numero2))
  } else {
    console.log('Error, Datos invalidos')
  } 
}

calculadora('5','+','3');
calculadora(6,'+',4);
calculadora(6,'-',4);
calculadora(6,'/',4);
calculadora(6,'*',4);