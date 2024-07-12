// Se crea una instancia de WebSocket, pasando como argumento la URL del servidor
let ws = new WebSocket('ws://localhost:5001');
/* 
    Cuando se crea una nueva instancia de WebSocket en el cliente, se inicia el proceso de handshake con el servidor. 
    Este handshake se realiza a través de una solicitud HTTP con un encabezado de "Upgrade" para cambiar de HTTP a WebSocket. 
    Una vez que el servidor acepta la solicitud de upgrade, se establece la conexión WebSocket y se pueden enviar y recibir mensajes 
    entre el cliente y el servidor.
*/


// Función para manejar los mensajes recibidos del servidor
function recibirMensaje(event){
    // Se obtiene el elemento de la lista de mensajes y se crea un nuevo elemento de lista
    const chat = document.getElementById('chat');
    const mensaje = document.createElement('li');

    // Hora actual
    const hora = new Date().toLocaleTimeString();

    // Parsear el objeto JSON
    const data = JSON.parse(event.data);
    // console.log(data);

    // Mostrar el nombre del cliente y el mensaje
    mensaje.innerText = `${data.nombre} - ${hora}: ${data.mensaje}`;
    chat.appendChild(mensaje);

    // Mover el scroll hacia abajo cada vez que llega un mensaje
    chat.scrollTop = chat.scrollHeight;
};

// Evento que detecta cuando se recibe un mensaje del servidor
ws.onmessage = (event) => {recibirMensaje(event)};


// Funcion para enviar mensajes al servidor
function enviarMensaje() {
    const input = document.getElementById('messageInput');
    const message = input.value;

    // Si el mensaje está vacío, no se envía
    if (!message) return;

    // Hora actual
    const hora = new Date().toLocaleTimeString();

    // Añadimos el mensaje del cliente al chat
    const chat = document.getElementById('chat');
    const mensaje = document.createElement('li');
    mensaje.classList.add('max-w-[250px]', 'sm:max-w-[370px]', 'lg:max-w-[650px]' ,'break-words');
    mensaje.innerText = `Tú - ${hora}: ${message}`;
    chat.appendChild(mensaje);

    // Enviar el mensaje al servidor
    ws.send(message);
    input.value = '';
}


// Evento que se ejecuta cuando la conexión se cierra o se pierde la conexión con el servidor
ws.onclose = () => {
    console.log('Conexión cerrada');
}

// Evento que se ejecuta cuando la conexión se abre con el servidor
ws.onopen = () => {
    console.log('Conexión abierta');
}


// Seleccionar botón de enviar, conexión y desconexión
const btnEnviar = document.getElementById('enviar').addEventListener('click', enviarMensaje);
const btnConectar = document.getElementById('conectar');
const btnDesconectar = document.getElementById('desconectar');

// Evento a la ventana para enviar el mensaje al presionar la tecla Enter
window.addEventListener('keypress', (e) => { if(e.key === 'Enter') enviarMensaje() });

// Manejar el evento de click en el botón de desconexión
btnDesconectar.addEventListener('click', () => {
    // Cerrar la conexión con el servidor
    ws.close();

    const hora = new Date().toLocaleTimeString();

    btnDesconectar.classList.add('hidden');
    btnConectar.classList.remove('hidden');

    // Mostrar mensaje de desconexión
    chat.innerHTML += `<li>Desconectado ${hora}</li>`;
});

// Manejar el evento de click en el botón de conexión
btnConectar.addEventListener('click', () => {
    // Crear una nueva instancia de WebSocket
    ws = new WebSocket('ws://localhost:5001');

    // hora actual
    const hora = new Date().toLocaleTimeString();

    ws.onmessage = (event) => {recibirMensaje(event)};

    btnDesconectar.classList.remove('hidden');
    btnConectar.classList.add('hidden');

    // Mostrar mensaje de conexión
    chat.innerHTML += `<li>Conectado - ${hora}</li>`;
});