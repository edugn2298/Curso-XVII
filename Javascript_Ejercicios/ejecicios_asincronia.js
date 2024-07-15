/*
Ejercicio 1:

Crear una función que simula la lectura de un archivo de texto. La función debe recibir como parámetro la ruta del archivo y dos callbacks: uno para procesar el contenido del archivo exitosamente y otro para manejar cualquier error que ocurra durante la lectura.

Detalles:

* La función debe utilizar el bloque try-catch para capturar cualquier error que pueda ocurrir durante la lectura del archivo.
* Si la lectura del archivo es exitosa, se debe llamar al callback de éxito pasándole el contenido del archivo como argumento.
* Si ocurre un error durante la lectura del archivo, se debe llamar al callback de error pasándole un objeto Error como argumento.
* La función debe utilizar callbacks para evitar el bloqueo del hilo principal.*/

console.log('Hola');

function obtenerDatos(src, resuelto,error){
  try {

  resuelto('Contenido leído');

  } catch (error) {

    error('Es un error');

  }
}

obtenerDatos('/src/texto.txt', resuelto, error);










/*
Ejercicio 2 

Descripción:
Crear una función que simula la realización de una tarea asíncrona, como calcular el resultado de una operación matemática compleja. La función debe recibir un número como parámetro y devolver una promesa que se resolverá con el resultado del cálculo después de un tiempo simulado.
Detalles:

La función debe utilizar setTimeout para simular el tiempo que tarda la tarea en completarse.

Dentro de setTimeout, se debe realizar el cálculo del resultado (en este caso, la suma de los dígitos del número ingresado).

La función debe devolver una promesa que se resolverá con el resultado del cálculo.

Se puede utilizar el operador + para convertir el número a una cadena y luego iterar sobre sus dígitos utilizando un bucle for.

Se puede utilizar el operador parseInt para convertir cada dígito de la cadena en un número entero.

Se puede utilizar el operador += para acumular el resultado de la suma.

Se puede utilizar resolve para resolver la promesa con el resultado del cálculo.*/