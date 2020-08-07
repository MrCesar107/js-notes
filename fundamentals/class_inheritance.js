// Clase 17 - Herencia entre clases

// Igual que con los prototipos, con las clases podemos 'heredar' los atributos
// de la clase padre a las clases hijas, asi como sus metodos.

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }

    soyAlto() {
        return this.altura >= 1.80;
    }
}

// Herencia en ES6+
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        // NOTA: En una clase que hereda de otra clase padre, no podemos usar
        // el objeto 'this' debido a que JS nos exige inicializar primero el
        // constructor de nuestra clase padre. Para eso, usamos el metodo super
        super(nombre, apellido, altura);
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador :)`);
    }
}

const personaEsAlta = (persona) => {
    console.log(`${persona.nombre} es alto?`);
    persona.soyAlto() ? console.log('Si') : console.log('No');
}

let cesar = new Persona('Cesar', 'Rodriguez', 1.83);
cesar.saludar();
personaEsAlta(cesar);

let irvin = new Desarrollador('Irvin', 'Castellanos', 1.78);
irvin.saludar();
personaEsAlta(irvin);
