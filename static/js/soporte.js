
        const listaReservas = document.getElementById('listaReservas');
    
        // Función para cargar las reservas desde LocalStorage
        function cargarReservas() {
            listaReservas.innerHTML = ''; // Limpiar la lista
            const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    
            if (reservas.length === 0) {
                listaReservas.innerHTML = '<li class="list-group-item text-center">No hay reservas registradas</li>';
            } else {
                reservas.forEach((reserva, index) => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('list-group-item');
    
                    listItem.innerHTML = `
                        <div>
                            <strong>${reserva.fecha} - ${reserva.vehiculo}</strong>
                            <p class="mb-0">Estacionamiento: ${reserva.estacionamiento}</p>
                        </div>
                        <div>
                            <button class="btn btn-info btn-sm me-2" onclick="verDetalles(${index})">Ver Detalles</button>
                            <button class="btn btn-success btn-sm me-2" onclick="repetirReserva(${index})">Repetir</button>
                            <button class="btn btn-danger btn-sm" onclick="eliminarReserva(${index})">Eliminar</button>
                        </div>
                    `;
                    listaReservas.appendChild(listItem);
                });
            }
        }
    
        // Función para ver detalles de una reserva
        function verDetalles(index) {
            const reservas = JSON.parse(localStorage.getItem('reservas'));
            const reserva = reservas[index];
            alert(`Detalles de la Reserva:\n\nVehículo: ${reserva.vehiculo}\nFecha: ${reserva.fecha}\nHorario: ${reserva.horario}\nEstacionamiento: ${reserva.estacionamiento}`);
        }
    
        // Función para repetir una reserva
        function repetirReserva(index) {
            const reservas = JSON.parse(localStorage.getItem('reservas'));
            const nuevaReserva = { ...reservas[index] };
            reservas.push(nuevaReserva);
            localStorage.setItem('reservas', JSON.stringify(reservas));
            cargarReservas();
            alert('Reserva repetida exitosamente.');
        }
    
        // Función para eliminar una reserva
        function eliminarReserva(index) {
            const reservas = JSON.parse(localStorage.getItem('reservas'));
            reservas.splice(index, 1);
            localStorage.setItem('reservas', JSON.stringify(reservas));
            cargarReservas();
            alert('Reserva eliminada exitosamente.');
        }
    
        // Cargar reservas al iniciar la página
        window.onload = cargarReservas;
  
        const formSoporte = document.getElementById('formSoporte');
        const respuestaAutomatica = document.getElementById('respuestaAutomatica');

        // Evento para enviar el formulario
        formSoporte.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar recarga de la página

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validar y mostrar respuesta automática
            if (nombre && email && mensaje) {
                respuestaAutomatica.classList.remove('d-none');
                formSoporte.reset(); // Limpiar el formulario
            }
        });
