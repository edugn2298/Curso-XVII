/* 
    ¿Como funciona la API de texto a voz?
    - SpeechSynthesis: es una interfaz global que se utiliza para controlar y manipular la funcionalidad 
    de síntesis de voz en el navegador web. Es parte de la API de Web Speech y permite que las aplicaciones 
    web conviertan texto en voz hablada.
    
    Permite que la aplicación hable a través del sistema de audio del dispositivo.
    - SpeechSynthesisUtterance: es un objeto que representa un mensaje que se va a leer en voz alta.
    - SpeechSynthesisVoice: es un objeto que representa una voz que se puede usar para la síntesis de voz.
    
    Métodos y propiedades clave de `speechSynthesis`:

    1) `speechSynthesis.speak()`: Este método inicia la síntesis de voz del texto especificado. Acepta un objeto `SpeechSynthesisUtterance` que contiene el texto que se va a hablar.
    2) `speechSynthesis.cancel()`: Este método cancela la síntesis de voz actual, si la hay.
    3) `speechSynthesis.pause()`: Este método pausa la síntesis de voz actual.
    4) `speechSynthesis.resume()`: Este método reanuda la síntesis de voz pausada.
    5) `speechSynthesis.getVoices()`: Este método devuelve una lista de objetos `SpeechSynthesisVoice` que representan las voces disponibles en el dispositivo.
    6) `speechSynthesis.onvoiceschanged`: Este evento se dispara cuando la lista de voces disponibles cambia.
    7) `speechSynthesis.pending`: Esta propiedad de solo lectura indica si hay una tarea de síntesis de voz en la cola que aún no ha comenzado.
    8) `speechSynthesis.speaking`: Esta propiedad de solo lectura indica si actualmente se está hablando una tarea de síntesis de voz.
    9) `speechSynthesis.paused`: Esta propiedad de solo lectura indica si la síntesis de voz está pausada.

    Ten en cuenta que la disponibilidad de voces y la calidad de la síntesis de voz pueden variar dependiendo del dispositivo y del navegador.


    Mas voces disponibles en: https://cloud.google.com/text-to-speech/docs/voices?hl=es-419
*/


// Seleccionar el boton que inicia la lectura
const hablar = document.getElementById("btn-hablar");


// Agregar eventos

// Hablar
hablar.addEventListener("click", () => {
  // Seleccionar el texto que se va a leer
  let text = document.getElementById("mensaje").value;

  // Verificar si hay texto
  if(text){
    const voz = new SpeechSynthesisUtterance(text);

    //comprobar que idioma se va a leer
    voz.lang = 'es-Ve';

    //hablar utilizando el metodo speak() de speechSynthesis
    speechSynthesis.speak(voz);
  }else{
    speechSynthesis.speak(new SpeechSynthesisUtterance("Por favor, escribe algo"));
  }
})

//Conseguir las voces disponibles
document.getElementById("voces").addEventListener("click", () => {
  //para que nuestro navegador detecte las voces disponibles
  const voces = speechSynthesis.getVoices();

  //si hay voces disponibles 

  if(voces.length > 0){
    //para dar el ejemplo vamos a mostrar primero las voces que tenemos
    //console.log(voces);

    //luegos para el ejemplo compuesto vamos a limpiar la consola y mostrar las voces
    //ordenadas por indice
    console.clear();
    console.log("Voces disponibles: ");
    voces.forEach((voz, index) => {
      console.log(`Voz ${index + 1} - ${voz.name} - ${voz.lang}`);
      /*
        Console.table()
        Muestra datos tabulares como una tabla.

        Esta función toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns.

        Muestra data como una tabla en la consola. Cada elemento en el array (o propiedad enumerable si data es un objeto) será una fila en la tabla.

        La primera columna de la tabla se identificará como (index). Si data es un array, sus valores serán los índices del array. Si data es un objeto, entonces sus valores serán los nombres de las propiedades. Tenga en cuenta que (en Firefox) console.table está limitado a mostrar 1000 filas (la primera columna es la llamada index).
      */
      console.table(voz)
  })
  }
  // Sino, mostrar un mensaje en consola.
  else{
    console.log("las voces no han cargado aun")
  }
})

//Pausar el audio


//seleccionamos el boton pausar 
document.getElementById("btn-pause").addEventListener("click", () => {

// comprobamos con speechSynthesis.paused si el audio esta pausado o no
  if(!speechSynthesis.paused){
    //Comprobamos si el audio se encuentra en ejecucion con speechSynthesis.speaking
    if (speechSynthesis.speaking) {
      // usamos el metodo "pause" de speechSynthesis para pausar la ejecucion del audio
      speechSynthesis.pause();
    }else{
      alert("mi pana no hay nada que pausar")
    }
  }else{
    alert("mi pana ya estaba pausada")
  }
})

//Reanudar el audio


//seleccionamos el boton reanudar
document.getElementById("btn-resume").addEventListener("click", () => {
  //comprobamos con speechSynthesis.paused si el audio esta pausado o no
  if(speechSynthesis.paused){
    // usamos el metodo "resume" de speechSynthesis para reanudar la ejecucion del audio
    speechSynthesis.resume();
  }else{
    alert("mi pana no se puede reanudar")
  }
})

//cancelar el audio

//seleccionamos el boton cancelar
document.getElementById("btn-stop").addEventListener("click", () => {
  //Comprobamos con speechSynthesis.speaking si el audio se encuentra en ejecucion y que no este pausado con speechSynthesis.paused
  if(speechSynthesis.speaking || speechSynthesis.paused){
    // usamos el metodo "cancel" de speechSynthesis para detener la ejecucion del audio
    speechSynthesis.cancel();
    alert("mi pana se ha detenido")
  }else{
    alert("mi pana no hay nada que detener")
  }
})