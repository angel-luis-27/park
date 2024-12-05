   // Selección del formulario y escucha del evento de envío
   document.getElementById('reembolsoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar envío del formulario

    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const motivo = document.getElementById('motivo').value;

    // Mostrar alerta con SweetAlert2
    Swal.fire({
        title: '¡Solicitud de Reembolso Enviada!',
        html: `
            <strong>Nombre:</strong> ${nombre} <br>
            <strong>Correo:</strong> ${correo} <br>
            <strong>Motivo:</strong> ${motivo}
        `,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    // Limpiar el formulario después de enviar
    document.getElementById('reembolsoForm').reset();
});