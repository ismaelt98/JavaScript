//1. Crea una función arrow function que retorne tu nombre y tus apellidos e imprímelos por pantalla desde fuera de la función
const obtenerNombreCompleto = () => {
    const nombre = "Ismael"; 
    const apellido = "Rodriguez"; 
    return `${nombre} ${apellido}`;
  }; 
  const nombreCompleto = obtenerNombreCompleto();
  console.log(nombreCompleto);

//2. Crea una función con nombre y sin return. Pásale un tipo de dato boolean y dentro de la función imprime el valor el valor que hemos pasado por los parámetros.
function imprimirBoolean(valor) {
    console.log(valor);
  }
  imprimirBoolean(true); 
  imprimirBoolean(false);

//3. Crea una función que reciba parámetros infinitos, haz la llamada con los valores 1,2,3,4,5 y muestra dichos mediante un forEach.

function mostrarValoresInfinitos(...valores) {
    valores.forEach((valor) => {
      console.log(valor);
    });
  }
  mostrarValoresInfinitos(1, 2, 3, 4, 5);
