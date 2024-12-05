
    // Captura el formulario
    const form = document.getElementById("customerSupportForm");

    // Maneja el evento de envío del formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Mostrar SweetAlert
        Swal.fire({
            title: '¡Consulta enviada!',
            text: 'Nuestro equipo de atención al cliente se pondrá en contacto contigo pronto.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Reinicia los campos del formulario
        form.reset();
    });