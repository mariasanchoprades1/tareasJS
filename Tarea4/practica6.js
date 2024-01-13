
function manejarClick(event) {
    if (event.target.tagName === 'BUTTON') {
        alert("Has pulsado sobre un botón");
    }
}
document.getElementById("contenedorBotones").addEventListener("click", manejarClick);
