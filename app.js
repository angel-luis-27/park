function Reserva() {
    const contenido = `
  <style>
    body {
            background: url('static/img/lu.avif') no-repeat center center fixed;
            background-size: cover;
            min-height: 100vh;
            font-family: 'Arial', sans-serif;
        }
        .container {
          background-color: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin-top: 100px;

      }

      footer {
          margin-top: 20px;
          text-align: center;
          font-size: 0.9rem;
          color: #666;
      }

      #factura {
          display: none;
          margin-top: 40px;
          padding: 20px;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 10px;
      }

      .image-placeholder {
          width: 100%;
          height: 200px; /* Ajusta la altura según sea necesario */
          background-color: #f0f0f0; /* Color de fondo para la imagen */
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0; /* Espacio superior e inferior */
          border: 2px dashed #007bff; /* Borde de la imagen */
          
      }
      .navbar {
          background-color:transparent;
          color: white;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 20px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 4px 6px rgba(63, 63, 63, 0.1);
      }
       .navbar-brand img {
          height: 40px;
          margin-right: 10px;
          border-radius: 30px;
      }

/* Estilo para la sidebar */
.sidebar {
  background-image: url('static/img/img6.jpg'); /* Ruta de tu imagen */
  background-size: cover; /* La imagen cubre todo el área */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
}

/* Estilo de los menús desplegables */
.menu-toggle {
  display: none; /* Oculta el checkbox */
}

.nav-item .nav-treeview {
  display: none; /* Oculta los submenús por defecto */
}

.menu-toggle:checked + .nav-treeview {
  display: block; /* Muestra el submenú cuando el checkbox está marcado */
}

.nav-link {
  cursor: pointer;
}

.nav-item label {
  display: block;
  padding: 10px;
  font-size: 16px;
}

/* Transición para hacer más suave el despliegue y ocultamiento */
.nav-treeview {
  transition: all 0.3s ease;
}


/* Estilo de los menús desplegables */
.menu-toggle {
  display: none; /* Oculta el checkbox */
}

.nav-item .nav-treeview {
  display: none; /* Oculta los submenús por defecto */
}

.menu-toggle:checked + .nav-treeview {
  display: block; /* Muestra el submenú cuando el checkbox está marcado */
}

.nav-link {
  cursor: pointer;
}

.nav-item label {
  display: block;
  padding: 10px;
  font-size: 16px;
}

/* Transición para hacer más suave el despliegue y ocultamiento */
.nav-treeview {
  transition: all 0.3s ease;
}

/* Estilo de los textos de la barra lateral */
.sidebar {
  color: white; /* Cambia el color del texto de toda la sidebar */
}

/* Cambia el color del texto de los links */
.sidebar .nav-link {
  color: white; /* Letras blancas en los enlaces */
}

/* Cambia el color del texto cuando el mouse está sobre un enlace */
.sidebar .nav-link:hover {
  color: #f8f9fa; /* Puedes cambiar el color a uno más claro si prefieres */
}

/* Cambia el color de los iconos en los enlaces */
.sidebar .nav-link i {
  color: white; /* Iconos blancos */
}

/* Cambia el color de los títulos del menú */
.sidebar .nav-header {
  color: white; /* Letras blancas en los encabezados de las secciones */
}

/* Cambiar el color de los badges (como las etiquetas que aparecen en algunos enlaces) */
.sidebar .badge {
  background-color: #f00; /* Un color de fondo para los badges */
  color: white; /* Letras blancas dentro de los badges */
}

/* Color del texto en las subopciones del menú (los desplegables) */
.sidebar .nav-treeview .nav-link {
  color: white; /* Letras blancas en las opciones de los submenús */
}

/* Opcional: cambiar el color del texto en los títulos de los submenús */
.sidebar .nav-treeview > .nav-item > a {
  color: white; /* Letras blancas en los títulos de las opciones dentro del submenú */
}

/* Estilo del menú lateral */
.sidebar {
  overflow-y: auto; /* Permite el desplazamiento vertical cuando el contenido se desborda */
  height: 100vh; /* Asegura que el menú ocupe toda la altura de la ventana */
  scrollbar-width: thin; /* Barra de desplazamiento más delgada en Firefox */
  scrollbar-color: #ffffff #212529; /* Pulgar blanco con fondo oscuro */
}

/* Estilo de la barra de desplazamiento en navegadores basados en Webkit (Chrome, Safari, etc.) */
.sidebar::-webkit-scrollbar {
  width: 12px; /* Ancho de la barra de desplazamiento */
}

/* Estilo del pulgar (parte movible) de la barra de desplazamiento */
.sidebar::-webkit-scrollbar-thumb {
  background-color: #ffffff; /* Pulgar blanco */
  border-radius: 10px; /* Bordes redondeados */
  border: 3px solid #212529; /* Borde oscuro alrededor del pulgar */
  transition: background-color 0.3s ease; /* Efecto de transición cuando cambia el color */
}

/* Fondo de la barra de desplazamiento */
.sidebar::-webkit-scrollbar-track {
  background: #212529; /* Fondo oscuro para la barra */
  border-radius: 10px; /* Bordes redondeados para el fondo */
}

/* Estilo cuando el pulgar de la barra de desplazamiento es tocado (hover) */
.sidebar::-webkit-scrollbar-thumb:hover {
  background-color: #f8f9fa; /* Pulgar blanco más claro cuando se pasa el mouse */
}


/* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Barra de navegación con fondo transparente */
.barra {
    background-color: transparent;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Estilos para los elementos de la barra de navegación */
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

/* Separación entre los elementos del menú */
nav ul li {
    margin-right: 15px;
}

/* Estilos para los enlaces */
nav ul li a {
    text-decoration: none;
    color: #f8f2f2; /* Color blanco */
    padding: 5px 10px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s, color 0.3s;
}

/* Estilo específico para el botón de "Menú Principal" */
nav ul li .btn-menu {
    border-radius: 5px;
}

nav ul li .btn-menu:hover {
    background-color: rgb(170, 24, 24);
    color: white;
}

/* Estilo específico para el botón de "Usuario" */
nav ul li .btn-usuario {
    border-radius: 5px;
}

nav ul li .btn-usuario:hover {
    background-color: rgb(140, 28, 28);
    color: white;
}

/* Espacio entre el icono y el texto */
nav ul li a i {
    margin-right: 20px;
}

@media (max-width: 1024px) {
  .container {
      padding: 30px; /* Ajusta el padding para pantallas más pequeñas */
      margin-top: 50px; /* Menos espacio arriba en pantallas pequeñas */
  }
}

@media (max-width: 768px) {
  .container {
      padding: 20px; /* Menos padding para pantallas medianas */
      margin-top: 30px; /* Menos espacio arriba */
  }
}

@media (max-width: 480px) {
  .container {
      padding: 15px; /* Aún menos padding en pantallas pequeñas */
      margin-top: 20px; /* Menos espacio en pantallas móviles */
      max-width: 85%; /* Asegura que el contenedor ocupe todo el ancho */
  }
}
/* Preloader Styles */
.preloader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #f8f9fa;
    z-index: 9999;
}

.preloader-animation {
    position: relative;
    text-align: center;
}

.preloader-logo {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    animation: bounce 1.5s infinite ease-in-out;
}

.spinner {
    margin-top: 15px;
    width: 40px;
    height: 40px;
    border: 4px solid transparent;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Animations */
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Hide Preloader (optional) */
body.loaded .preloader {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

        
  </style>

  <div class="wrapper ">

  <!-- loading -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="static/img/logo.png" alt="AdminLTELogo" height="60" width="60" style="border-radius: 21px;">
  </div>

  <!-- Navbar -->
  <!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-success navbar-light barra" style="width: 80%; height: 50px;">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars" style="color: rgb(246, 246, 246);"></i></a>
    </li>
    
    <!-- Nombre del sistema (visible en pantallas grandes) -->
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" onclick="reporte()" class="nav-link" style="color: rgb(246, 246, 246);"><h5>Autopark Solution</h5></a>
    </li>
    
    <!-- Botón de tareas -->
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" onclick="tareas()" class="nav-link" alt="Asignar Tareas" style="color: rgb(246, 246, 246);">
        <i class="nav-icon fa-solid fa-square-plus"></i>
      </a>
    </li>
  </ul>

  <!-- Navbar Right links (iconos y botones en la parte derecha) -->
  <ul class="navbar-nav ml-auto">
    <!-- Botón Menú Principal (visible en pantallas grandes) -->
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link btn-menu" alt="Menú Principal" style="color: white;">
        Menú Principal
      </a>
    </li>

    <!-- Botón Usuario (visible en pantallas grandes) -->
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link btn-usuario" alt="Usuario" style="color: rgb(246, 246, 246);">
        Usuario
      </a>
    </li>

    <!-- Botón Menú Principal (Icono, visible en pantallas pequeñas) -->
    <li class="nav-item d-sm-none">
      <a href="#" class="nav-link" alt="Menú Principal">
        <i class="fa-solid fa-home" style="font-size: 20px; color: rgb(246, 246, 246);"></i>
      </a>
    </li>

    <!-- Botón Usuario (Icono, visible en pantallas pequeñas) -->
    <li class="nav-item d-sm-none">
      <a href="#" class="nav-link" alt="Usuario">
        <i class="fa-solid fa-user" style="font-size: 20px; color: rgb(246, 246, 246);"></i>
      </a>
    </li>
  </ul>
</nav>

  <!-- /.navbar -->

  <!-- Main Sidebar Container -->  
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index.html" class="brand-link">
      <img src="dist/img/logodomestico.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3 navbar-warning" style="opacity: .8">
      <span class="brand-text font-weight-light">MENU</span>
    </a>
  
    <!-- Sidebar -->
    <div class="sidebar navbar-success" >
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Perfil</a>
        </div>
      </div>
  
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Reservas -->
          <li class="nav-item has-treeview">
            <label class="nav-link" for="reservas-toggle">
              <i class="fas fa-calendar-check"></i>
              <p>Reservas<i class="right fas fa-angle-left"></i></p>
            </label>
            <input type="checkbox" id="reservas-toggle" class="menu-toggle">
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="reserva.html" class="nav-link"><i class="fas fa-check"></i><p>Confirmar reserva</p></a>
              </li>
              <li class="nav-item">
                <a href="cancelarreserva.html" class="nav-link"><i class="fas fa-check"></i><p>Cancelar reserva</p></a>
              </li>
              <li class="nav-item">
                <a href="modireserva.html" class="nav-link"><i class="fas fa-check"></i><p>Modificar reserva</p></a>
              </li>
              <li class="nav-item">
                <a href="verreservas.html" class="nav-link"><i class="fas fa-check"></i><p>Ver reservas actuales</p></a>
              </li>
            </ul>
          </li>
  
          <!-- Historial de pago -->
          <li class="nav-item has-treeview">
            <label class="nav-link" for="pago-toggle">
              <i class="fas fa-receipt"></i>
              <p>Historial de pago<i class="right fas fa-angle-left"></i></p>
            </label>
            <input type="checkbox" id="pago-toggle" class="menu-toggle">
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="reembolso.html" class="nav-link"><i class="fas fa-check"></i><p>Solicitar reembolso</p></a>
              </li>
            </ul>
          </li>
  
          <!-- Método de pago -->
          <li class="nav-item has-treeview">
            <label class="nav-link" for="pago-method-toggle">
              <i class="fas fa-credit-card"></i>
              <p>Método de pago<i class="fas fa-angle-left right"></i></p>
            </label>
            <input type="checkbox" id="pago-method-toggle" class="menu-toggle">
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="agrgarpago.html" class="nav-link"><i class="fas fa-check"></i><p>Agregar método de pago</p></a>
              </li>
              <li class="nav-item">
                <a href="eliminarpago.html" class="nav-link"><i class="fas fa-check"></i><p>Eliminar método de pago</p></a>
              </li>
            </ul>
          </li>
  
          <!-- Historial de reservas -->
          <li class="nav-item has-treeview">
            <label class="nav-link" for="historial-reservas-toggle">
              <i class="fas fa-history"></i>
              <p>Historial de reservas<i class="fas fa-angle-left right"></i></p>
            </label>
            <input type="checkbox" id="historial-reservas-toggle" class="menu-toggle">
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="historialdereserava.html" class="nav-link"><i class="fas fa-check"></i><p>Ver detalles de reserva</p></a>
              </li>
            </ul>
          </li>
  
          <!-- Notificaciones -->
          <li class="nav-item has-treeview">
            <label class="nav-link" for="notificaciones-toggle">
              <i class="fas fa-bell"></i>
              <p>Notificaciones<i class="fas fa-angle-left right"></i></p>
            </label>
            <input type="checkbox" id="notificaciones-toggle" class="menu-toggle">
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link"><i class="fas fa-check"></i><p>Marcar como no leído</p></a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link"><i class="fas fa-check"></i><p>Configurar recordatorio</p></a>
              </li>
            </ul>
          </li>
  
          <!-- Soporte -->
          <li class="nav-item has-treeview">
            <label class="nav-link" for="soporte-toggle">
              <i class="fas fa-headset"></i>
              <p>Soporte<i class="fas fa-angle-left right"></i></p>
            </label>
            <input type="checkbox" id="soporte-toggle" class="menu-toggle">
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="soporte.html" class="nav-link"><i class="fas fa-check"></i><p>Ver preguntas frecuentes</p></a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  

  <!-- Content Wrapper. Contains page content -->
  <<div class="content-wrapper" style="background-color: rgba(240, 237, 237, 0);">
    <div class="container" >
        <h2 class="text-center mb-4">Reserva de Estacionamiento</h2>

        <form id="reservaForm">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="nombre" class="form-label">Nombre Completo</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input type="tel" class="form-control" id="telefono" name="telefono" required>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 mb-3">
                    <label for="placa" class="form-label">Placa del Vehículo</label>
                    <input type="text" class="form-control" id="placa" name="placa" required>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="modelo" class="form-label">Modelo</label>
                    <input type="text" class="form-control" id="modelo" name="modelo" required>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="color" class="form-label">Color</label>
                    <input type="text" class="form-control" id="color" name="color" required>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="fecha" class="form-label">Fecha de Ingreso</label>
                    <input type="date" class="form-control" id="fecha" name="fecha" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="hora" class="form-label">Hora de Ingreso</label>
                    <input type="time" class="form-control" id="hora" name="hora" required>
                </div>

                <!-- Campo de Tiempo Reservado -->
                <div class="col-md-6 mb-3">
                    <label for="tiempo-reservado">Tiempo Reservado (horas):</label>
                    <input type="number" id="tiempo-reservado" name="tiempo-reservado" class="form-control" style="width: 100%;" required>
                </div>

                <!-- Precio por Hora debajo del Tiempo Reservado -->
                <div class="col-md-6 mb-3">
                    <div id="precio-hora">
                        <strong>Precio por Hora:</strong> $10,000 COP
                    </div>
                </div>

                <!-- Campo de Número de Estacionamiento más largo -->
                <div class="col-md-12 mb-3">
                    <label for="estacionamiento" class="form-label">Número de Estacionamiento</label>
                    <select class="form-select" id="estacionamiento" name="estacionamiento" required style="width: 100%; padding: 10px; font-size: 16px;">
                        <option value="" disabled selected>Selecciona el número</option>
                        <option value="1">Estacionamiento 1</option>
                        <option value="2">Estacionamiento 2</option>
                        <option value="3">Estacionamiento 3</option>
                        <option value="4">Estacionamiento 4</option>
                        <option value="5">Estacionamiento 5</option>
                        <option value="6">Estacionamiento 6</option>
                        <option value="7">Estacionamiento 7</option>
                        <option value="8">Estacionamiento 8</option>
                        <option value="9">Estacionamiento 9</option>
                        <option value="10">Estacionamiento 10</option>
                        <option value="11">Estacionamiento 11</option>
                        <option value="12">Estacionamiento 12</option>
                        <option value="13">Estacionamiento 13</option>
                        <option value="14">Estacionamiento 14</option>
                        <option value="15">Estacionamiento 15</option>
                    </select>
                </div>

            </div>

            <button type="submit" class="btn btn-primary w-100">Confirmar Reserva</button><br><br>
        </form>

        <div class="text-center">
            <img class="factura_img img-fluid" src="static/img/factura.jpg" alt="Factura de Reserva">
        </div><br><br>

        <p>
            Este proceso de reserva de estacionamiento es rápido y sencillo. Una vez que complete el formulario con sus datos personales y los detalles de su vehículo, recibirá una factura de reserva con toda la información necesaria para su ingreso. La factura incluye su nombre, teléfono, placa del vehículo, modelo, color, fecha y hora de ingreso, así como el número de estacionamiento asignado. Además, podrá descargar esta factura en formato PDF para su conveniencia.
        </p>

        <div id="factura">
            <h3 class="text-center">Factura de Reserva</h3>
            <div id="facturaContenido"></div>
            <button id="descargarPDF" class="btn btn-primary mt-3">Descargar Factura en PDF</button>
        </div>

        <footer>
            © 2024 Autopark Solution. Todos los derechos reservados.
        </footer>
    </div>
</div>
`;



    document.getElementById('contenido').innerHTML = contenido;

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
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(() => {
                document.body.classList.add("loaded");
            }, 2000); // Ocultar después de 2 segundos
        });
        
    
    }
    

    function canelarreserva() {
    const contenido = `
    <style>
        body {
            background: url('static/img/fondo.jpg') no-repeat center center fixed;
            background-size: cover;
            min-height: 100vh;
            font-family: 'Arial', sans-serif;
            
        }

        .container {
            background-color: rgba(255, 255, 255, 0.95);
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            max-width: 900px;
            margin-top: 90px;
        }

        .navbar {
            background-color:transparent;
            color: white;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 20px;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand {
            display: flex;
            align-items: center;
            color: white;
            font-weight: bold;
        }

        .navbar-brand img {
            height: 40px;
            margin-right: 10px;
            border-radius: 30px;
        }

        footer {
            margin-top: 20px;
            text-align: center;
            font-size: 0.9rem;
            color: #666;
        }
        .main-sidebar {
    background: url('/static/img/img6.jpg') no-repeat center center;
    background-size: cover;
        }

    </style>
</head>
<body>

    
  <aside class="main-sidebar sidebar-dark-primary elevation-4" style="height: 100%; position: fixed;" >
    <!-- Brand Logo -->
    <a href="index.html" class="brand-link">
      <img src="/static/img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
          style="opacity: .8">
      <span class="brand-text font-weight-light">MENU</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Luis Angel Peñaloza </a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" >
          <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="fas fa-calendar-check"></i>


              <p>
                Reservas
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="reserva.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>confirma la reserva</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="cancelarreserva.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>cancelar reserva</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="modireserva.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>Modificar reserva</p>
                </a>

                <li class="nav-item">
                    <a href="verreservas.html" class="nav-link">
                      <i class="fas fa-check"></i>
                      <p>ver  reservas actuales</p>
                    </a>
              </li>
            </ul>
          </li>
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

          <li class="nav-item">
            <a href="perfilusuario.html" class="nav-link">
              <i class="fas fa-user"></i>
              <p>
                perfil del usuario
                <span class="right badge badge-danger">1</span>
              </p>
            </a>
          </li>
          

          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            
              <i class="fas fa-receipt"></i>

              <p>
                historial de pago
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              
              <li class="nav-item">
                <a href="reembolso.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>solicitar reembolso</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="fas fa-credit-card"></i>
              <p>
                Método de pago
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="agrgarpago.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>Aggregar metodo de pago</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="eliminarpago.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p> Eliminar método de pago</p>
                </a>
              </li>
              
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="fas fa-history"></i>
              <p>
                Historial de reservas
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              
              <li class="nav-item">
                <a href="historialdereserava.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>ver detalles de reserva</p>
                </a>
              </li>
              
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="fas fa-bell"></i>

              <p>
              notificaciones 
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>marcar como no leido </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>configurar recordatorio </p>
                </a>
              </li>
             
            </ul>
          </li>
        
              
  
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="fas fa-headset"></i>
          
                soporte 
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              
              <li class="nav-item">
                <a href="soporte.html" class="nav-link">
                  <i class="fas fa-check"></i>
                  <p>ver preguatas frecuetes</p>
                </a>
              </li>
              
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              
            </ul>
          </li>
        
      
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>


  <div style="padding-left: 250px;">
    <!-- Barra de Navegación -->
    <nav class="navbar navbar-expand-lg" style="background-color: transparent; padding-left: 250px;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/static/img/logo.png" alt="Logo"> <!-- Espacio para logo -->
                Autopark Solution
            </a>
            <div class="ms-auto">
                <a href="index.html" class="btn btn-light me-2">Menú Principal</a>
                <a href="usuarioint.html" class="btn btn-light">Apartado Usuario</a>
            </div>
        </div>
    </nav>

    <div class="container">
        <h2 class="text-center mb-4">Cancelar Reserva de Estacionamiento</h2>

        <form action="/cancelar_reserva" method="POST">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="nombre" class="form-label">Nombre Completo</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="correo" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="correo" name="correo" required>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="placa" class="form-label">Placa del Vehículo</label>
                    <input type="text" class="form-control" id="placa" name="placa" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="fecha_reserva" class="form-label">Fecha de la Reserva</label>
                    <input type="date" class="form-control" id="fecha_reserva" name="fecha_reserva" required>
                </div>
            </div>

            <div class="mb-3">
                <label for="hora_entrada" class="form-label">Hora de Entrada</label>
                <input type="time" class="form-control" id="hora_entrada" name="hora_entrada" required>
            </div>

            <div class="mb-3">
                <label for="hora_salida" class="form-label">Hora de Salida</label>
                <input type="time" class="form-control" id="hora_salida" name="hora_salida" required>
            </div>

            <div class="mb-3">
                <label for="motivo" class="form-label">Motivo de Cancelación</label>
                <textarea class="form-control" id="motivo" name="motivo" rows="4" required></textarea>
            </div>

        </form><button type="button" id="btnCancelar" class="btn btn-secondary w-100">Cancelar</button>

        <footer>
            © 2024 Autopark Solution. Todos los derechos reservados.
        </footer>
    </div>

    </div>
    `;

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
  
    document.getElementById("contenido").innerHTML = contenido;
    }

    
