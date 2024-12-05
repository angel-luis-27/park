

document.getElementById("vehicleConfigForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Capturar valores de los campos
    const tipoVehiculo = document.getElementById("tipoVehiculo").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (tipoVehiculo && mensaje) {
        // Mostrar SweetAlert2 con los datos
        Swal.fire({
            title: 'Notificación Enviada',
            html: `
                <p><strong>Tipo de Vehículo:</strong> ${tipoVehiculo}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    } else {
        // Mostrar SweetAlert2 con mensaje de error
        Swal.fire({
            title: 'Error',
            text: 'Por favor completa todos los campos antes de enviar.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
    }
});
