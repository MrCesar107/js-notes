// Clase 05 - Objetos

// Una forma muy sencilla que nos proporciona JavaScript para poder agrupar ciertos datos que estén
// relacionados de una forma es sencilla, es con la utilización de los 'objetos'.

// Los objetos son estructuras de datos que, como dijimos anteriormente, nos permite agrupar datos
// de una forma rápida para luego poder utilizarlos según nos convenga.

// Declaración de un objeto en JS
let persona = {
  nombre: 'Cesar',
  apellido: 'Rodriguez',
  fecha_nacimiento: 1998,
  altura: 1.87,
  peso: 107,
  nacionalidad: 'Mexicano',
};

let fecha_actual = 2020;

// En este ejemplo, estamos declarando una variable 'persona' y le asignamos un objeto con los datos
// de la persona 'Cesar'. Los elementos que están dentro de las llaves del objeto se conocen como
// atributos, y están definidos por la siguiente estructura:

// key: value

// La llave (o key) es el elemento que permite acceder al atributo, mientras que value el valor
// del mismo.

// Para acceder al attributo de un objeto, sería de la siguiente forma
console.log(persona.nombre);  // Imprimimos en consola el valor de la llave 'nombre' del objeto 'persona'

// Podemos tratar a los attributos de un objeto como si fueran variables, y al igual que estas,
// podemos hacer operaciones con ellos.

console.log(`Hola, mi nombre es ${persona.nombre} ${persona.apellido}.`);
console.log(`Tengo ${fecha_actual - persona.fecha_nacimiento} años.`);
console.log(`Mido ${persona.altura} metros y peso ${persona.peso} kg.`);
console.log(`Y soy ${persona.nacionalidad}`);

// -- Desestructuración de objetos --

// A partir de ES6, JavaScript implementó una nueva forma de acceder a los attributos de un objeto.
// Esta forma es conocida como destructuring o desestructuración de objetos y a continuación haremos
// algunos ejmeplos de esto.

let animal = {
  nombre: 'Perro',
  pelo: 'Blanco'
}

let { nombre, pelo } = animal;  // Destructuring del objeto animal.

console.log(`Tengo un ${nombre}, y tiene el pelo de color ${pelo}`);
