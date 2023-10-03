// Asociar las funciones a los clics en los botones de incremento
document.getElementById('comida-plus').addEventListener('click', function() {
    aumentarBarra('comida');
});

document.getElementById('dormir-plus').addEventListener('click', function() {
    aumentarBarra('dormir');
});

document.getElementById('jugar-plus').addEventListener('click', function() {
    aumentarBarra('jugar');
});

document.getElementById('luchar-plus').addEventListener('click', function() {
    aumentarBarra('luchar');
});

// Función para aumentar una barra al hacer clic en el botón "+"
function aumentarBarra(barra) {
    const barraElement = document.querySelector(`.${barra}`);
    const porcentajeElement = barraElement.querySelector('.barra-porcentaje');
    let porcentaje = parseFloat(porcentajeElement.textContent);
    if (porcentaje < 100) {
        porcentaje += 10;
        porcentajeElement.textContent = `${porcentaje}%`;
        const fill = barraElement.querySelector('.fill');
        fill.style.width = `${porcentaje}%`;
    }
}

// Actualizar las barras inicialmente
function actualizarBarras() {
    document.querySelectorAll('.barra').forEach(barraElement => {
        const porcentajeElement = barraElement.querySelector('.barra-porcentaje');
        let porcentaje = parseFloat(porcentajeElement.textContent);
        const fill = barraElement.querySelector('.fill');
        fill.style.width = `${porcentaje}%`;
    });
}

// Actualizar las barras de estado gradualmente con el tiempo
setInterval(function() {
    disminuirBarra('comida');
    disminuirBarra('dormir');
    disminuirBarra('jugar');
    disminuirBarra('luchar');
}, 1000); // 1000 milisegundos = 1 segundo

// Función para calcular el promedio de porcentajes de las barras
function calcularPromedioPorcentajes() {
    const barras = document.querySelectorAll('.barra:not(.vida)');
    let sumaPorcentaje = 0;

    barras.forEach(barraElement => {
        const porcentajeElement = barraElement.querySelector('.barra-porcentaje');
        sumaPorcentaje += parseFloat(porcentajeElement.textContent);
    });

    return sumaPorcentaje / barras.length;
}

// Función para actualizar la barra de vida y reflejar el promedio
function actualizarVidaYReflejarPromedio() {
    const vidaElement = document.querySelector('.barra.vida');
    const vidaPorcentajeElement = vidaElement.querySelector('.barra-porcentaje');

    const promedioPorcentajes = calcularPromedioPorcentajes();
    vidaPorcentajeElement.textContent = `${promedioPorcentajes.toFixed(2)}%`;

    const vidaFill = vidaElement.querySelector('.fill');
    vidaFill.style.width = `${promedioPorcentajes.toFixed(2)}%`;

    // Aplicar un color a la barra de vida en función del promedio
    if (promedioPorcentajes <= 25) {
        vidaElement.style.backgroundColor = '#FF5722'; // Rojo si es <= 25%
    } else if (promedioPorcentajes <= 50) {
        vidaElement.style.backgroundColor = '#FFC107'; // Amarillo si es <= 50%
    } else {
        vidaElement.style.backgroundColor = '#4CAF50'; // Verde en otros casos
    }
}

// Asociar las funciones a los clics en los botones de incremento
document.getElementById('comida-plus').addEventListener('click', function() {
    aumentarBarra('comida');
    actualizarVidaYReflejarPromedio();
});

document.getElementById('dormir-plus').addEventListener('click', function() {
    aumentarBarra('dormir');
    actualizarVidaYReflejarPromedio();
});

document.getElementById('jugar-plus').addEventListener('click', function() {
    aumentarBarra('jugar');
    actualizarVidaYReflejarPromedio();
});

document.getElementById('luchar-plus').addEventListener('click', function() {
    aumentarBarra('luchar');
    actualizarVidaYReflejarPromedio();
});

// Resto del código (disminuir barras con el tiempo, etc.) sigue igual



// Función para disminuir una barra con el tiempo
function disminuirBarra(barra) {
    const barraElement = document.querySelector(`.${barra}`);
    const porcentajeElement = barraElement.querySelector('.barra-porcentaje');
    let porcentaje = parseFloat(porcentajeElement.textContent);
    if (porcentaje > 0) {
        porcentaje -= 1;
        porcentajeElement.textContent = `${porcentaje}%`;
        const fill = barraElement.querySelector('.fill');
        fill.style.width = `${porcentaje}%`;
    }
}


// Actualizar las barras inicialmente
actualizarBarras();
