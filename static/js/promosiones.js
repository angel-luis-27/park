
// Función para calcular el precio final con descuento
function calcularDescuento() {
    const precioBase = parseFloat(document.getElementById('precioBase').value);
    const descuento = parseFloat(document.getElementById('promoSelect').value);

    if (isNaN(precioBase) || isNaN(descuento)) {
        document.getElementById('precioFinal').value = '';
        return;
    }

    const precioFinal = precioBase - (precioBase * (descuento / 100));
    document.getElementById('precioFinal').value = precioFinal.toFixed(2);
}

// Eventos para actualizar el precio final automáticamente
document.getElementById('promoSelect').addEventListener('change', calcularDescuento);
document.getElementById('precioBase').addEventListener('input', calcularDescuento);
