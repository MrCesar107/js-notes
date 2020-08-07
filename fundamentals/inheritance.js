// Clase 15 - Herencia prototipal

// Como dijimos anteriormente, JavaScript no cuenta con clases y objetos como tal por lo que el
// concepto de herencia no existe aqui. Sin embargo, este concepto es sustituido por otro denominado
// herencia prototipal.

// Inheritance old form
function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function() {}
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn;
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre}`);
}

Persona.prototype.soyAlto = function () {
  return this.altura >= 1.80;
}

function Desarrollador(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// Hacemos nuestra herencia entre prototipos
heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador :)`);
}

cesar = new Persona('Cesar', 'Rodriguez', 1.83);
cesar.saludar();
irvin = new Desarrollador('Irvin', 'Castellanos', 1.75);
irvin.saludar();
console.log(irvin.soyAlto());
