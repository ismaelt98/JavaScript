// Función para reproducir el sonido del instrumento
function playSound(event) {
    var key;
    if (event instanceof KeyboardEvent) {
        key = event.key;
    }
    else if (event instanceof MouseEvent) {
        var target = event.currentTarget;
        key = target.getAttribute('data-key') || '';
    }
    else {
        return;
    }
    var audio = document.querySelector("audio[data-key=\"".concat(key, "\"]"));
    var button = document.querySelector("button[data-key=\"".concat(key, "\"]"));
    if (!audio || !button)
        return;
    audio.currentTime = 0;
    audio.play();
    button.classList.add('playing');
}
// Función para detener la animación al finalizar el sonido
function removeTransition(event) {
    if (event instanceof TransitionEvent) {
        if (event.propertyName !== 'transform')
            return;
        var target = event.target;
        target.classList.remove('playing');
    }
}
var buttons = document.querySelectorAll('.instrument-container button');
buttons.forEach(function (button) {
    button.addEventListener('click', playSound);
    button.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', function (event) { return playSound(event); });
