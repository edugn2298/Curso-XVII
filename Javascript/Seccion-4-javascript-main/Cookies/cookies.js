/* 

¿Qué son las Cookies?

Las cookies en JavaScript son pequeños fragmentos de datos que se
almacenan en el navegador del usuario. Son creadas y enviadas por
un sitio web al navegador del usuario, y se guardan en el dispositivo
del usuario para que puedan ser utilizadas posteriormente por el mismo sitio web.

¿Para que se usan las cookies?

Su propósito principal es identificar al usuario almacenando su historial
de actividad en un sitio web específico, de manera que se le pueda ofrecer
el contenido más apropiado según sus hábitos. Esto quiere decir que cada
vez que se visita una página web por primera vez, se guarda una cookie en 
el navegador con un poco de información. Luego, cuando se visita nuevamente
la misma página, el servidor pide la misma cookie para arreglar la configuración
del sitio y hacer la visita del usuario tan personalizada como sea posible.

Estas cookies pueden tener una finalidad simple, como saber cuándo fue la última
vez que el usuario entró a cierta página web; o algo más importante como es guardar
todos los artículos puestos en el carrito de compras de una tienda, una acción que
se va guardando en tiempo real.

¿Cuáles son los tipos de cookies más comunes?

Existen varios tipos de cookies, pero a las más comunes:

Se les llama session cookies,que tienen un corto tiempo de vida ya que son borradas cuando cierras el navegador. 

También tenemos persistent cookies o cookies persistentes, que se usan para rastrear 
al usuario guardando información sobre su comportamiento en un sitio web durante un 
período de tiempo determinado; las cookies persistentes pueden ser borradas limpiando 
los datos del navegador pero algunas tienen una fecha de expiración.

Las secure cookies o cookies seguras almacenan información cifrada para evitar
que los datos almacenados en ellas sean vulnerables a ataques maliciosos 
de terceros. Se usan sólo en conexiones HTTPS.

Las zombie cookies son interesantes porque se recrean a sí mismas luego de que son borradas.
Esto quiere decir que el navegador realmente no tiene ningún poder sobre ellas porque
continuarán regenerándose, de ahí el nombre tan creativo que tienen. 
Las cookies zombis se guardan en el dispositivo y no en el navegador,
usualmente con la finalidad de que se pueda acceder a ellas sin importar 
qué navegador se esté usando. Esta misma característica puede convertirlas 
en una amenaza para la privacidad y seguridad del usuario, y en muchas 
ocasiones son usadas con fines ilegítimos y malintencionados.

Diferencias entre las cookies y las session y local storage

La principal diferencia es su tamaño maximo de archivos almacenados. Las cookies
solo pueden almacenar un archivo de 4KB, mientras que las session y local storage
pueden almacenar hasta 5MB.

Otra diferencia clave entre las cookies y local storage es
que las seran persistentes hasta el momento en que expiren y se borren,
mientras que el localStorage sera persistente hasta que el usuario lo borre.

otra diferencia es que las cookies son archivos que guarda una web y luego se las pasa al navegador
mientras que las session y local storage son directamente almacenadas en el navegador.


¿Como se comporta una cookie en el navegador?

Si no definimos una fecha de expiración, la cookie se borra cuando el usuario cierra el navegador.

es decir tendra el mismo comportamiento que la SessionStorage

Por el contrario si definimos una fecha, la cookie persistira hasta esa fecha. y luego se borrara
automaticamente.

Para borrarla antes debemos destruir la cookie.


¿Porque una cookie solo sirve con un sitio web?


1. Ausencia de servidor HTTP:

Al abrir un archivo HTML directamente, el navegador no tiene un servidor HTTP con el que interactuar. Las cookies se establecen y recuperan típicamente a través de solicitudes HTTP, que requieren un entorno de servidor adecuado.
Herramientas como Live Server crean un servidor local que permite al navegador comunicarse con el archivo HTML como si estuviera alojado en un servidor web.

2. Seguridad del protocolo de archivo:

Los navegadores tienen restricciones de seguridad para los archivos abiertos utilizando el protocolo file://. Estas restricciones pueden impedir ciertas acciones, como establecer o acceder a cookies, para protegerse contra archivos locales maliciosos.
Los servidores web (como los creados por Live Server) utilizan los protocolos http:// o https://, que no tienen estas mismas restricciones.

3. Caché del navegador:

Los navegadores pueden almacenar en caché ciertos recursos, incluidas las cookies, de visitas anteriores a un sitio web. Cuando se abre un archivo HTML directamente, el navegador puede utilizar las cookies almacenadas en caché en lugar de comprobar si hay nuevas.
Herramientas como Live Server suelen obligar al navegador a recargar los recursos del archivo, asegurando que se obtengan las últimas cookies.
4. Dominio y ruta de la cookie:

Las cookies se asocian con un dominio y una ruta específicos. Si el dominio o la ruta en su archivo HTML no coincide con el dominio o la ruta donde se establecieron las cookies, el navegador no las enviará ni las recibirá.
Live Server se asegura de que el dominio y la ruta se establezcan correctamente para el entorno del servidor local, evitando estos problemas.

Sintaxis:
    
    // Crear una cookie con valor
    document.cookie = "nombre=valor"; 
    NOTA: Esta cookie al no tener tiempo de expiracion, por defecto se elimina al cerrar el navegador o cerrar la pestaña,
    es decir, se comportara como sessionStorage.


    // Crear una cookie con valor, fecha de expiración
    document.cookie = "nombre=valor; expires=fecha";
    NOTA: La fecha se maneja en formato UTC, ejemplo: 
        "Thu, 01 Jan 1970 00:00:00 UTC"
        "dia, d/Mes mes año hor:min:seg UTC"
    
    // Crear una cookie con valor, fecha de expiración, directorio
    document.cookie = "nombre=valor; expires=fecha; path=directorio";

    // Crear una cookie con valor, fecha de expiración, directorio, dominio
    document.cookie = "nombre=valor; expires=fecha; path=directorio; domain=dominio";

    // Crear una cookie con valor, fecha de expiración, directorio, dominio y seguridad
    document.cookie = "nombre=valor; expires=fecha; path=directorio; domain=dominio; secure";


*/

//Primero Realizamos todas las importaciones correspondientes
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const input = document.getElementById("usernameInput");
const deleteButton = document.getElementById("deleteButton");


//Para crear una cookie:
function saveCookie(){
  //validamos que el input no este vacio
  if(!input.value){
    //En caso de que el input este vacio, mandamos un alert
    alert ("Por favor ingresa un nombre de usuario");
  }else if (input.value){
    //En caso de que el input no este vacio, traemos el valor que el
    //escribio en el input y lo guardamos en una variable
    let nombre = input.value;
    //para obtener la fecha actual creamos una variable de tipo Date utilizando la clase Date()
    let date = new Date();
    //para establecer la fecha de expiración, establecemos una nueva fecha utilizando el metodo setTime()
    // al que le pasamos la fecha actual date.getTime() y le sumamos el tiempo que queremos que dure la cookie en milisegundos
    date.setTime(date.getTime() + 80000); //le pasas milisegundos

    //para crear la cookie accedemos al metodo document.cookie y le pasamos el nombre de la cookie, el valor, y la fecha de expiración,
    //en caso del resto de propiedades se las pasamos luego de un";"

    //como la fecha no esta en el formato UTC, debemos de convertirla a este formato para que el navegador la pueda leer
    //lo hacemos utilizando el metodo toUTCString() que nos convierte la fecha a este formato (sirve con variables de tipo Date)
    document.cookie = `nombreUsuario=${nombre}; expires=${date.toUTCString()};`;
    //mostramos un alert indicando que se guardo la cookie
    alert("Se guardo la cookie con exito");
  }
}

//Para crear una cookie de un Objeto:
function saveObjectCookie(){
  //validamos que el input no este vacio
  if(!input.value){
    //En caso de que el input este vacio, mandamos un alert
    alert ("Por favor ingresa un nombre de usuario");
  }else if (input.value){
    //En caso de que el input no este vacio, definimos un objeto a guardar en una variable
    let objetoAnidado = {
      nombre: "delvis",
      apellido: "Sanabria",
      pais: "venezuela"
    }

    //creamos otra variable para convertir el objeto a JSON utilizando el metodo JSON.stringify()
    let ObjetoJSOn = JSON.stringify(objetoAnidado);
    //para obtener la fecha actual creamos una variable de tipo Date utilizando la clase Date()
    let date = new Date();
    //para establecer la fecha de expiración, establecemos una nueva fecha utilizando el metodo setTime()
    // al que le pasamos la fecha actual date.getTime() y le sumamos el tiempo que queremos que dure la cookie en milisegundos
    date.setTime(date.getTime() + 80000); //le pasas milisegundos

    //para crear la cookie accedemos al metodo document.cookie y le pasamos el nombre de la cookie, el valor en este caso nuestro
    // Objeto convertido a JSON, y la fecha de expiración,
    //en caso del resto de propiedades se las pasamos luego de un";"

    //como la fecha no esta en el formato UTC, debemos de convertirla a este formato para que el navegador la pueda leer
    //lo hacemos utilizando el metodo toUTCString() que nos convierte la fecha a este formato (sirve con variables de tipo Date)
    document.cookie = `nombreUsuario=${ObjetoJSOn}; expires=${date.toUTCString()};`;
    alert("Se guardo la cookie con exito");
  }
}

//para actualizar una cookie se utilizara exactamente el mismo metodo
function updateCookie(){
  //validamos que el input no este vacio
  if(!input.value){
    //En caso de que el input este vacio, mandamos un alert
    alert ("Por favor ingresa un nombre de usuario para actualizar");
  }else if (input.value){
    //En caso de que el input no este vacio, definimos una variable para guardar el valor del input
    let nombre = input.value;
    //para obtener la fecha actual definimos una nueva variable de tipo Date utilizando la clase Date()
    let date = new Date();
    //para establecer la fecha de expiración, establecemos una nueva fecha utilizando el metodo setTime()
    // al que le pasamos la fecha actual date.getTime() y le sumamos el tiempo que queremos que dure la cookie en milisegundos
    date.setTime(date.getTime() + 80000); //le pasas milisegundos

    //para crear la cookie accedemos al metodo document.cookie y le pasamos el nombre de la cookie que queremos actualizar
    //(debe ser el mismo que ya esta previamente guardado),el nuevo valor que queremos que tenga la cookie, y la fecha de expiración,
    document.cookie = `username=${nombre}; expires=${date.toUTCString()};`;

    //En el siguiente ejemplo se usan los parametros extra, patch para definir la ruta donde se guardara la cookie y el dominio de la cookie
    //document.cookie = `username=${nombre}; expires=${date.toUTCString()}; path=/; domain=127.0.0.1:5500; secure`;

    //finalmente mostramos un alert indicando que se guardo la cookie
    alert("Se guardo la cookie con exito");
  }
}


//Agregamos al evento click del boton guardar, ejecutar la funcion saveCookie
saveButton.addEventListener("click", saveCookie);


//Para cargar una cookie

function loadFromCookies(){

  //metodo 1 para buscar cookies

  //creamos una variable para obtener el valor de la cookie
  const nombreUsuario = document.cookie.split('; ').find(c => c.startsWith('nombreUsuario=')).split('=')[1];


  /* 
  Explicacion del metodo 1 para buscar cookies:

  //paso 1: creamos la variable cookie para obtener todas las cookies almacenadas
  let cookie = document.cookie;

  //paso 2: las mostramos para ver como trae los datos
  console.log(cookie);

  //paso 3: Separamos todas las cookies en un arreglo con el metodo split teniendo como limite el "; "
  cookie = cookie.split('; ');

  //paso 4: mostramos la cookie para ver como trae los datos
  console.log(cookie);

  //paso 5: Buscamos la cookie que queremos utilizando el metodo find() al que le pasaremos la condicion (c => c.startsWith('nombre de la cookie'))
  //Es decir que nos busque la cookie (c) que comienzo con "DatosUsuario="
  cookie = cookie.find(c => c.startsWith('DatosUsuario='));

  //paso 6: mostramos la cookie para ver como trae los datos
  console.log(cookie);

  //paso 7: Separamos la cookie en un arreglo con el metodo split teniendo como limite el "=" y
  //en este caso  mostramos el segundo valor de ese arreglo que equivale al valor de la cookie
  cookie = cookie.split('=')[1];

  //paso 8: mostramos la cookie para ver como trae los datos
  console.log(cookie); 
  
  */

  //metodo 2 para buscar cookies:

  //aqui utilizamos el metodo match() para encontrar la cookie que coincide con la estructura
  //de la cookie que queremos (en este caso la cookie que tiene el nombre de "nombreUsuario=""cualquierValor"")
  //const nombreUsuario = document.cookie.match(/nombreUsuario=([^;]+)/)[1];

//Finalmente si existe la cookie
  if(nombreUsuario){
    //convierten el JSON que nos entrega la cookie en un objeto de JavaScript
    //con el metodo JSON.parse()
    let usuarioConvertido = JSON.parse(nombreUsuario);
    //mostramos el valor de una propiedad de la cookie en el elemento "p" del HTML
    document.getElementById("username").innerText = usuarioConvertido.nombre;
    //mostramos el valor de la cookie en la consola
    console.log(usuarioConvertido);
  }else {
    //en caso de que no exista la cookie
    alert("No hay cookie");
  }
}

//De ultimo agregamos al evento click del boton cargar cookie, ejecutar la funcion loadFromCookies
loadButton.addEventListener("click", loadFromCookies);

//Borrar la cookie

//para esto lo unico que debemos hacer es establecer una fecha de expiracion anterior 
//a la fecha actual (en este caso la fecha actual es de 1970-01-01T00:00:00.000Z)

function deleteCookie(){
  //solo debemos pasarle el nombre de la cookie y la fecha de expiración
  document.cookie = "nombreUsuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  //finalmente mostramos un alert indicando que se elimino la cookie
  alert("Se elimino la cookie con exito");
  //vaciamos el input en caso de que tuviera valor
  input.value = "";
  //limpiamos el texto del elemento "p" del HTML asociado
  document.getElementById("username").innerText = "";
}

//agregamos al boton borrar cookie el evento click para ejecutar la funcion deleteCookie
deleteButton.addEventListener("click", deleteCookie);