  // Obtener la fecha de finalización del usuario (puede ser manual o mediante algún formulario)
  const endDate = new Date("2024-06-15T22:00:00"); // Ejemplo de fecha de finalización

  // Función para actualizar el reloj de cuenta regresiva
  function updateClock() {
      const now = new Date(); // Obtener la fecha y hora actual
      const timeLeft = endDate - now; // Calcular la diferencia de tiempo

      if (timeLeft <= 0) {
          clearInterval(timer); // Detener el contador si ya pasó la fecha de finalización
          document.getElementById('clock').innerHTML = 'La cuenta regresiva ha terminado';
          return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Actualizar el contenido de los elementos HTML con los nuevos valores
      document.getElementById('days').innerText = formatTime(days);
      document.getElementById('hours').innerText = formatTime(hours);
      document.getElementById('minutes').innerText = formatTime(minutes);
      document.getElementById('seconds').innerText = formatTime(seconds);
  }

  // Función para formatear los valores de tiempo a dos dígitos
  function formatTime(time) {
      return time < 10 ? `0${time}` : time;
  }

  // Llamar a la función de actualización inicial para evitar un retraso en la visualización del reloj
  updateClock();

  // Actualizar el reloj cada segundo
  const timer = setInterval(updateClock, 1000);