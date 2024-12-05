
    document.getElementById("actualizarForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío inmediato del formulario

        // Muestra la alerta de confirmación con SweetAlert2
        Swal.fire({
            title: 'Datos Actualizados',
            text: 'Los datos han sido actualizados con éxito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Envía el formulario después de que el usuario cierre la alerta
                this.submit();
            }
        });
    });
