// Define una interfaz para el objeto de respuesta de la API de Chuck Norris
interface ChuckNorrisJokeResponse {
    value: string;
}

// Función para obtener una nueva broma de Chuck Norris desde la API
async function fetchChuckNorrisJoke() {
    const chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';

    try {
        const response = await fetch(chuckNorrisApiUrl);
        if (!response.ok) {
            throw new Error('No se pudo obtener la broma de Chuck Norris');
        }
        const data: ChuckNorrisJokeResponse = await response.json();
        const jokeElement = document.getElementById('chuck-norris-joke');
        
        if (jokeElement) {
            jokeElement.textContent = data.value;
        } else {
            console.error('Elemento "chuck-norris-joke" no encontrado en el DOM');
        }
    } catch (error) {
        console.error('Error al obtener la broma de Chuck Norris:', error);
    }
}

// Manejar el evento de clic en el botón "Get New Joke"
const getNewJokeButton = document.getElementById('get-new-joke');
if (getNewJokeButton) {
    getNewJokeButton.addEventListener('click', fetchChuckNorrisJoke);
} else {
    console.error('Elemento "get-new-joke" no encontrado en el DOM');
}

// Cargar una broma inicial al cargar la página
fetchChuckNorrisJoke();
