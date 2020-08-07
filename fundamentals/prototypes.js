// Clase 14 - Prototipos

// En JS, a diferencia de otros lenguajes de programacion, no existen los objetos como tal. Aunque
// en nuevas versiones se implementaron el uso de 'clases', estas clases no generan objetos sino que
// generan prototipos.

function Persona(nombre, apellido, altura) {
  // Estas dos lineas de codigo, se asemejan a lo que en otros lenguajes de programacion llaman
  // un constructor
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

// Al modificar un prototipo en JS, modificamos tambien su comportamiento. A continuacion definimos
// dos nuevas funciones para nuestro objeto 'Persona', al modificar su prototipo.
Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre}`);
}

Persona.prototype.soyAlto = function () {
  return this.altura >= 1.8;
}

let cesar = new Persona('Cesar', 'Rodriguez', 1.84);

cesar.saludar();
console.log(cesar.soyAlto());

// Notas: En este ejemplo, usamos funciones anonimas en vez de arrow functions, la razon es la
// siguiente. Una de las diferencias mas grandes que tienen las funciones y las arrow funcions,
// es que estas ultimas cambian el contexto del objeto this. Cuando se crea un prototipo en JS,
// se crea un objeto (estructura) con las caracteristicas del prototipo, ese objeto es guardado en
// el espacio de memoria al que apunta 'this'. Las arrow funcions lo que hacen es que en vez de usar
// el contexto del prototipo, usan el contexto global de JS. Por esa razon, cuando se manipulan
// los prototipos, es recomendable usar funciones anonimas en lugar de arrow functions.
