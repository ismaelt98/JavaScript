/*1. A partir de la pizza sustituías todos los elemento del array por
cervezas: 🍔 🥙 🍣🍕🍜 🍱 🍙🍘🥝*/

const comidas = ["🍔", "🥙", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥝"];
const indicePizza = comidas.indexOf("🍜");
const resultado = comidas.map((comida, indice) => {
  if (indice < indicePizza) {
    return comida;
  } else {
    return "🍺";
  }
});

console.log(resultado);

/*2. Encontrar si existe un elemento en el array que sea una piña. 🍕🍕🍍🍕🍕*/

const array = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const existePina = array.includes("🍍");

if (existePina) {
  console.log("El array contiene una piña (🍍).");
} else {
  console.log("El array no contiene una piña (🍍).");
}

//Otro ejemplo con find

const cartas = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const existePina = cartas.find(elemento => elemento === "🍍");

if (existePina) {
  console.log("El array contiene una piña (🍍).");
} else {
  console.log("El array no contiene una piña (🍍).");
}


/*3. Quita la piña del siguiente array.🍕🍕🍍🍕🍕*/

const array = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const arraySinPina = array.filter(elemento => elemento !== "🍍");

console.log(arraySinPina); 

/*4. A partir del siguiente array🍓🍋🍓🍋🍓
convierte todas las fresas en 🍄*/

const frutas = ["🍓", "🍋", "🍓", "🍋", "🍓"];
const frutasConHongos = frutas.map(fruta => fruta === "🍓" ? "🍄" : fruta);

console.log(frutasConHongos);


/*5. Añade el siguiente icono 😍 inmediatamente después del cada 🌶
en el siguiente array: 🌶", "🥛", "🌶", "🥛", "🌶", "🥛*/

const arrayOriginal = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
const arrayModificado = arrayOriginal.map((item) => (item === "🌶" ? `${item} 😍` : item));

console.log(arrayModificado.join(" "));

/*6. Añade una 🃏 cartas comodín entre medio de dos cartas .Por
ejemplo:🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴*/

const cartas = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
const cartaComodin = "🃏";

for (let i = 0; i < cartas.length - 1; i++) {
  if (cartas[i] === "🎴" && cartas[i + 1] === "🎴") {
    cartas.splice(i + 1, 0, cartaComodin);
    i++; 
  }
}
console.log(cartas.join("")); 


