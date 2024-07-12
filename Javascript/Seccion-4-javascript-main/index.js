/* 

¿Qué es Try-Catch?

Es una estructura de control de excepciones que permite probar código para detectar errores y, en caso de que se produzca una excepción, ejecutar un bloque de código de manejo de excepciones para manejar el error.

El bloque try contiene el código que se está probando para errores, y el bloque catch contiene el código que se ejecutará en caso de que se produzca una excepción.

¿Qué es una Excepción?

Una excepción es un evento anormal que ocurre durante la ejecución de un programa que interrumpe el flujo normal de ejecución y puede ser tratado por el programador para prevenir errores graves. Esto permite la continuidad ininterrumpida en la ejecución del código en caso de existir algún error en el proceso.

Finally es una cláusula opcional, no es una propiedad ni un método como tal, sino una parte de la sintaxis de la estructura de control Try-Catch. Su propósito es permitir que los programadores ejecuten un bloque de código de limpieza o de seguimiento, registrar información después de que se haya ejecutado el bloque try y el bloque catch.

Excepciones comunes:

- ReferenceError: Se produce cuando se hace referencia a una variable no definida.
- SyntaxError: Se produce cuando hay un error de sintaxis en el código.
- TypeError: Se produce cuando un operador o función es invocado en un objeto que no es  válido para ese tipo de operación o función.

*/

//Ejemplo de la estructura de control Try-Catch

//en el bloque try colocamos lo que queremos probar a ejecutar
try {
  console.log("Este es nuestro bloque a ejecutar")

  //en el bloque catch colocamos lo que queremos que se ejecute en caso de que se produzca una excepción
} catch (error) {
  /* 
  
  Desglose de la línea

  throw:

  La palabra clave throw se utiliza para lanzar una excepción. Cuando se ejecuta throw, la ejecución del código se detiene y el control se pasa a la primera cláusula catch que coincide en la pila de llamadas.
  new Error("..."):

  new Error("...") crea un nuevo objeto de tipo Error. La clase Error es una clase incorporada en JavaScript utilizada para representar errores.
  El constructor Error acepta un mensaje como argumento, que es una cadena de texto describiendo el error. En este caso, el mensaje es "Error de tipo: No puedes llamar como funcion a algo que no es una funcion.".

  */
  throw new Error("Ocurrio un error al traer los datos")
}

//Ejemplos de excepciones

//Reference Error 

try {
  console.log(miVariable);
}catch(error){
  if(error instanceof ReferenceError){
  console.log("Error de referencia: la variable mivariable no esta definida")
  }else{
    console.error("Error inesperado: " , error)
  }
}

//SyntaxError

try {
  console.log(miFuncion();
} catch (error) {
  if (error instanceof SyntaxError){
    console.error("Error de sintaxis: Falta un parentesis")
  } else{
    console.error("Ha ocurrido sepa dios cual es")
  }
}

//TypeError

try {
  let notAfunction = 123;
  notAfunction()
} catch (error) {
  if(error instanceof TypeError){
  console.error("Erro de tipo: no puedes llamar como funcion a algo que no es una funcion")
  }
}

/*El operador instanceof en JavaScript:

El operador instanceof en JavaScript se utiliza para verificar si un objeto
es una instancia de un tipo de constructor específico. En otras palabras, 
comprueba si el objeto fue creado utilizando un constructor concreto o si
desciende de él a través de la herencia.
*/

let numeros = 1234;

numeros.toUpperCase()

//Asincronia 

/*Funciones asincronas:
  estas Permiten que tu código siga ejecutando otras instrucciones mientras se esperan
  resultados de operaciones que toman tiempo, como peticiones a servidores o la realización
  de cálculos complejos.
  
¿Qué es el asincronismo?

  El asincronismo es una técnica que permite a los programas ejecutar tareas de manera no bloqueante.
  Esto permite que el programa puede continuar con otras tareas mientras se completa una tarea asíncrona,
  en lugar de bloquearse y esperar a que se complete.

  El asincronismo es fundamental para mejorar la experiencia del usuario y mejorar la eficiencia
  del programa, especialmente cuando se trata de tareas que pueden tardar un tiempo en completarse,
  como las solicitudes de red y consumo de API´s.

  Hay varias formas de lograr el asincronismo, como promesas, async-await, setTimeout,
  setInterval y la utilización de eventos, cada uno de estos enfoques ofrece diferentes
  ventajas y desventajas y puede ser apropiado en función del uso que se le quiera dar.

¿Que es un callback?

  Es en palabras simples una funcion que se pasa a otra como argumento y se ejecuta despues de que se haya
  completado alguna cosa

*/

//Las callbacks 

//definimos una funcion y le pasamos dos parametros un array "miArray" y nuestra funcion de callback "miCallback"
function agregar (miArray, miCallback){
  //utilizamos un metodo de array para agregar un elemento en el array
  miArray.push("Delvis");
  //ejecutamos nuestra funcion de callback
  miCallback();
}

let nombres = ["Roberto", "Jesus"];

agregar(nombres, ()=>{
  console.log("Hemos agregado un nombre");
  console.log(nombres);
})

//Segundo ejemplo

//Con callbacks

//Definimos la funcion para cargar las imagenes y le pasamos dos argumentos la url de la imagen y la funcion de callback
function cargarImagenes(urlImagen, callback){

  //creamos una nueva imagen
  const imagen = new Image()

  //le pasamos la url de la imagen a la imagen
  imagen.src = urlImagen

  //cuando la imagen se cargue se ejecuta la funcion de callback
  imagen.onload = ()=> callback(imagen)
  
}

//Llamamos a la funcion para cargar las imagenes y le pasamos la url de la imagen y la funcion de callback
cargarImagenes(
  "https://imagen.ejemplo.com/foto.jpg", 
  //cuando la imagen se cargue se ejecuta la funcion de callback que lo que hace es agregar la imagen al body y mostrarla por consola
  (imagenCargada)=>{
console.log("la imagen cargo")
document.body.appendChild(imagen)
})

//Sin usar Callbacks

//Definimos la imagen
const imagen = new Image()


//Definimos la funcion para crear las imagenes y le pasamos dos argumentos la url de la imagen
function crearImagenes(urlImagen){
  //le pasamos la url de la imagen a la imagen
  imagen.src = urlImagen
  
}

//Definimos la funcion para cargar las imagenes y le pasamos la imagen
function cargarImagen(imagen){
  //cuando la imagen se cargue se agrega la imagen al body
  imagen.onload = document.body.appendChild(imagen)
}

//Llamamos a la funcion para crear las imagenes y le pasamos la url de la imagen
crearImagenes("https://imagen.ejemplo.com/foto.jpg");

//Llamamos a la funcion para cargar las imagenes y le pasamos la imagen
cargarImagen(imagen)


/*
SetInterval y setTimeout:
  setInterval:

  Te permite ejecutar una función de forma repetitiva a intervalos de tiempo específicos.
  Es como tener un reloj despertador que te recuerda hacer algo cada cierto tiempo.

  setTimeout:
  Ejecuta una función una sola vez después de un retraso de tiempo especificado. 
  Es como programar una tarea para que se ejecute en el futuro.
*/


//SetInterval:

//para utilizar setInterval debes de usar la palabra reservada "setInterval" que recibe dos argumentos, una funcion y un tiempo (En Segundos)
setInterval(()=>{
  console.log("Hola desde el setInterval")
},2000)

//SetTimeout

//para utilizar setTimeout debes de usar la palabra reservada "setTimeout" que recibe dos argumentos, una funcion y un tiempo (En Segundos)
setTimeout(()=>{
  console.log("Hola desde el setTimeout")
},5000)


//Promesas

/* 

Las promesas en JavaScript son como un acuerdo entre dos partes: una función que
realiza una operación asíncrona (como una petición a un servidor) y otra función
que espera el resultado de esa operación. La función asíncrona le "promete"
a la otra función que le entregará el resultado una vez que esté disponible,
y la otra función puede "confiar" en que la promesa se cumplirá.

*/

//

const datos = {
  nombre: "Delvis",
  apellido: "Sanabria",
  pais: "Venezuela"
}

//Estructura de una promesa

//definimos primero una nueva promesa usando la palabra reservada "new" y luego el constructor de promesas "Promise"
const miPromesa = new Promise(
  //Se ejecutara luego de que suceda Cualquier cosa

  //recibe dos argumentos callback:
  //resolve : cuando la promesa se cumple
  //reject : cuando la promesa no se cumple
  (resolve, reject)=>{
    if(datos){

      //cuando la promesa se cumple se ejecuta el resolve y pasaremos la respuesta atraves del argumento
      resolve("Se cumplio la promesa")
    }else{

      //cuando la promesa no se cumple se ejecuta el reject y pasaremos la respuesta atraves del argumento
      reject("no se cumplio la promesa")
    }
});

//luego cuando ejecutemos la promesa utilizamos el metodo ".then" para obtener la respuesta de esa promesa
miPromesa.then(
  //cuando se cumple la promesa se ejecuta esta funcion utilizandola como argumento
  function(respuesta){
    console.log(`La respuesta fue: ${respuesta}`)
  }
).catch(
  //cuando no se cumple la promesa se ejecuta esta funcion para el manejo de errores
  function(error){
    console.log(`La respuesta fue: ${error}`)
  }
)

//Metodos HTTP

//Get : para pedir u obtener datos (informacion)

//Post : para enviar datos (informacion)

//Put/Patch : para modificar datos (informacion)

//Delete : Sirve para borrar datos (Informacion) 

//los estados de las API son:

//-Respuesta correcta (200,201,204)
//-Respuesta incorrecta (400,404,500)
//-Error interno (500)

//JSON

//JavasCript Object Notation

//La diferencia con un objeto normal de JS es que el JSON encierra en comillas tanto la clave como el valor

//Esto es un JSON
{
  "nombre": "delvis",
  "apellido": "Sanabria",
  "pais": "venezuela"
}


//Esto es un objeto
let persona = {
  nombre: "Delvis",
  apellido: "Sanabria",
  pais: "Venezuela"
}

//Fetch

//Es la API nativa de javascript que nos sirve para obtener u enviar datos, atraves de peticiones HTTP
//const ApiDatos = "https://rickandmortyapi.com/api/character/1";


//para usarlo usamos la funcion "fetch" y le pasamos la url de la API
fetch(ApiDatos)
//la promesa se resuelve con la respuesta de la API
//Luego usamas el metodo ".then" para convertir la respuesta de la API en un objeto JSON
.then(response => response.json())
//luego usamos el metodo ".then" para mostrar esta data convertida e imprimirla en la consola
.then(data => console.log(data))
//luego usamos el metodo ".catch" para manejar los errores
.catch(error => console.log(error))


//creamos una funcion para obtener datos de un usuario en especifico
function ObtenerDatos(idUsuario){
  //En este caso esta funcion retornara una nueva promesa
  return new Promise((resolve, reject)=>{
    //la usara la funcion fetch para realizar una peticion HTTP a una API
    fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}`)
    //la promesa se resuelve con la respuesta de la API y el metodo ".then" convierte la respuesta en un objeto JSON
    .then(response => response.json())
    //Luego se pasa esta respuesta en JSON a la funcion "resolve" para resolver correctamente la promesa
    .then(data => resolve(data))
    //luego usamos el metodo ".catch" para manejar los errores
    .catch(error => reject(error))
  })
}

ObtenerDatos(1).then(data => console.log(data));



//funciones Asyn-Await

//async Nos da a entender que la funcion que viene a continuacion es una funcion asincrona, que devuelve una promesa

//await Nos da a entender que se debe completar la ejecucion de la funcion que la precede
// antes de seguir con la ejecucion de la linea de codigo

const ApiDatos = "https://rickandmortyapi.com/api/character/1";

//estructura Async-Await

//Definimos la funcion colocando la palabra clave "async" antes de definir la funcion
async function obtenerPersonaje(){
  //utlizamos un metodo "try catch" para manejar los errores
  try {
    //creamos una constante "response" que va a ser igual a la respuesta de la peticion HTTP que le pasamos a la funcion fetch 
    const response = await fetch(ApiDatos);
    //usamos el metodo ".json" para convertir la respuesta de la API en un objeto JSON
    const data = await response.json();
    //imprimimos la data convertida en JSON
    console.log(data);
  } catch (error) {
    //en caso de error imprimimos el error
    console.log(error);
  } finally{
    //en caso de que todo funcione bien, imprimimos que la ejecucion se ha terminado
    console.log("la funcion se ejecuto")
  }
}

//llamamos a la funcion
obtenerPersonaje()

//Desectructuracion de objetos

const numero = [1,2,3,4,5,6,7,8,9,10];

const [primero, segundo, tercero,cuarto,quinto, ...resto] = numero;

const nombres1 = ["Roberto", "Jesus", "Delvis", "Franciely"];

const NombreQueQuiero = nombres1[3];

console.log(NombreQueQuiero)


console.log(primero)
console.log(segundo)
console.log(tercero)

//Para objetos

const persona1 = {
  nombre: "Delvis",
  apellido: "Sanabria",
  pais: "Venezuela",
}
//para desestructurar sacamos las propiedades del objeto en variables individuales
//llamaremos a cada una de las propiedades del objeto individualmente
const {nombre, apellido, pais} = persona1;

//Desestructurado
console.log(apellido)
//No desestructurado
console.log(persona1.apellido)


//Proyecto final parte 4 Fecha de entrega 16 de Julio

/* 

Realizar una pagina web que consuma una API (Cualquiera)

La pagina debe tener:

-vista de todos los datos
-vista de un solo dato
-debe tener una barra de busqueda
-Debe verse bien
-Debe ser responsive
-Debe tener un manejo correcto de los errores
-tener una modal que pida al usuario su nombre su apellido y su nombre de usuario y lo guarde en localStorage
para ser mostrado en la vista de todos los datos para simular un login (opcional)


*/