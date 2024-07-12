/*
  ¿Que son los WebSockets?
  Los WebSockets son una tecnología que permite establecer una conexión persistente entre un cliente y un servidor,
  lo que permite la comunicación bidireccional en real-time. 
  
  Son útiles para aplicaciones que requieren actualizaciones en tiempo real, como chats, juegos en línea, entre otros...


  ¿Como funciona HTTP?
  1. El cliente envía una petición al servidor.
  2. El servidor procesa la petición y envía una respuesta al cliente.
  3. La conexión se cierra después de que el servidor envía la respuesta.
  4. Si el cliente necesita más información, debe enviar otra petición al servidor y el proceso se repite.

  ¿Cómo funcionan los WebSockets?
  1. El cliente envía una petición HTTP al servidor solicitando comunicación por WebSocket.
  2. El servidor responde con un handshake (apretón de manos). Una respuesta HTTP que indica que la conexión ha sido establecida.
  3. A partir de este momento, la conexión se mantiene abierta y se pueden enviar mensajes en ambas direcciones.
  4. La conexión se cierra cuando el cliente o el servidor envían un mensaje de cierre o cuando se pierde la conexión.
  

  Librerias de WebSockets: Hay varias librerías de WebSockets disponibles para Node.js, unas de las más populares son ws y socket.io.
  En este ejemplo, usaremos la librería ws, que es una implementación simple de WebSockets para Node.js.

  Instalación de la librería ws:
  npm install ws

  Crear un servidor de WebSockets con Node.js:
  1. Importar la librería ws.
  2. Crear una instancia de WebSocket.Server y especificar el puerto en el que se escucharán las conexiones.
  3. Manejar los eventos de conexión, mensaje y cierre de conexión.
  4. Enviar mensajes a los clientes conectados.
  5. Cerrar la conexión cuando un cliente se desconecta.

  Crear un cliente de WebSockets con JavaScript:
  1. Crear una instancia de WebSocket y especificar la URL del servidor.
  2. Manejar el evento onmessage para recibir mensajes del servidor.
  3. Enviar mensajes al servidor usando el método send.
  4. Manejar el evento onclose para cerrar la conexión cuando sea necesario.

*/

const WebSocket = require('ws');

// Se usa la clase WebSocket y el constructor Server para instanciar un servidor de WebSocket.
const wss = new WebSocket.Server({ port: 5001 });


// Clase para representar un cliente
class Cliente {
  constructor(nombre, socket) {
    this.nombre = nombre;
    this.socket = socket;
  }
}

// Array con nombres de usuarios
nombres = [
  'Diego', 'Key', 'Gabriel', 'Jorge', 'Luis', 'Miguel', 'Juan', 'Diana', 'Andrea', 
  'Juana', 'Gabriela', 'Jose', 'Pedro', 'Carlos', 'Fernando', 'Ricardo', 'Sofia', 
  'Ana', 'Laura', 'Luisa', 'Camila', 'Valentina', 'Isabella', 'Mariana', 'Daniela', 
  'Alejandra', 'Natalia', 'Paola', 'Sara', 'Sandra', 'Carmen', 'Rosa', 'Martha'
];

// Array para almacenar las conexiones de clientes (sockets)
const clientes = [];

wss.on('connection', (socket) => {
  // Crear un nuevo cliente con un nombre aleatorio
  const cliente = new Cliente(nombres[Math.floor(Math.random() * nombres.length)], socket);
  
  // Loggear la conexión del cliente y mostrar el estado de la conexión en el chat
  console.log(`${cliente.nombre} se ha unido al chat`);

  // Enviar un mensaje a todos los clientes para notificar que un nuevo usuario se ha unido al chat
  const datosConexion = JSON.stringify({
    nombre: 'Servidor',
    mensaje: `${cliente.nombre} se ha unido al chat`
  });

  clientes.map(cliente => {
    // Verificar que el cliente receptor esté conectado
    if (cliente.socket.readyState === WebSocket.OPEN) {
      cliente.socket.send(datosConexion);
    }
  });
  
  // Agregar el nuevo cliente a la lista de clientes
  clientes.push(cliente);


  // Manejar mensajes entrantes desde el cliente
  socket.on('message', (mensaje) => {
    console.log(`${cliente.nombre} dice: ${mensaje}`);

    // Creamos un JSON con el mensaje y el nombre del usuario que será enviado a todos los clientes
    const data = JSON.stringify({ 
      nombre: cliente.nombre, 
      mensaje: mensaje.toString()
    });

    // Reenviar el mensaje a todos los clientes conectados
    clientes.map(cliente => {
      // Verificar que el cliente esté conectado
      // Notificar a todos los sockets conectados excepto al que envió el mensaje
      if (cliente.socket !== socket && cliente.socket.readyState === WebSocket.OPEN) {
        cliente.socket.send(data);
      }
    });
  });



  // Manejar cierre de conexión con el cliente
  socket.on('close', () =>{
    console.log(`${cliente.nombre} se ha ido del chat`);

    // Enviar un mensaje a todos los clientes para notificar que un usuario ha abandonado el chat
    const datosConexion = JSON.stringify({
      nombre: 'Servidor',
      mensaje: `${cliente.nombre} ha abandonado el chat`
    });

    clientes.map(cliente => {
      // Verificar que el cliente receptor esté conectado
      if (cliente.socket.readyState === WebSocket.OPEN) {
        cliente.socket.send(datosConexion);
      }
    });
    
    // Remover el cliente de la lista de clientes
    const index = clientes.indexOf(cliente);
    if (index > -1) {
      clientes.splice(index, 1);
    }
  });
});
