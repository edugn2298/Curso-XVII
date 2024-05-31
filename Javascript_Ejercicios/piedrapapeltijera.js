let opcion = ['Piedra','Papel','Tijeras'];

function juego(){
  let finalizar = 'SI';
  while(finalizar.toUpperCase() == "NO" ){

    finalizar = prompt('¿Quieres jugar otra ronda? (SI/NO)').toUpperCase();
  }
}

juego();

