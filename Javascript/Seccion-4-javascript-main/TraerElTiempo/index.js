async function traerTiempo() {
  try {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=1868821f7d8444de9f1154458240407&q=Caracas&lang=es');
    if(!response.ok) {
      throw Error("La respuesta no fue exitosa");
    }
    const data = await response.json();
    mostrarDatos(data);
    console.log("los datos fueron correctamente entregados capitan");
  } catch (error) {
    console.error(error);
  }
}


function mostrarDatos(data){
 document.getElementById('location').innerText = data.location.name;
 document.getElementById('weather-icon').src = `https:${data.current.condition.icon}`
 document.getElementById('temperature').innerText = data.current.temp_c;
 document.getElementById('description').innerText = data.current.condition.text;
}

function autoRefresh (intervalo){
  setInterval(traerTiempo, intervalo);
}

document.getElementById('refresh').addEventListener('click', traerTiempo);

async function iniciarAplicacion(){
  await traerTiempo();
  autoRefresh(60000);
}

iniciarAplicacion()