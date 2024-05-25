const btnConfirmar = document.getElementById("btnConfirmar");
const inputNombre = document.getElementById("inputNombre");
const inputMensaje = document.getElementById("inputMensaje");

function copyToClipboard() {
  // Obtiene el elemento con el texto a copiar
  var copyText =  document.getElementById("copyText").innerText;
  // Crea un elemento de texto temporal para facilitar la copia
  var tempInput = document.createElement("input");
  tempInput.value = copyText;
  document.body.appendChild(tempInput);
  // Selecciona el texto en el elemento temporal
  tempInput.select();
  // Copia el texto al portapapeles
  document.execCommand("copy");
  // Remueve el elemento temporal del DOM
  document.body.removeChild(tempInput);
  // Muestra el mensaje flotante
  const messageContainer = document.getElementById('copy-message-container');
  messageContainer.classList.add('show');

  setTimeout(() => {
    messageContainer.classList.remove('show');
  }, 2000); // Ajusta la duración del mensaje
}
function sendMessage(name, description, phoneNumber) {
  // Verificar que el nombre no esté vacío
  if (!name.trim()) {
    console.error("Nombre no puede estar vacío.");
    return; // Salir de la función si el nombre está vacío
  }

  // Codificar el nombre para incluirlo en la URL
  const encodedName = encodeURIComponent(name);

  // Construir el mensaje base
  let message = `Confirmo mi asistencia%0A- ${encodedName}`;

  // Agregar "Ten en cuenta que:" y la descripción si no está vacía
  if (description && description.trim()) {
    const encodedDescription = encodeURIComponent(description);
    message += `%0A%0ATen en cuenta que:%0A- ${encodedDescription}`;
  }

  // Construir la URL con el número de teléfono y el mensaje
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  // Abrir la URL en una nueva ventana del navegador
  window.open(url, "_blank");
}

// Ejemplo de uso de la función

btnConfirmar.addEventListener("click", function () {
  const nombre = inputNombre.value;
  const mensaje = inputMensaje.value;

  sendMessage(nombre, mensaje, "+543815411273");
});

// Obtener la fecha de finalización del usuario (puede ser manual o mediante algún formulario)
const endDate = new Date("2024-06-15T22:00:00"); // Ejemplo de fecha de finalización

// Función para actualizar el reloj de cuenta regresiva
function updateClock() {
  const now = new Date(); // Obtener la fecha y hora actual
  const timeLeft = endDate - now; // Calcular la diferencia de tiempo

  if (timeLeft <= 0) {
    clearInterval(timer); // Detener el contador si ya pasó la fecha de finalización
    document.getElementById("clock").innerHTML =
      "La cuenta regresiva ha terminado";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Actualizar el contenido de los elementos HTML con los nuevos valores
  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);
}

// Función para formatear los valores de tiempo a dos dígitos
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Llamar a la función de actualización inicial para evitar un retraso en la visualización del reloj
updateClock();

// Actualizar el reloj cada segundo
const timer = setInterval(updateClock, 1000);



// const btnConMusica = document.getElementById('btn_modal_musica');
// const btnSinMusica = document.getElementById('btn_modal_sin_musica');
const linea = document.getElementById('linea');
// const modalFull = new bootstrap.Modal(document.getElementById('modalFull'));
const numero = document.getElementById('numero');









