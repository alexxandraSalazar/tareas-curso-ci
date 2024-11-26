const colorInput = document.getElementById('colorInput');
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
    const color = colorInput.value.trim(); 
    if (color) {
        document.body.style.backgroundColor = color;
    } else {
        alert('Por favor, ingresa un color válido.');
    }
});