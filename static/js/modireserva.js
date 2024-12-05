
    document.getElementById("modificarReservaForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío inmediato del formulario

        // Validación de hora de salida y hora de entrada
        const horaEntrada = document.getElementById("hora_entrada").value;
        const horaSalida = document.getElementById("hora_salida").value;
        if (horaEntrada >= horaSalida) {
            Swal.fire("Error", "La hora de salida debe ser posterior a la hora de entrada.", "error");
            return;
        }

        // Mostrar alerta de confirmación antes de enviar el formulario
        Swal.fire({
            title: "¿Desea guardar los cambios?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `No guardar`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("¡Guardado!", "Los cambios se han guardado.", "success");
                document.getElementById("modificarReservaForm").submit(); // Envía el formulario después de la confirmación
            } else if (result.isDenied) {
                Swal.fire("Cambios no guardados", "", "info");
            }
        });
    });
