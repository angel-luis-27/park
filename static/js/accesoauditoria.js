

document.getElementById('securityAuditForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío real del formulario

    // Mostrar la notificación
    const notification = document.getElementById('notificationAlert');
    notification.classList.add('show');

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
});

 // Referencia al formulario y la notificación
 const form = document.getElementById('securityAuditForm');
 const notificationAlert = document.getElementById('notificationAlert');

 // Escuchar el evento de envío del formulario
 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Evitar el envío tradicional del formulario

     // Obtener valores de los campos
     const evento = document.getElementById('evento').value;
     const mensaje = document.getElementById('mensaje').value;

     // Verificar si los campos están llenos
     if (evento && mensaje) {
         // Mostrar la notificación
         notificationAlert.style.display = 'block';

         // Ocultar la notificación después de 3 segundos
         setTimeout(() => {
             notificationAlert.style.display = 'none';
         }, 3000);

         // Reiniciar los campos del formulario
         form.reset();
     } else {
         // Mostrar un mensaje de error si los campos no están completos
         alert('Por favor, completa todos los campos antes de enviar.');
     }
 });