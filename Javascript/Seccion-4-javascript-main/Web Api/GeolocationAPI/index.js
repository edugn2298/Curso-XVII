/*

    ¿Que son las web apis?

    Las Web APIs (Interfaces de Programación de Aplicaciones Web) en JavaScript son interfaces proporcionadas por los navegadores que permiten a las páginas web interactuar con las funcionalidades subyacentes del navegador o del sistema operativo. Estas APIs permiten a los desarrolladores crear aplicaciones web dinámicas, interactivas y ricas en funciones al acceder a diversas funcionalidades como manipulación del DOM, manejo de eventos, obtención de datos de servidores y interacción con elementos multimedia.
    API de Geolocalización
    
    La API de geolocalización proporciona información sobre la ubicación del usuario
    a través del navegador. La API de geolocalización se puede utilizar para obtener
    la ubicación actual del usuario, así como para rastrear los cambios en la ubicación
    del usuario a lo largo del tiempo.

    Los métodos y propiedades de la API de geolocalización se pueden utilizar para
    obtener la ubicación actual del usuario, así como para configurar opciones de
    geolocalización, como la precisión y el tiempo de espera.

    Estos metodos y propiedades son:

    - navigator: Un objeto que proporciona información sobre el navegador del usuario,

    - navigator.geolocation: Un objeto que proporciona métodos y propiedades para
    interactuar con la API de geolocalización.

    - getCurrentPosition(): Este método se utiliza para obtener la ubicación actual del usuario. 
    Toma dos argumentos: una función de éxito que se llama cuando se obtiene la ubicación del usuario
    y una función de error que se llama si no se puede obtener la ubicación del usuario.

    - watchPosition(): Este método se utiliza para rastrear los cambios en la ubicación del usuario
    a lo largo del tiempo. Toma tres argumentos: una función de éxito que se llama cada vez que se
    actualiza la ubicación del usuario, una función de error que se llama si no se puede obtener la
    ubicación del usuario y un objeto de opciones que se utiliza para configurar la precisión y el
    tiempo de espera.

    - clearWatch(): Este método se utiliza para detener el seguimiento de la ubicación del usuario
    que se inició con el método watchPosition(). Toma un argumento que es el ID devuelto por el
    método watchPosition().

    - Propiedades de la API de geolocalización:
        
        - coords: Un objeto que contiene las coordenadas de la ubicación del usuario, incluida la latitud,
        la longitud, la precisión, la altitud, la precisión de la altitud, la dirección, la velocidad y la
        precisión de la velocidad. 
        NOTA: Solo funciona si se utiliza el método getCurrentPosition() o watchPosition().
        Valores admitidos: latitude, longitude, accuracy, altitude, heading, speed.
            - latitude: La latitud de la ubicación del usuario en grados decimales.
            - longitude: La longitud de la ubicación del usuario en grados decimales.
            - accuracy: La precisión de la ubicación del usuario en metros.
            - altitude: La altitud de la ubicación del usuario en metros sobre el nivel del mar.
            - heading: La dirección de la ubicación del usuario en grados en relación con el norte verdadero.
            - speed: La velocidad de la ubicación del usuario en metros por segundo.

        
        - timestamp: La fecha y hora en que se obtuvo la ubicación del usuario, es decir, el número de
        milisegundos desde el tiempo Epoch (1 de enero de 1970).
        
        - error: Un objeto que contiene información sobre cualquier error que ocurra al obtener la ubicación
        del usuario, incluido el código de error y el mensaje de error.

*/

const longitud = document.getElementById("longitud");
const latitud = document.getElementById("latitud");
const altitud = document.getElementById("altitud");
const precision = document.getElementById("precision");
const velocidad = document.getElementById("velocidad");
const direccion = document.getElementById("direccion");

//Ejemplo de uso 1
/*

/// Verificar si el navegador soporta la geolocalización
if ("geolocation" in navigator) {
  console.log("Geolocalización soportada");

  // Obtener la ubicación actual del usuario
  navigator.geolocation.getCurrentPosition((position) => {
      // Obtener las coordenadas de latitud y longitud y resto de información
      let user_latitud = position.coords.latitude;
      let user_longitud = position.coords.longitude;
      let user_precision = position.coords.accuracy;
      let user_altitud = position.coords.altitude;
      let user_velocidad = position.coords.speed;
      let user_direccion = position.coords.heading;

      let user_fecha = new Date(position.timestamp).toLocaleString();

      // Mostramos por consola las coordenadas
      console.log(`Latitud: ${user_latitud}`);
      console.log(`Longitud: ${user_longitud}`);
      console.log(`Precisión: ${user_precision}`);
      console.log(`Altitud: ${user_altitud}`);
      console.log(`Velocidad: ${user_velocidad}`);
      console.log(`Dirección: ${user_direccion}`);
      console.log(`Fecha: ${user_fecha}`);
  });
} else {
  console.log("Geolocalización no soportada");
}; */

//Ejemplo de uso 2

// Verificar si el navegador soporta la geolocalización
if ("geolocation" in navigator) {
  //mostramos por consola el mensaje de confirmacion
  console.log("Tu navegador soporta la API Geolocation");

  //accedemos a la API de geolocalizacion a su metodo de rastreo watchPosition()
  navigator.geolocation.watchPosition(
      //en la callback de exito obtenemos la ubicacion en un objeto "position"
      (position) => {
        //imprimimos la data para ver su estructura
          console.log(position);
          //conocida su estructura sacamos la data de su propiedad coordenadas
          //segun sea el dato que corresponda
          let user_latitude = position.coords.latitude;
          let user_longitude = position.coords.longitude;
          let user_altitude = position.coords.altitude;
          let user_precision = position.coords.accuracy;
          let user_velocidad = position.coords.speed;
          let user_direccion = position.coords.heading;

          //utilizando la fecha de la ubicacion traida en segundos en la propiedad timestamp
          //la convertimos en una hora legible por humanos con el metodo toLocaleDateString()
          let user_date = new Date(position.timestamp).toLocaleDateString("es-ES");

          //mostramos la data en su elemento HTML correspondiente si existe
          //y si es nula mostramos un texto de notificacion "Sin datos"
          longitud.innerText = user_longitude || "Sin datos";
          latitud.innerText = user_latitude || "Sin datos";
          altitud.innerText = user_altitude || "Sin datos";
          precision.innerText = user_precision || "Sin datos";
          velocidad.innerText = user_velocidad || "Sin datos";
          direccion.innerText = user_direccion || "Sin datos";
          //date.innerText = user_date || "Sin datos";

          //para detener el seguimiento de la ubicacion utlizamos un
          //setTimeout() y el metodo clearWatch(), definimos que sea luego
          //de 8 segundos el metodo clearWatch()
          setTimeout(() => {
              navigator.geolocation.clearWatch(position);
          }, 8000);
      },
      //si existen errores los mostramos por consola
      (error) => {
          console.log(error);
      })
} else{
  //si el navegador no soporta la API de geolocalizacion
  //mostramos por consola el mensaje de notificacion
  console.log("Tu navegador no soporta la API Geolocation");
}   


//ejemplo de uso 3 con google maps y getCurrentPosition()
function ubicarme(){
  //creamos las variables de los elementos HTML a utilizar
  const status = document.getElementById("status");
  const coordenadas = document.getElementById("map-link");

  // Función que se ejecuta si se obtiene la ubicación
  function success(ubicacion){
    //obtenemos la latitud y la longitud de la ubicacion del usuario
    const latitud =  ubicacion.coords.latitude;
    const longitud = ubicacion.coords.longitude;

    //imprimimos en el elemento HTML la latitud y longitud
    status.innerText = `Tu ubicacion es ${latitud}, ${longitud}`;
    //Le pasamos al elemento anchor en su propiedad href la latitud y longitud dentro de un link
    //de google maps que recibe la latitud y la longitud obtenidas
    coordenadas.href = `https://www.google.com/maps/@${latitud},${longitud},80m/data=!3m1!1e3?entry=ttu`;

    //mostramos un mensaje en el elemento HTML "a" con el link de google maps
    coordenadas.innerText = `Ver en el mapa tus cordenadas`; 
  }

  // Función de error en caso de no poder obtener la ubicación
  function error(){
    //mostramos un mensaje en el elemento HTML con un mensaje de error
    status.innerText = "No se pudo obtener tu ubicacion";
  }

  // Verificar si el navegador soporta la geolocalización
  if (navigator.geolocation){
    //mostramos por consola el mensaje de espera
    status.innerText = "Localizando...";
    //iniciamos la geolocalización pasandole a getCurrentPosition() la funcion success y error
    navigator.geolocation.getCurrentPosition(success, error);
  }else {
    //si el navegador no soporta la API de geolocalizacion
    status.innerText = "Tu navegador no soporta la API Geolocation";
  }
}

//ejecutamos la funcion de ubicar al presionar el boton encontrarme
document.getElementById("encontrarme").addEventListener("click", ubicarme);