  
    const listaPagos = document.getElementById('listaPagos');
    const eliminarPagoBtn = document.getElementById('eliminarPago');

    // Cargar y mostrar los pagos guardados en LocalStorage
    function cargarPagos() {
        listaPagos.innerHTML = ''; // Limpiar lista
        const pagos = JSON.parse(localStorage.getItem('pagos')) || [];

        if (pagos.length === 0) {
            listaPagos.innerHTML = '<li class="list-group-item text-center">No hay pagos registrados</li>';
            eliminarPagoBtn.disabled = true;
        } else {
            pagos.forEach((pago, index) => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
                listItem.innerHTML = `
                    <span>Nombre: ${pago.nombre} - Correo: ${pago.correo} - Teléfono: ${pago.telefono}<br>
                    Monto: $${pago.monto} - Método: ${pago.metodo} - Fecha: ${pago.fecha}</span>
                    <input type="radio" name="pagoSeleccionado" value="${index}">
                `;
                listaPagos.appendChild(listItem);
            });
            eliminarPagoBtn.disabled = false;
        }
    }

    // Eliminar el pago seleccionado con confirmación
    eliminarPagoBtn.addEventListener('click', () => {
        const radios = document.querySelectorAll('input[name="pagoSeleccionado"]');
        let seleccionado = null;

        radios.forEach((radio) => {
            if (radio.checked) seleccionado = radio.value;
        });

        if (seleccionado !== null) {
            Swal.fire({
                title: "¿Estás seguro?",
                text: "¡No podrás revertir esta acción!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, eliminar"
            }).then((result) => {
                if (result.isConfirmed) {
                    let pagos = JSON.parse(localStorage.getItem('pagos')) || [];
                    pagos.splice(seleccionado, 1); // Eliminar pago de la lista
                    localStorage.setItem('pagos', JSON.stringify(pagos)); // Guardar cambios

                    Swal.fire("Eliminado", "El pago ha sido eliminado.", "success");

                    cargarPagos(); // Recargar la lista
                }
            });
        } else {
            Swal.fire("Atención", "Por favor, selecciona un pago para eliminar.", "info");
        }
    });

    // Cargar los pagos al iniciar la página
    window.onload = cargarPagos;
