
const plazas = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    ocupada: [2, 6].includes(i + 1) // Plazas 2 y 6 ocupadas
}));

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.row');
    plazas.forEach(plaza => {
        const div = document.createElement('div');
        div.className = `col-md-4 plaza ${plaza.ocupada ? 'ocupada' : 'disponible'}`;
        div.textContent = `Plaza ${plaza.id}`;
        div.title = plaza.ocupada ? "Ocupada" : "Disponible";
        contenedor.appendChild(div);
    });
});
