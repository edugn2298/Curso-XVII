
function semaforo(color){
  if (color.toUpperCase() == 'VERDE'){
    console.log('Continua');
  }else if (color.toUpperCase() == 'AMARILLO'){
    console.log('Despacio');
  }else if (color.toUpperCase() == 'ROJO'){
    console.log('Detente');
  } else {
    console.log('Error');
  }


}

semaforo('Amarillo');
semaforo('Azul');
semaforo('Rojo');
semaforo('Verde');