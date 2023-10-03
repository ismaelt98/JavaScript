/*1. Crea una función en la que pasándole un string como parámetro
se substituyan las letras A por las O.*/

function substituirLetrasAporO(texto) {
    const textoModificado = texto.replace(/A/g, 'O');
    return textoModificado;
  }
  
  const textoOriginal = "Hola, Amigo. ¿Cómo estás?";
  const textoModificado = substituirLetrasAporO(textoOriginal);
  
  console.log(textoModificado);
  

/*2. Crea una función que compruebe si un string pasado como
parámetro empieza por ‘aca’ y llama dos veces a la función una con
academia y otra con escuela.*/

function comprobarInicioAca(texto) {
    if (texto.startsWith('aca')) {
      console.log(`El texto "${texto}" comienza con 'aca'.`);
    } else {
      console.log(`El texto "${texto}" no comienza con 'aca'.`);
    }
  }
  
  comprobarInicioAca('academia');
  comprobarInicioAca('escuela');
  

/*3. Crea una función que pasándole un Hola nos salude 3 veces
utilizando métodos de Strings.*/


function saludarTresVeces(saludo) {
    const saludoRepetido = saludo.repeat(3);
    console.log(saludoRepetido);
  }
  
  saludarTresVeces("Hola");
