

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Captura de datos del formulario (opcional, si necesitas usarlos)
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Mostrar alerta de confirmación
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu mensaje ha sido enviado exitosamente",
        showConfirmButton: false,
        timer: 1500
    });

    // Limpiar formulario después de enviar
    document.getElementById("contactForm").reset();
});
