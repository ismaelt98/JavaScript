// Define una interfaz para representar un elemento de tecla y sonido
interface KeySound {
    key: string;
    soundSrc: string;
  }
  
  // Mapea las teclas a sus respectivos archivos de sonido
  const keySounds: KeySound[] = [
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
function findKeySound(key: string): KeySound | undefined {
    for (const keySound of keySounds) {
      if (keySound.key === key) {
        return keySound;
      }
    }
    return undefined;
  }
  
  // Agrega un evento para detectar cuando se presiona una tecla
  window.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    const keySound = findKeySound(key);
    if (keySound) {
      e.preventDefault(); // Evita el comportamiento predeterminado de la tecla (por ejemplo, evitar que la página se desplace)
      const audioElement = document.querySelector(`audio[data-key="${key.charCodeAt(0)}"]`) as HTMLAudioElement;
      if (audioElement) {
        audioElement.currentTime = 0; // Reinicia la reproducción si ya está sonando
        audioElement.play();
      }
    }
  });


  const startButton = document.getElementById('button');
  if (startButton) {
      startButton.addEventListener('click', () => {
          const container = document.querySelector('.container') as HTMLElement;
          
          container.classList.remove('hidden'); // Muestra el contenido
      });
  }
  
  
  
  