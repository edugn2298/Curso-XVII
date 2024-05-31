let opcion = ['Piedra','Papel','Tijeras'];

player1 = undefined;
player2 =undefined;

function juego(){
  let finalizar = 'SI';
  while(finalizar.toUpperCase() == "SI" ){
    console.log('Entre');

    finalizar = input('¿Quieres jugar otra ronda? (SI/NO)').toUpperCase();
  }
  console.log('Salí')
}

juego();

