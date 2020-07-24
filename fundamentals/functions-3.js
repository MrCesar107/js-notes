// Clase 09 - Arrow functioons

// Ya hemos visto las funciones en JS y como trabajar con ellas, tambien vimos que estas pueden
// retornar valores especificos despues de procesar una entrada. En este ejemplo, veremos una nueva
// forma de declarar funciones que fue implementada con ES2015 (ES6).

// Asignar a una variable una funcion

const MAYORIA_DE_EDAD = 18;

let persona = {
  nombre: 'Roberto',
  apellido: 'Mendoza',
  edad: 15,
};

let persona2 = {
  nombre: 'Mauricio',
  apellido: 'Rodriguez',
  edad: 27,
};

// Arrow function
const esMayorDeEdad = edad => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona.edad))
    console.log(`${persona.nombre} es mayor de edad`);
  else
    console.log(`${persona.nombre} es menor de edad`);
}

imprimirSiEsMayorDeEdad(persona);
imprimirSiEsMayorDeEdad(persona2);
