
  // Captura el evento de envío del formulario
  document.getElementById("tarifaForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío inmediato del formulario

      // Muestra la alerta de SweetAlert2
      Swal.fire({
          title: 'Actualización Exitosa',
          text: 'Las tarifas se han actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
      }).then((result) => {
          if (result.isConfirmed) {
              // Envía el formulario después de cerrar la alerta
              this.submit();
          }
      });
  });
