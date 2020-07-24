// Clase 07 - Condicionales

// A partir de esta clase, iremos viendo las distintas estructuras de control que extisten en el
// lenguaje de programacion JavaScript

let persona = {
  nombre: 'Cesar',
  apellido: 'Rodrigez',
  edad: 22,
  ingeniero: true,
  cocinero: false,
  musico: false,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero)  // Condicional
    console.log('Ingeniero');

  if (persona.cocinero)
    console.log('Cocinero');

  if (persona.musico)
    console.log('Musico');
}

function esMayorDeEdad(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.edad >= 18)
    console.log('Es mayor de edad');
  else
    console.log('Es menor de edad');
}

// En la funcion esMayorDeEdad, se tiene una estructura condicional de 'dos' casos. Esta estructura
// esta compuesta por las palabras reservadas 'if' y 'else', y se lee de la siguiente forma. Si
// (if) la edad de la persona es mayor o igual (>=, para mas informacion ver la clase de operadores)
// que 18 entonces imprime 'Es mayor de edad'. En caso contrario (else), imprime 'Es menor de edad'.

imprimirProfesiones(persona);
esMayorDeEdad(persona);
