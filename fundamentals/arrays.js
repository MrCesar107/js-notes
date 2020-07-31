// Clase 13 - Arrays

// En JS, los arrays (o arreglos) son un tipo de estructuras de datos que nos permiten almacenar
// multiples valores dentro de un unico espacio de memoria.

// En palabras mas simples, un array nos sirve para almacenar varias variables (valores) dentro de
// una sola variable.

// Declaracion de varias variables
let perro = 'Perro';
let gato = 'Gato';
let oveja = 'Oveja';
let conejo = 'Conejo';

// Con un array, nosotros podemos almacenar todos los valores de estas variables previamente
// definidas sin tener que declarar varias variables.

let animales = ['Perro', 'Gato', 'Oveja', 'Conejo', 'Ardilla', 'Elefante', 'Orangutan'];

// Usar arrays es muy conveniente, ya que podemos ahorrar grandes cantidades de memoria y poder
// tener varios valores a la vez.

// Para acceder a un valor en especifico de un arreglo, usamos la siguiente sintaxis:
console.log(animales[0]);   // Accedemos al primer valor del arreglo que se encuentra el el indice 0
console.log(animales[2]);  // Accedemos al tercer valor del arreglo que se encuentra en el indice 2

// NOTA: Las personas solemos contar empezando con el numero 1, sin embargo, en la programacion esto
// no ocurre. Las computadoras SIMEPRE van a empezar a contar elementos desde el numero 0,
// por lo que, para acceder a un valor dentro de un arreglo, se debe seleccionar el indice
// n - 1 donde n es el valor al que quieres acceder (primero, segundo, etc.).

// ------- Funciones de los arreglos en JS -------

// Funcion filter

// En JS, nosotros podemos filtrar los elementos de nuestros arrays siguiendo una condicion logica
// que hayamos establecido

// Funcion que nos dice si un animal empieza con una vocal
const animalConVocal = (animal) => {
  if (animal.charAt(0) === 'A' || animal.charAt(0) === 'E' || animal.charAt(0) === 'I' ||
      animal.charAt(0) === 'O' || animal.charAt(0) === 'U')
    return true;
}

// Sintaxis de la funcion filter
let animalesConVocal = animales.filter(animalConVocal);

// La funcion filter, nos regresa un nuevo array creado a partir de nuestro array original
// (animales en este caso), con los elementos que fueron filtrados usando nuestra condicional

console.log(animales);    // Arreglo original
console.log(animalesConVocal);    // Arreglo con elementos filtrados

// Funcion map

// La funcion map en JavaScript, nos permite transformar un array que ya tengamos en uno nuevo,
// pero a diferencia de filter, este metodo va iterando (recorriendo) cada uno de los elementos del
// array y los va a cambiar por otros nuevos, agregandolos a un arreglo completamente nuevo.

let alturas = [1.78, 1.85, 1.54, 1.48, 1.63, 1.90];

const metrosACentimetros = (altura) => {
  return altura * 100;    // Convierte la altura de metros a centimetros
}

let alturasEnCentimetros = alturas.map(metrosACentimetros);

console.log(alturas);
console.log(alturasEnCentimetros);

// NOTA: Recordemos que map nos entrega un nuevo array construido a partir del array original, no lo
// modifica.
