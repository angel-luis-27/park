


document.getElementById('notificationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío real del formulario

    // Mostrar la notificación
    const notification = document.getElementById('notificationAlert');
    notification.classList.add('show');

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
});
