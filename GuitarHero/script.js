// Mapea las teclas a sus respectivos archivos de sonido
var keySounds = [
    { key: 'Q', soundSrc: 'sonidos/05.mp3' },
    { key: 'W', soundSrc: 'sonidos/010.mp3' },
    { key: 'E', soundSrc: 'sonidos/015.mp3' },
    { key: 'R', soundSrc: 'sonidos/020.mp3' },
    { key: 'T', soundSrc: 'sonidos/025.mp3' },
    { key: 'Y', soundSrc: 'sonidos/030.mp3' },
    { key: 'A', soundSrc: 'sonidos/035.mp3' },
    { key: 'S', soundSrc: 'sonidos/040.mp3' },
    { key: 'D', soundSrc: 'sonidos/045.mp3' },
    { key: 'F', soundSrc: 'sonidos/050.mp3' },
    { key: 'G', soundSrc: 'sonidos/055.mp3' },
    { key: 'H', soundSrc: 'sonidos/1.mp3' },
    // Agrega más teclas y sonidos aquí según sea necesario
];
// Función para buscar el objeto KeySound correspondiente a una tecla
function findKeySound(key) {
    for (var _i = 0, keySounds_1 = keySounds; _i < keySounds_1.length; _i++) {
        var keySound = keySounds_1[_i];
        if (keySound.key === key) {
            return keySound;
        }
    }
    return undefined;
}
// Agrega un evento para detectar cuando se presiona una tecla
window.addEventListener('keydown', function (e) {
    var key = e.key.toUpperCase();
    var keySound = findKeySound(key);
    if (keySound) {
        e.preventDefault(); // Evita el comportamiento predeterminado de la tecla (por ejemplo, evitar que la página se desplace)
        var audioElement = document.querySelector("audio[data-key=\"".concat(key.charCodeAt(0), "\"]"));
        if (audioElement) {
            audioElement.currentTime = 0; // Reinicia la reproducción si ya está sonando
            audioElement.play();
        }
    }
});
var startButton = document.getElementById('button');
if (startButton) {
    startButton.addEventListener('click', function () {
        var container = document.querySelector('.container');
        container.classList.remove('hidden'); // Muestra el contenido
    });
}
