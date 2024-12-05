document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const estacionamiento = document.getElementById('estacionamiento').value;

    // Calcular el tiempo de reserva   
    const tiempoReservado = document.getElementById('tiempo-reservado').value;

    // Calcular el total a pagar
    const precioPorHora = 10000; // Precio por hora en COP
    const total = tiempoReservado * precioPorHora;



    // Mostrar el SweetAlert de confirmación
    Swal.fire({
        title: '¿Confirmar Reserva?',
        text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nPlaca: ${placa}\nModelo: ${modelo}\nColor: ${color}\nFecha: ${fecha}\nHora: ${hora}\nEstacionamiento: ${estacionamiento}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, confirmar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Mostrar la factura
            document.getElementById('facturaContenido').innerHTML = `
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Placa:</strong> ${placa}</p>
                <p><strong>Modelo:</strong> ${modelo}</p>
                <p><strong>Color:</strong> ${color}</p>
                <p><strong>Fecha de Ingreso:</strong> ${fecha}</p>
                <p><strong>Hora de Ingreso:</strong> ${hora}</p>
                <p><strong>Número de Estacionamiento:</strong> ${estacionamiento}</p>
                <p><strong>Total a Pagar:</strong> ${total}</p>
            `;

            document.getElementById('factura').style.display = 'block';

            // Mostrar mensaje de éxito
            Swal.fire(
                'Reservado!',
                'Tu reserva ha sido confirmada.',
                'success'
            );
        }
    });
});



      document.getElementById("descargarPDF").addEventListener("click", function () {
        const { jsPDF } = window.jspdf;  // Accede a la función jsPDF
        const doc = new jsPDF();
    
        // Capturar los datos del formulario
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const placa = document.getElementById("placa").value;
        const modelo = document.getElementById("modelo").value;
    
        // Añadir contenido al PDF
        doc.setFontSize(16);
        doc.text("Factura de Reserva - Autopark Solution", 20, 20);
    
        doc.setFontSize(12);
        doc.text(`Nombre: ${nombre}`, 20, 40);
        doc.text(`Teléfono: ${telefono}`, 20, 50);
        doc.text(`Placa del Vehículo: ${placa}`, 20, 60);
        doc.text(`Modelo: ${modelo}`, 20, 70);


    
        // Guardar el PDF con un nombre específico
        doc.save(`Factura_Reserva_${nombre}.pdf`);
    });


      document.getElementById('reservaForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío del formulario
    
        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const   
     placa = document.getElementById('placa').value;
        const modelo = document.getElementById('modelo').value;   
    
        const color = document.getElementById('color').value;
        const fechaIngreso = document.getElementById('fecha').value;
        const horaIngreso = document.getElementById('hora').value;
        const estacionamiento = document.getElementById('estacionamiento').value;
        const tiempoReservado = document.getElementById('tiempo-reservado').value;
    
        // Calcular el total a pagar
        const precioPorHora = 10000; // Precio por hora en COP
        const total = tiempoReservado * precioPorHora;
    
        // Mostrar el total en la interfaz
        document.getElementById('total-pagar').textContent = `Total a pagar: $${total.toLocaleString()} COP`;
    
        // Mostrar la factura
        document.getElementById('factura').style.display = 'block';
    
        // Generar el PDF
        generarPDF(nombre, placa, fechaIngreso, horaIngreso, tiempoReservado, total);
      });
    
      function generarPDF(nombre, placa, fechaIngreso, horaIngreso, tiempoReservado, total) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
    
        // Título
        doc.setFontSize(20);
        doc.text("Factura de Reserva", 20, 20);
    
        // Detalles de la factura
        doc.setFontSize(12);
        doc.text(`Nombre: ${nombre}`, 20, 40);
        doc.text(`Placa del Vehículo: ${placa}`, 20, 50);
        doc.text(`Fecha de Ingreso: ${fechaIngreso}`, 20, 60);
        doc.text(`Hora de Ingreso: ${horaIngreso}`, 20, 70);
        doc.text(`Tiempo Reservado: ${tiempoReservado} horas`, 20, 80);
        doc.text(`Precio por Hora: ${precioPorHora}, 20, 90`);
        doc.text(`Total a Pagar: $${total.toLocaleString()} COP`, 20, 100);
    
        // Guardar el PDF
        doc.save('factura_reserva.pdf');
      }



      
      function toggleSidebar() {
        const sidebar = document.querySelector('.main-sidebar');
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    }




    document.getElementById('descargarPDF').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const placa = document.getElementById('placa').value;
        const modelo = document.getElementById('modelo').value;
        const color = document.getElementById('color').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const tiempoReservado = document.getElementById('tiempo-reservado').value;
        const estacionamiento = document.getElementById('estacionamiento').value;

        // Generar el contenido de la factura
        doc.text(`Factura de Reserva`, 20, 20);
        doc.text(`Nombre: ${nombre}`, 20, 30);
        doc.text(`Teléfono: ${telefono}`, 20, 40);
        doc.text(`Placa: ${placa}`, 20, 50);
        doc.text(`Modelo: ${modelo}`, 20, 60);
        doc.text(`Color: ${color}`, 20, 70);
        doc.text(`Fecha de Ingreso: ${fecha}`, 20, 80);
        doc.text(`Hora de Ingreso: ${hora}`, 20, 90);
        doc.text(`Tiempo Reservado: ${tiempoReservado} horas`, 20, 100);
        doc.text(`Estacionamiento: ${estacionamiento}`, 20, 110);

        // Descargar PDF
        doc.save('factura_reserva.pdf');
    });

