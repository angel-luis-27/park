

document.getElementById('addPaymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cliente = document.getElementById('cliente').value;
    const monto = document.getElementById('monto').value;
    const fecha = document.getElementById('fecha').value;

    const table = document.getElementById('paymentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${cliente}</td>
        <td>$${monto}</td>
        <td>${fecha}</td>
        <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
    `;
    $('#addPaymentModal').modal('hide');
});