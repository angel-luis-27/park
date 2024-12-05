document.getElementById('addReservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cliente = document.getElementById('cliente').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const espacio = document.getElementById('espacio').value;

    const table = document.getElementById('reservationTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${cliente}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${espacio}</td>
        <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
    `;
    $('#addReservationModal').modal('hide');
});