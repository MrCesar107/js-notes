// Clase 08 - Funciones que retornan valores

// Anteriormente habiamos visto que son las functiones en JS y como utilizarlas. En esta clase,
// estudiaremos un nuevo tipo de funciones similares a las normales con la diferencia de que estas
// retornaran algun valor dado despues de haber sido procesado

const MAYORIA_EDAD = 18; // Constante

let persona = {
  nombre: 'Edel',
  apellido: 'Lopez',
  edad: 24,
};

function esMayorDeEdad(edad) {
  if (edad >= MAYORIA_EDAD)
    return true
  else
    return false
}

let { nombre, edad } = persona;  // ES6 Destructuring object

console.log(`${nombre} es:`);

if (esMayorDeEdad(edad))
  console.log('Mayor de edad');
else
  console.log('Menor de edad');

// A diferencia de la clase pasada, en la funcion 'esMayorDeEdad' retornamos un booleano en lugar
// de imprimir por consola. Esto hace mucho sentido debido a que nos da mucho mas orden a nuestro
// codigo, ya que estamos separando la logica de determinar si una persona es mayor de edad con
// imprimir si es mayor de edad o no.
