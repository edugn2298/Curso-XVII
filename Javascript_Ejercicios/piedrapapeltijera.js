let opcion = ['Piedra','Papel','Tijeras'];
const text = document.getElementById('contenido');

player1 = undefined;
player2 =undefined;

function juego(){
  let finalizar = 'SI';
  while(finalizar.toUpperCase() == "SI" ){
    // Obtener la opción del jugador 1
    let opcionJugador1 = parseInt(prompt("Ingresa la opción del Jugador 1 (0=Piedra, 1=Papel, 2=Tijeras): "));
    player1 = opcion[opcionJugador1];

    // Obtener la opción del jugador 2
    let opcionJugador2 = parseInt(prompt("Ingresa la opción del Jugador 2 (0=Piedra, 1=Papel, 2=Tijeras): "));
    player2 = opcion[opcionJugador2];

    if( player1===player2){
      document.querySelector('#contenido').textContent = 'Empate';
    } else if(player1==='Piedra' && player2==='Tijeras' || player1==='Tijeras' && player2==='Papel' || player1==='Papel' && player2==='Piedra' ) {
      document.querySelector('#contenido').textContent = 'EL ganador es el jugador 1';
      console.log('EL ganador es el jugador 1');
    } else {
      document.querySelector('#contenido').textContent = 'EL ganador es el jugador 2';
      console.log('EL ganador es el jugador 2');
    }

    finalizar = prompt('¿Quieres jugar otra ronda? (SI/NO)').toUpperCase();
  }
  console.log('Salí')
}

juego();

