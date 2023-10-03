$(document).ready(function () {
    $("#toggleRojo").click(function () {
        $("#textoRojo").toggleClass("rojo");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const toggleAzulButton = document.getElementById("toggleAzul");
    const fondoAzulParagraph = document.getElementById("fondoAzul");

    toggleAzulButton.addEventListener("click", function () {
        fondoAzulParagraph.classList.toggle("fondo-azul");
    });
});