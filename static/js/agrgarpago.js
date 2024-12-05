            const qrCodeContainer = document.getElementById('qrCodeContainer');
            const metodoQR = document.getElementById('codigoQR');
            const metodoOnline = document.getElementById('pagoOnline');
            const form = document.getElementById('pagoForm');
    
            // Mostrar QR si se selecciona ese método de pago
            document.querySelectorAll('input[name="metodoPago"]').forEach(input => {
                input.addEventListener('change', function () {
                    if (metodoQR.checked) {
                        qrCodeContainer.style.display = 'block';
                    } else {
                        qrCodeContainer.style.display = 'none';
                    }
                });
            });
    
            // Registrar Pago en LocalStorage
            form.addEventListener('submit', function (e) {
                e.preventDefault();
    
                const nombre = document.getElementById('nombre').value;
                const correo = document.getElementById('correo').value;
                const telefono = document.getElementById('telefono').value;
                const monto = document.getElementById('monto').value;
                const metodoPago = document.querySelector('input[name="metodoPago"]:checked').value;
                const fechaPago = document.getElementById('fechaPago').value;
    
                if (metodoPago === "online" && (!nombre || !correo || !telefono)) {
                    Swal.fire({
                        title: 'Error',
                        text: 'Por favor, completa todos los datos para validar el pago en línea.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
    
                const pago = {
                    nombre: nombre,
                    correo: correo,
                    telefono: telefono,
                    monto: monto,
                    metodo: metodoPago,
                    fecha: fechaPago
                };
    
                // Guardar en LocalStorage
                let pagos = JSON.parse(localStorage.getItem('pagos')) || [];
                pagos.push(pago);
                localStorage.setItem('pagos', JSON.stringify(pagos));
    
                // Mostrar mensaje de éxito
                Swal.fire({
                    title: '¡Pago Exitoso!',
                    text: 'Tu pago ha sido registrado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
    
                form.reset();
                qrCodeContainer.style.display = 'none';
            });
        