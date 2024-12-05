// Configuración del alert de SweetAlert2 para el formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Mostrar el alert de confirmación
  Swal.fire({
      title: '¡Mensaje Enviado!',
      text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
      icon: 'success',
      confirmButtonText: 'Cerrar'
  });

  // Limpiar los campos del formulario
  document.getElementById("contactForm").reset();
});