
   

  document.getElementById('btnCancelar').addEventListener('click', function() {
      Swal.fire({
          title: '¿Estás seguro?',
          text: 'Tu reserva no se cancelará.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, cancelar',
          cancelButtonText: 'No, solicitar reserva '
      }).then((result) => {
          if (result.isConfirmed) {
              // Aquí puedes redirigir a otra página si es necesario
              window.location.href = 'index.html'; // Cambia esto según sea necesario
          }
      });
  });

  document.getElementById('btnCancelar').addEventListener('click', function() {
      // Verifica que todos los campos requeridos tengan algún valor
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const placa = document.getElementById('placa').value;
      const fechaReserva = document.getElementById('fecha_reserva').value;
      const horaEntrada = document.getElementById('hora_entrada').value;
      const horaSalida = document.getElementById('hora_salida').value;
      const motivo = document.getElementById('motivo').value;

      if (nombre && correo && placa && fechaReserva && horaEntrada && horaSalida && motivo) {
          // Muestra la alerta de confirmación usando SweetAlert2
          Swal.fire({
              title: '¿Confirmas la cancelación?',
              text: 'Estás a punto de cancelar tu reserva.',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Sí, cancelar',
              cancelButtonText: 'No, conservar reserva'
          }).then((result) => {
              if (result.isConfirmed) {
                  Swal.fire(
                      'Reserva Cancelada',
                      'Tu reserva ha sido cancelada exitosamente.',
                      'success'
                  );
                  // Redirige a la página deseada o realiza alguna acción adicional
                  window.location.href = 'index.html';
              }
          });
      } else {
          // Muestra un mensaje si los campos están incompletos
          Swal.fire(
              'Campos incompletos',
              'Por favor, completa todos los campos antes de continuar.',
              'error'
          );
      }
  });


