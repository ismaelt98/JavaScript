/*1. Realiza un switch case que muestre el mes del año cuando lo
introduzcamos en formato numérico (1 al 12)*/

function mostrarMes(numeroMes) {
    switch (numeroMes) {
      case 1:
        console.log("Enero");
        break;
      case 2:
        console.log("Febrero");
        break;
      case 3:
        console.log("Marzo");
        break;
      case 4:
        console.log("Abril");
        break;
      case 5:
        console.log("Mayo");
        break;
      case 6:
        console.log("Junio");
        break;
      case 7:
        console.log("Julio");
        break;
      case 8:
        console.log("Agosto");
        break;
      case 9:
        console.log("Septiembre");
        break;
      case 10:
        console.log("Octubre");
        break;
      case 11:
        console.log("Noviembre");
        break;
      case 12:
        console.log("Diciembre");
        break;
      default:
        console.log("mes invalido, como tu ");
    }
  }
  mostrarMes(5);
  
/*2. Realiza un switch case en el que puedas introducir un número
del uno al cinco en un string y lo transforme a un número*/

function transformarNumero(textoNumero) {
    switch (textoNumero) {
      case "uno":
        return 1;
      case "dos":
        return 2;
      case "tres":
        return 3;
      case "cuatro":
        return 4;
      case "cinco":
        return 5;
      default:
        return NaN; 
    }
  }
  
  const numeroEnTexto = "tres"; 
  
  const numero = transformarNumero(numeroEnTexto);
  
  if (!isNaN(numero)) {
    console.log("Número transformado:", numero);
  } else {
    console.log("Número no válido");
  }
  