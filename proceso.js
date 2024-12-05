function tareas() {
    const contenido = `
        <style>
            .container {
                width: 100%; /* Ancho completo */
                max-width: |100%; /* Ancho máximo */
                padding: 20px; /* Espaciado interno */
                background-color: white; /* Color de fondo del contenedor */
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #4A90E2;
                margin-bottom: 20px;
            }
            form {
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                width: 100%;
                max-width: 100%;
                margin-bottom: 20px; 
            }
            label {
                margin-top: 10px;
                display: block;
                font-weight: bold;
            }
            input, select, button {
                margin: 10px 0;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                width: 100%;
                box-sizing: border-box;
            }
            input:focus, select:focus {
                border-color: #4A90E2;
                outline: none;
            }
            button {
                background-color: #4A90E2;
                color: white;
                border: none;
                cursor: pointer;
                font-size: 16px;
            }
            button:hover {
                background-color: #357ABD;
            }
        </style>
        <div class="container">
            <h1>Registrar Tarea</h1>
            <form id="taskForm">
                <label for="name">Nombre de la Tarea:</label>
                <input type="text" id="name" required placeholder="Ej. Estudiar Matemáticas">
                <label for="category">Categoría:</label>
                <input type="text" id="category" required placeholder="Ej. Estudio">
                <label for="date">Fecha:</label>
                <input type="date" id="date" required>
                <label for="time">Hora:</label>
                <input type="time" id="time" required>
                <label for="reminder">Tipo:</label>
                <select id="reminder">
                    <option value="reminder">Recordatorio</option>
                    <option value="notification">Notificación</option>
                </select>
                <label for="audioInput">Adjuntar Audio:</label>
                <input type="file" accept="audio/*">
                <button type="submit" id="boton">Registrar Tarea</button>
            </form>
        </div>
    `;
    
    document.getElementById("contenido").innerHTML = contenido;

    // Agregar el evento al formulario
    document.getElementById('taskForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        Swal.fire({
            title: " Desea Asignar la tarea?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "guardar",
            denyButtonText: `No guardar`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Guardado Correctamente!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("No fue posible guardar", "", "info");
            }
          });
    });
}


function perfil() {
    const contenido = `

        <style>
            :root {
                --bg-color: #f0f0f0;
                --text-color: #333;
                --card-bg: #fff;
                --button-bg: #007bff;
                --button-text: #fff;
                --button-danger-bg: #dc3545;
                --button-secondary-bg: #6c757d;
            }
            .dark-theme {
                --bg-color: #333;
                --text-color: #f0f0f0;
                --card-bg: #444;
                --button-bg: #0056b3;
                --button-text: #fff;
                --button-danger-bg: #bd2130;
                --button-secondary-bg: #5a6268;
            }
            .card {
                background-color: var(--card-bg);
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                padding: 20px;
                width: 100%;
                
            }
            .profile-picture {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                object-fit: cover;
                margin: 0 auto 20px;
                display: block;
            }
            h1 {
                text-align: center;
                margin-bottom: 20px;
            }
            .form-group {
                margin-bottom: 15px;
            }
            label {
                display: block;
                margin-bottom: 5px;
            }
            input {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-sizing: border-box;
            }
            .button-group {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }
            button {
                padding: 10px 15px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
                transition: background-color 0.3s;
            }
            .btn-danger {
                background-color: var(--button-danger-bg);
                color: var(--button-text);
            }
            .btn-secondary {
                background-color: var(--button-secondary-bg);
                color: var(--button-text);
            }
            .theme-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: var(--button-bg);
                color: var(--button-text);
                padding: 10px 15px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            @media (max-width: 480px) {
                .card {
                    width: 90%;
                }
            }
        </style>
    </head>
    <body>
        <div class="card">
            <img src="Admin/doc/logodomestico.png" alt="Foto de perfil" class="profile-picture">
            <h1>Perfil de Usuario</h1>
            <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" value="usuario@ejemplo.com" readonly>
            </div>
            <div class="form-group">
                <label for="phone">Teléfono:</label>
                <input type="tel" id="phone" value="+1234567890" readonly>
            </div>
            <div class="form-group">
                <label for="age">Edad:</label>
                <input type="number" id="age" value="30" readonly>
            </div>
            <div class="button-group">
                <button class="btn-danger">Eliminar Cuenta</button>
                <button class="btn-secondary">Cerrar Sesión</button>
            </div>
        </div>
        <button class="theme-toggle" onclick="toggleTheme()">Cambiar Tema</button>
    
        <script>
            function toggleTheme() {
                document.body.classList.toggle('dark-theme');
            }
        </script>
    </body>
    </html>`;

    document.getElementById("contenido").innerHTML = contenido;

}

function registro() {
    const contenido = `
        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Registrarse</p>

                <form action="../../index.html" method="post">
                    <div class="input-group mb-4">
                        <input type="text" class="form-control" placeholder="Nombre">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-4">
                        <input type="email" class="form-control" placeholder="Email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-4">
                        <input type="Contraseña" class="form-control" placeholder="Contraseña">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-4">
                        <input type="Contraseña" class="form-control" placeholder="Confirmar contraseña">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                        <!-- /.col -->
                        <div class="col-2">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <div class="social-auth-links text-center">
                    <p>- OR -</p>
                    <a href="#" class="btn btn-block btn-primary">
                        <i class="fab fa-facebook mr-2"></i>
                        Registrar Facebook
                    </a>
                    <a href="#" class="btn btn-block btn-danger">
                        <i class="fab fa-google-plus mr-2"></i>
                        Registrar Google
                    </a>
                </div>

                <a href="login.html" class="text-center">Olvido su Contraseña</a>
            </div>
    `;

    document.getElementById("contenido").innerHTML = contenido;
}
function reporte() {
    const contenido = `
        <div class="content">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-12">
                        <div class="col-sm-12">
                            <h1>Listas</h1>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Tareas completadas</h3>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">#</th>
                                                <th>Tareas</th>
                                                <th>Progreso</th>
                                                <th style="width: 40px">Porcentaje</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1.</td>
                                                <td>Update software</td>
                                                <td>
                                                    <div class="progress progress-xs">
                                                        <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge bg-danger">55%</span></td>
                                            </tr>
                                            <tr>
                                                <td>2.</td>
                                                <td>Clean database</td>
                                                <td>
                                                    <div class="progress progress-xs">
                                                        <div class="progress-bar bg-warning" style="width: 70%"></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge bg-warning">70%</span></td>
                                            </tr>
                                            <tr>
                                                <td>3.</td>
                                                <td>Cron job running</td>
                                                <td>
                                                    <div class="progress progress-xs progress-striped active">
                                                        <div class="progress-bar bg-primary" style="width: 30%"></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge bg-primary">30%</span></td>
                                            </tr>
                                            <tr>
                                                <td>4.</td>
                                                <td>Fix and squish bugs</td>
                                                <td>
                                                    <div class="progress progress-xs progress-striped active">
                                                        <div class="progress-bar bg-success" style="width: 90%"></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge bg-success">90%</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- /.card-body -->
                                <div class="card-footer clearfix">
                                    <ul class="pagination pagination-sm m-0 float-right">
                                        <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
    `;

    document.getElementById("contenido").innerHTML = contenido;
}
function categoria() {
    const contenido = `
    <style>
        .container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 100%;
         
        }
        h1 {
            color: #333;
            margin-top: 0;
        }
        .add-category {
            display: flex;
            margin-bottom: 20px;
        }
        .add-category input {
            flex-grow: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px 0 0 4px;
        }
        .add-category button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
        }
        .category-list {
            list-style-type: none;
            padding: 0;
        }
        .category-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            background-color: #f9f9f9;
            margin-bottom: 10px;
            border-radius: 4px;
        }
        .category-icon {
            margin-right: 10px;
            width: 20px;
            text-align: center;
        }
        .delete-btn {
            background-color: #f44336;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
    <div class="container">
        <h1>Categorías</h1>
        <div class="add-category">
            <input type="text" placeholder="Nueva categoría">
            <button><i class="fas fa-plus"></i> Añadir</button>
        </div>
        <ul class="category-list">
            <li class="category-item">
                <span><i class="fas fa-home category-icon"></i> Hogar</span>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </li>
            <li class="category-item">
                <span><i class="fas fa-briefcase category-icon"></i> Trabajo</span>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </li>
            <li class="category-item">
                <span><i class="fas fa-shopping-cart category-icon"></i> Compras</span>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </li>
        </ul>
    </div>`;
   
    document.getElementById("contenido").innerHTML = contenido;
}
function calendario() {
    const contenido = `
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --accent-color: #e74c3c;
            --background-color: #ecf0f1;
            --text-color: #34495e;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 20px;
        }

        .calendar {
            flex: 2;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px;
        }

        .month {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: var(--primary-color);
        }

        .weekdays {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
        }

        .day {
            aspect-ratio: 1;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 5px;
            text-align: center;
            position: relative;
        }

        .day:hover {
            background-color: #f0f0f0;
        }

        .event {
            font-size: 10px;
            padding: 2px;
            margin-top: 2px;
            border-radius: 3px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .event-list {
            flex: 1;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px;
        }

        .event-list h2 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }

        .event-item {
            background-color: #f0f0f0;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            position: relative;
        }

        .event-item h3 {
            margin: 0 0 5px 0;
            color: var(--secondary-color);
        }

        .event-actions {
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .event-actions i {
            margin-left: 5px;
            cursor: pointer;
        }

        .fa-trash-alt {
            color: var(--accent-color);
        }

        .fa-edit {
            color: var(--primary-color);
        }

        .event-form {
            margin-top: 20px;
        }

        .event-form input, .event-form select {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .event-form button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
        }

        .event-form button:hover {
            background-color: #2980b9;
        }
    </style>
    <div class="container">
        <div class="calendar">
            <div class="month">Noviembre 2024</div>
            <div class="weekdays">
                <div>Dom</div>
                <div>Lun</div>
                <div>Mar</div>
                <div>Mié</div>
                <div>Jue</div>
                <div>Vie</div>
                <div>Sáb</div>
            </div>
            <div class="days">
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day">1</div>
                <div class="day">2</div>
                <div class="day">3</div>
                <div class="day">4</div>
                <div class="day">5
                    <div class="event" style="background-color: #3498db;">Cumpleaños</div>
                </div>
                <div class="day">6</div>
                <div class="day">7</div>
                <div class="day">8</div>
                <div class="day">9</div>
                <div class="day">10</div>
                <div class="day">11</div>
                <div class="day">12</div>
                <div class="day">13</div>
                <div class="day">14</div>
                <div class="day">15
                    <div class="event" style="background-color: #2ecc71;">Salir de viaje</div>
                </div>
                <div class="day">16</div>
                <div class="day">17</div>
                <div class="day">18</div>
                <div class="day">19</div>
                <div class="day">20
                    <div class="event" style="background-color: #e74c3c;">Vacaciones</div>
                </div>
                <div class="day">21</div>
                <div class="day">22</div>
                <div class="day">23</div>
                <div class="day">24</div>
                <div class="day">25</div>
                <div class="day">26</div>
                <div class="day">27</div>
                <div class="day">28</div>
                <div class="day">29</div>
                <div class="day">30</div>
            </div>
        </div>
        <div class="event-list">
            <h2>Eventos</h2>
            <div class="event-item">
                <h3>Cumpleaños</h3>
                <p>Fecha: 5 de Noviembre, 2024</p>
                <div class="event-actions">
                    <i class="fas fa-edit" title="Editar evento"></i>
                    <i class="fas fa-trash-alt" title="Eliminar evento"></i>
                </div>
            </div>
            <div class="event-item">
                <h3>Salir de viaje</h3>
                <p>Fecha: 15 de Noviembre, 2024</p>
                <div class="event-actions">
                    <i class="fas fa-edit" title="Editar evento"></i>
                    <i class="fas fa-trash-alt" title="Eliminar evento"></i>
                </div>
            </div>
            <div class="event-item">
                <h3>Vacaciones</h3>
                <p>Fecha: 20 de Noviembre, 2024</p>
                <div class="event-actions">
                    <i class="fas fa-edit" title="Editar evento"></i>
                    <i class="fas fa-trash-alt" title="Eliminar evento"></i>
                </div>
            </div>
            <div class="event-form">
                <h3>Agregar Evento</h3>
                <form>
                    <input type="text" placeholder="Nombre del evento" required>
                    <input type="date" required>
                    <select required>
                        <option value="">Seleccionar color</option>
                        <option value="#3498db">Azul</option>
                        <option value="#2ecc71">Verde</option>
                        <option value="#e74c3c">Rojo</option>
                        <option value="#f39c12">Naranja</option>
                        <option value="#9b59b6">Morado</option>
                    </select>
                    <button type="submit">Agregar Evento</button>
                </form>
            </div>
        </div>
    </div>`;
    
   
    document.getElementById("contenido").innerHTML = contenido;
}
function asistente() {
    const contenido = `
    <style>
        :root {
            --primary-color: #4a90e2;
            --secondary-color: #f39c12;
            --accent-color: #e74c3c;
            --background-color: #ecf0f1;
            --text-color: #2c3e50;
        }

        .container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            width: 100%;
            max-width: 100%;
        }

        h1 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 2rem;
        }

        .assistant-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .assistant-option {
            background-color: #f7f7f7;
            border: 2px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
        }

        .assistant-option:hover {
            border-color: var(--primary-color);
            transform: translateY(-2px);
        }

        .assistant-option.selected {
            border-color: var(--primary-color);
            background-color: #e6f2ff;
        }

        .assistant-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 1rem;
            object-fit: cover;
        }

        .assistant-info {
            flex-grow: 1;
        }

        .assistant-name {
            font-weight: bold;
            margin-bottom: 0.25rem;
        }

        .assistant-description {
            font-size: 0.9rem;
            color: #666;
        }

        .confirm-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
            margin-top: 2rem;
        }

        .confirm-button:hover {
            background-color: #3a7bd5;
        }

       

        .checkmark {
            width: 30px;
            height: 30px;
            border: 2px solid #ddd;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            transition: all 0.3s ease;
        }

        .checkmark::after {
            content: '✓';
            font-size: 20px;
            color: white;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .assistant-option.selected .checkmark {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
        }

        .assistant-option.selected .checkmark::after {
            opacity: 1;
        }
    </style>
    <div class="container">
        <h1>Selecciona tu Asistente</h1>
        <div class="assistant-options">
            <div class="assistant-option" onclick="selectAssistant(this, 'maria')">
                <img src="https://via.placeholder.com/50" alt="María" class="assistant-avatar">
                <div class="assistant-info">
                    <div class="assistant-name">María</div>
                    <div class="assistant-description">Experta en organización y productividad</div>
                </div>
                <div class="checkmark"></div>
            </div>
            <div class="assistant-option" onclick="selectAssistant(this, 'pablo')">
                <img src="https://via.placeholder.com/50" alt="Pablo" class="assistant-avatar">
                <div class="assistant-info">
                    <div class="assistant-name">Pablo</div>
                    <div class="assistant-description">Especialista en tecnología y programación</div>
                </div>
                <div class="checkmark"></div>
            </div>
            <div class="assistant-option" onclick="selectAssistant(this, 'none')">
                <img src="" alt="Sin Asistente" class="assistant-avatar">
                <div class="assistant-info">
                    <div class="assistant-name">Sin Asistente</div>
                    <div class="assistant-description">Continuar sin asistencia personalizada</div>
                </div>
                <div class="checkmark"></div>
            </div>
        </div>
        <button class="confirm-button" onclick="confirmSelection()">Confirmar Selección</button>
    </div>

    <script>
        let selectedAssistant = null;

        function selectAssistant(element, assistant) {
            // Remove 'selected' class from all options
            document.querySelectorAll('.assistant-option').forEach(option => {
                option.classList.remove('selected');
            });

            // Add 'selected' class to clicked option
            element.classList.add('selected');
            selectedAssistant = assistant;
        }

        function confirmSelection() {
            if (selectedAssistant) {
                alert(\`Has seleccionado a \${selectedAssistant === 'none' ? 'Sin Asistente' : selectedAssistant}\`);
            } else {
                alert('Por favor, selecciona un asistente antes de confirmar.');
            }
        }
    </script>`;
    
    document.getElementById("contenido").innerHTML = contenido;
}
function historial() {
    const contenido = `
    <style> 
        :root {
            --primary-color: #4a90e2;
            --completed-color: #2ecc71;
            --pending-color: #e74c3c;
            --background-color: #f5f7fa;
            --text-color: #333;
            --border-color: #ddd;
        }

       

        .container {
            max-width: 100%;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        h1 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 30px;
        }

        .task-list {
            list-style-type: none;
            padding: 0;
        }

        .task-item {
            background-color: #fff;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            margin-bottom: 10px;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
        }

        .task-item:hover {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .task-info {
            flex-grow: 1;
        }

        .task-title {
            font-weight: bold;
            margin-bottom: 5px;
        }

        .task-date {
            font-size: 0.9em;
            color: #666;
        }

        .task-progress {
            width: 100px;
            height: 10px;
            background-color: #e0e0e0;
            border-radius: 5px;
            overflow: hidden;
            margin-top: 5px;
        }

        .progress-bar {
            height: 100%;
            transition: width 0.3s ease;
        }

        .task-status {
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.8em;
            padding: 3px 8px;
            border-radius: 3px;
            margin-left: 10px;
        }

        .status-completed {
            background-color: var(--completed-color);
            color: white;
        }

        .status-pending {
            background-color: var(--pending-color);
            color: white;
        }

    </style>
    <div class="container">
        <h1>Historial de Tareas</h1>
        <ul class="task-list">
            <li class="task-item">
                <div class="task-info">
                    <div class="task-title">Hacer aseo</div>
                    <div class="task-date">Fecha límite: 15 de noviembre, 2024</div>
                    <div class="task-progress">
                        <div class="progress-bar" style="width: 100%; background-color: var(--completed-color);"></div>
                    </div>
                </div>
                <span class="task-status status-completed">Completada</span>
            </li>
            <li class="task-item">
                <div class="task-info">
                    <div class="task-title">Realizar las compras</div>
                    <div class="task-date">Fecha límite: 20 de noviembre, 2024</div>
                    <div class="task-progress">
                        <div class="progress-bar" style="width: 75%; background-color: var(--primary-color);"></div>
                    </div>
                </div>
                <span class="task-status status-pending">Pendiente</span>
            </li>
            <li class="task-item">
                <div class="task-info">
                    <div class="task-title">Lavar la Ropa</div>
                    <div class="task-date">Fecha límite: 10 de noviembre, 2024</div>
                    <div class="task-progress">
                        <div class="progress-bar" style="width: 100%; background-color: var(--completed-color);"></div>
                    </div>
                </div>
                <span class="task-status status-completed">Completada</span>
            </li>
            <li class="task-item">
                <div class="task-info">
                    <div class="task-title">Visitar a la Abuela</div>
                    <div class="task-date">Fecha límite: 25 de noviembre, 2024</div>
                    <div class="task-progress">
                        <div class="progress-bar" style="width: 30%; background-color: var(--primary-color);"></div>
                    </div>
                </div>
                <span class="task-status status-pending">Pendiente</span>
            </li>
            <li class="task-item">
                <div class="task-info">
                    <div class="task-title">Realizar las tareas de Matematicas</div>
                    <div class="task-date">Fecha límite: 5 de noviembre, 2024</div>
                    <div class="task-progress">
                        <div class="progress-bar" style="width: 100%; background-color: var(--completed-color);"></div>
                    </div>
                </div>
                <span class="task-status status-completed">Completada</span>
            </li>
        </ul>
    </div>`;

    document.getElementById("contenido").innerHTML = contenido;
}
function idioma() {
    const contenido = `  
    <style>
        :root {
            --primary-color: #4a90e2;
            --secondary-color: #f39c12;
            --background-color: #ecf0f1;
            --text-color: #2c3e50;
            --hover-color: #3498db;
            --selected-color: #2ecc71;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: var(--background-color);
            color: var(--text-color);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            width: 100%;
            max-width: 400px;
        }

        h1 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 2rem;
        }

        .language-options {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        .language-option {
            background-color: #f7f7f7;
            border: 2px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .language-option:hover {
            border-color: var(--hover-color);
            transform: translateY(-2px);
        }

        .language-option.selected {
            border-color: var(--selected-color);
            background-color: #e6fff2;
        }

        .language-flag {
            width: 60px;
            height: 40px;
            margin-bottom: 0.5rem;
            object-fit: cover;
            border-radius: 4px;
        }

        .language-name {
            font-weight: bold;
        }

        .confirm-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
            margin-top: 2rem;
        }

        .confirm-button:hover {
            background-color: var(--hover-color);
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        .language-option:active {
            animation: pulse 0.3s ease-in-out;
        }
    </style>
    <div class="container">
        <h1>Selecciona tu Idioma</h1>
        <div class="language-options">
            <div class="language-option" onclick="selectLanguage(this, 'es')">
                <img src="https://flagcdn.com/w80/es.png" alt="Español" class="language-flag">
                <span class="language-name">Español</span>
            </div>
            <div class="language-option" onclick="selectLanguage(this, 'en')">
                <img src="https://flagcdn.com/w80/gb.png" alt="English" class="language-flag">
                <span class="language-name">English</span>
            </div>
            <div class="language-option" onclick="selectLanguage(this, 'fr')">
                <img src="https://flagcdn.com/w80/fr.png" alt="Français" class="language-flag">
                <span class="language-name">Français</span>
            </div>
            <div class="language-option" onclick="selectLanguage(this, 'de')">
                <img src="https://flagcdn.com/w80/de.png" alt="Deutsch" class="language-flag">
                <span class="language-name">Deutsch</span>
            </div>
            <div class="language-option" onclick="selectLanguage(this, 'it')">
                <img src="https://flagcdn.com/w80/it.png" alt="Italiano" class="language-flag">
                <span class="language-name">Italiano</span>
            </div>
            <div class="language-option" onclick="selectLanguage(this, 'pt')">
                <img src="https://flagcdn.com/w80/pt.png" alt="Português" class="language-flag">
                <span class="language-name">Português</span>
            </div>
        </div>
        <button class="confirm-button" onclick="confirmLanguage()">Confirmar Selección</button>
    </div>

    <script>
        let selectedLanguage = null;

        function selectLanguage(element, lang) {
            // Remove 'selected' class from all options
            document.querySelectorAll('.language-option').forEach(option => {
                option.classList.remove('selected');
            });

            // Add 'selected' class to clicked option
            element.classList.add('selected');
            selectedLanguage = lang;
        }

        function confirmLanguage() {
            if (selectedLanguage) {
                alert(\`Has seleccionado el idioma: \${selectedLanguage}\`);
                // Aquí puedes agregar la lógica para cambiar el idioma de la aplicación
            } else {
                alert('Por favor, selecciona un idioma antes de confirmar.');
            }
        }
    </script>
    `;
    document.getElementById("contenido").innerHTML = contenido;
}






