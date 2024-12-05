

document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const rol = document.getElementById('rol').value;

    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${rol}</td>
        <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
    `;
    $('#addUserModal').modal('hide');
});
