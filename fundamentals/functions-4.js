// Clase 18 - Funciones como parametros

// En JS, por defecto, los parametros de una funcion son nulos, pero podemos
// asignarles cualquier tipo de dato (numeros, strings, booleans, etc.).

// Ademas de los tipos de datos primitivos del lenguaje, las funciones en
//JavaScript pueden aceptar otras funciones como parametros.

class Persona {
    constructor(nombre, apellido, esDev) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.esDev = esDev;
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre}`);

        if (fn) {
            fn(this.nombre, this.apellido, this.esDev);
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, esDev) {
        super(nombre, apellido, esDev);
    }

    saludar(fn) {
        let { nombre, apellido, esDev } = this;  // ES6 Destructuring
        console.log(`Hola, mi nombre es ${nombre}, y soy desarrollador`);

        if (fn) {
            fn(nombre, apellido, esDev);
        }
    }
}

// Funcion que pasaremos como parametro a nuestros prototipos
const responderSaludo = (nombre, apellido, esDev) => {
    if (esDev) {
        console.log(`Hola ${nombre} ${apellido}`);
        console.log('No sabia que eras un desarrollador');
    } else
        console.log(`Hola ${nombre} ${apellido}`);

}

let cesar = new Desarrollador('Cesar', 'Rodriguez', true);
let armando = new Persona('Armando', 'Hernandez', false);
cesar.saludar(responderSaludo);
armando.saludar(responderSaludo);

// Notas: En la mayoria de los lenguajes de programacion (JS no es la exepcion),
// los valores como false, 0, null, "", undefines, etc, son denominados valores
// falsy debido a que el lenguaje de programacion los va a tomar siempre como
// falso cuando son evaluados en una condicion logica. Los demas valores
// posibles en el lenguaje, son valores truthy ya que estos siempre los va a
// tomar como verdadero el lenguaje.
// https://developer.mozilla.org/es/docs/Glossary/Truthy
