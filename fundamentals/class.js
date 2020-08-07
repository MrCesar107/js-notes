// Clase 16 - Clases

// A partir de ES6, JavaScript incorpora el concepto de clases de la programacion
// orientada a objetos. En realidad, JS genera prototipos a partir de las clases.

// Las clases en JS, no son mas que un tipo de azucar sintactico (syntax sugar),
// ya que es una nueva (y mejor) sintaxis para poder crear prototipos.

// Declaracion de una clase en ES6+
class Persona {
    // constructor en ES6+
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        return this.altura >= 1.80;
    }
}

let cesar = new Persona('Cesar', 'Rodriguez', 1.83);
cesar.saludar();

// Como podras observar, practicamente, hizimos exactamente lo mismo que la clase
// pasada. Creamos nuesto prototipo Persona (o clase), creamos un constructor
// con valores que pasamos por parametro y definicmos funciones para su
// comportamiento.
