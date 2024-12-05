    document.addEventListener('DOMContentLoaded', function () {
        const tbody = document.querySelector('tbody'); // Selecciona el cuerpo de la tabla

        // Función para agregar una nueva reserva
        const agregarReserva = () => {
            Swal.fire({
                title: 'Agregar Reserva',
                html: `
                    <input type="text" id="nombreUsuario" class="swal2-input" placeholder="Nombre del Usuario">
                    <input type="text" id="vehiculo" class="swal2-input" placeholder="Vehículo">
                    <input type="text" id="espacioReservado" class="swal2-input" placeholder="Espacio Reservado">
                    <input type="date" id="fechaReserva" class="swal2-input">
                `,
                confirmButtonText: 'Agregar',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                preConfirm: () => {
                    const nombreUsuario = document.getElementById('nombreUsuario').value;
                    const vehiculo = document.getElementById('vehiculo').value;
                    const espacioReservado = document.getElementById('espacioReservado').value;
                    const fechaReserva = document.getElementById('fechaReserva').value;

                    if (!nombreUsuario || !vehiculo || !espacioReservado || !fechaReserva) {
                        Swal.showValidationMessage('Por favor, llena todos los campos');
                    }

                    return { nombreUsuario, vehiculo, espacioReservado, fechaReserva };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const { nombreUsuario, vehiculo, espacioReservado, fechaReserva } = result.value;
                    const nuevoId = tbody.rows.length + 1; // ID dinámico basado en la cantidad de filas

                    const nuevaFila = `
                        <tr>
                            <th scope="row">${nuevoId}</th>
                            <td>${nombreUsuario}</td>
                            <td>${vehiculo}</td>
                            <td>${espacioReservado}</td>
                            <td>${fechaReserva}</td>
                            <td>
                                <button class="btn btn-outline-warning btn-sm modificar-btn">Modificar</button>
                                <button class="btn btn-outline-danger btn-sm eliminar-btn">Eliminar</button>
                            </td>
                        </tr>
                    `;
                    tbody.insertAdjacentHTML('beforeend', nuevaFila);
                    Swal.fire('¡Agregado!', 'La reserva ha sido añadida.', 'success');
                    actualizarEventos(); // Actualiza eventos para los nuevos botones
                }
            });
        };

        // Función para modificar una reserva
        const modificarReserva = (fila) => {
            const columnas = fila.querySelectorAll('td');

            Swal.fire({
                title: 'Modificar Reserva',
                html: `
                    <input type="text" id="nombreUsuario" class="swal2-input" value="${columnas[0].textContent}">
                    <input type="text" id="vehiculo" class="swal2-input" value="${columnas[1].textContent}">
                    <input type="text" id="espacioReservado" class="swal2-input" value="${columnas[2].textContent}">
                    <input type="date" id="fechaReserva" class="swal2-input" value="${columnas[3].textContent}">
                `,
                confirmButtonText: 'Guardar Cambios',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                preConfirm: () => {
                    const nombreUsuario = document.getElementById('nombreUsuario').value;
                    const vehiculo = document.getElementById('vehiculo').value;
                    const espacioReservado = document.getElementById('espacioReservado').value;
                    const fechaReserva = document.getElementById('fechaReserva').value;

                    if (!nombreUsuario || !vehiculo || !espacioReservado || !fechaReserva) {
                        Swal.showValidationMessage('Por favor, llena todos los campos');
                    }

                    return { nombreUsuario, vehiculo, espacioReservado, fechaReserva };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const { nombreUsuario, vehiculo, espacioReservado, fechaReserva } = result.value;

                    columnas[0].textContent = nombreUsuario;
                    columnas[1].textContent = vehiculo;
                    columnas[2].textContent = espacioReservado;
                    columnas[3].textContent = fechaReserva;

                    Swal.fire('¡Modificado!', 'La reserva ha sido actualizada.', 'success');
                }
            });
        };

        // Función para eliminar una reserva
        const eliminarReserva = (fila) => {
            Swal.fire({
                title: 'Eliminar Reserva',
                text: '¿Estás seguro de que deseas eliminar esta reserva? Esta acción no se puede deshacer.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'No, mantener',
            }).then((result) => {
                if (result.isConfirmed) {
                    fila.remove();
                    Swal.fire('Eliminada', 'La reserva ha sido eliminada.', 'success');
                }
            });
        };

        // Actualiza eventos para los botones de la tabla
        const actualizarEventos = () => {
            const botonesModificar = document.querySelectorAll('.modificar-btn');
            const botonesEliminar = document.querySelectorAll('.eliminar-btn');

            botonesModificar.forEach((boton) => {
                boton.addEventListener('click', (e) => {
                    const fila = e.target.closest('tr');
                    modificarReserva(fila);
                });
            });

            botonesEliminar.forEach((boton) => {
                boton.addEventListener('click', (e) => {
                    const fila = e.target.closest('tr');
                    eliminarReserva(fila);
                });
            });
        };

        // Botón para agregar reservas
        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar Reserva';
        botonAgregar.className = 'btn btn-primary mt-3';
        botonAgregar.addEventListener('click', agregarReserva);

        // Agregar botón debajo de la tabla
        document.querySelector('.container').appendChild(botonAgregar);

        // Inicializar eventos
        actualizarEventos();
    });