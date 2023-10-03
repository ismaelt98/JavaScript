/*1. Crea una función pasa 3 números por parámetros súmalos y
devuelve el resultado mediante a return. Finalmente muéstralos
por pantalla*/

function sumarTresNumeros(num1, num2, num3) {
    const resultado = num1 + num2 + num3;
    return resultado;
  }
    const suma = sumarTresNumeros(5, 10, 15);
  
  console.log("La suma de los tres números es:", suma);
  
/*2. Crea una función y escribe tu nombre completo en 3 parámetros:
nombre, apellido1, apellido2 y concaténalos y finalmente
muéstralos por pantalla*/

function mostrarNombreCompleto(nombre, apellido1, apellido2) {
    const nombreCompleto = `${nombre} ${apellido1} ${apellido2}`;
    console.log(nombreCompleto);
  }
  
  mostrarNombreCompleto("TuNombre", "TuApellido1", "TuApellido2");
  

/*3. Crea una función que acepte dos números y devuelva el número
mayor*/

function numeroMayor(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  const mayor = numeroMayor(8, 15);
  
  console.log("El número mayor es:", mayor);
  