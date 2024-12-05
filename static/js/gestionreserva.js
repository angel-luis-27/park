document.getElementById('addReservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const plaza = document.getElementById('plaza').value;
    const cliente = document.getElementById('cliente').value;
    const fecha = document.getElementById('fecha').value;

    const table = document.getElementById('reservationTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${plaza}</td>
        <td>${cliente}</td>
        <td>${fecha}</td>
        <td><span class="badge badge-success">Activa</span></td>
        <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
    `;
    $('#addReservationModal').modal('hide');
});
