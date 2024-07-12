/* 

¿Que es LocalStorage y SessionStorage?

LocalStorage y SessionStorage son APIs de JavaScript que nos permiten almacenar datos de forma persistente en el navegador.

Diferencia entre LocalStorage y SessionStorage

LocalStorage:

-nos permite almacenar datos de forma persistente en el navegador

-nos sirve para almacenar configuraciones del sitio web.

-Los datos almacenados perman en el navegador asi que no se borran al cerrar el navegador

Session Storage:

-nos permite almacenar datos de la sesion del navegador

-almacenar datos de un carrito de compras

-Los datos almacenados se borran al cerrar el navegador o la pestaña


Ambos comparten metodos de acceso a datos:

-setItem(clave, valor) //Guarda la clave y el valor en el LocalStorage

-getItem(clave) //nos traera el valor de la clave que solicitamos

-removeItem(clave) //Elimina la clave y su valor del LocalStorage

clear() //para todos los datos almacenados


En el local storage y session solo se pueden almacenar maximo 5mb

Diferencias clave:

Característica: 	Almacenamiento local:	                          Almacenamiento de sesión:

Persistencia	   Permanente (hasta que se elimine manualmente)	Temporal (se elimina al cerrar la pestaña o ventana)

Alcance	         Disponible en todas las pestañas y ventanas    Disponible solo en la pestaña o ventana donde se creó
                del mismo dominio	

Uso común	      Preferencias del usuario, configuraciones,      Información temporal, datos de inicio de sesión, carritos de compra
                datos estáticos

*/



//Ejemplos de uso

//setItem sirve para actualizar y crear nuevos elementos del local/session Storage

//localStorage.setItem("nombre", "Jesus");

//getItem sirve para traer un elemento del local/session Storage

//console.log(localStorage.getItem("nombre"));

//removeItem sirve para eliminar un elemento del local/session Storage

//localStorage.removeItem("nombre");

//clear sirve para borrar todos los elementos del local/session Storage

//localStorage.clear();

let carrito ={
  productos : ["Libro", "Pantalon", "Zapatos"],
  total: 0
}

let numeros = [1,2,3,4,5,6,7,8,9,10]

//En los Storage se almacenan strings y cualquier dato diferente sera convertido a String:

//localStorage.setItem("numeros",numeros)

//console.log(typeof localStorage.getItem("carrito"))


//para almacenar objetos, objetos anidaados o arrays anidados debemos convertirlos a JSON
/*

// para convertir un objeto a JSON se usa el metodo JSON.stringify que recibe
// como parametro el objeto que queremos convertir a JSON y retorna una cadena de texto.

localStorage.setItem("carrito", JSON.stringify(carrito))


//al traerlo lo convertimos de nuevo en su tipo original utilizando el metodo JSON.parse

const carrito2 = JSON.parse(localStorage.getItem("carrito"))

//y para mostrarlo en la consola y verificar que nos arroje el objeto

console.log(carrito2) */

//Ejemplo real de uso

const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");

function saveToLocalStorage(){
  const objetoAnidado = {
    prop1: {
      "subprop1": "valor1",
      "subprop2": "valor2"
    },
    prop2: [1, 2, 3]
  };

  const convertToJSON = JSON.stringify(objetoAnidado);

  sessionStorage.setItem("objetoAnidado", convertToJSON);
  alert("Se guardo con exito");
}

function loadFromLocalStorage(){
  const objetoAnidadJSON = sessionStorage.getItem("objetoAnidado");

  //convertir de nuevo a array anidado

  const objetoAnidado = JSON.parse(objetoAnidadJSON);

  if (objetoAnidado){
    console.log(objetoAnidado);
  }else{
    alert("No hay datos");
  }
}

saveButton.addEventListener("click", saveToLocalStorage);
loadButton.addEventListener("click", loadFromLocalStorage);

/*
En resumen:

-Utiliza el almacenamiento local para datos permanentes que quieres que persistan entre sesiones.
-Utiliza el almacenamiento de sesión para datos temporales que solo son necesarios durante la sesión actual.

Recuerda:

-Ambos métodos de almacenamiento son accesibles mediante JavaScript.
-Es importante utilizarlos con cuidado para proteger la privacidad del usuario y evitar almacenar datos confidenciales.
-Existen otras opciones de almacenamiento web más avanzadas, como IndexedDB, que pueden ser más adecuadas para conjuntos de datos grandes o estructuras de datos complejas.

*/