// Función para reproducir el sonido del instrumento
function playSound(event: Event) {
    let key: string;

    if (event instanceof KeyboardEvent) {
        key = event.key;
    } else if (event instanceof MouseEvent) {
        const target = event.currentTarget as HTMLElement;
        key = target.getAttribute('data-key') || '';
    } else {
        return;
    }

    const audio = document.querySelector(`audio[data-key="${key}"]`) as HTMLAudioElement;
    const button = document.querySelector(`button[data-key="${key}"]`) as HTMLButtonElement;

    if (!audio || !button) return;

    audio.currentTime = 0;
    audio.play();

    button.classList.add('playing');
}


// Función para detener la animación al finalizar el sonido
function removeTransition(event: Event) {
    if (event instanceof TransitionEvent) {
        if (event.propertyName !== 'transform') return;
        const target = event.target as HTMLElement;
        target.classList.remove('playing');
    }
}

const buttons = document.querySelectorAll('.instrument-container button');
buttons.forEach(button => {
    button.addEventListener('click', playSound);
    button.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', (event: KeyboardEvent) => playSound(event));
