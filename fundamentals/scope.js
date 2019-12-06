// Clase 05 - Alcance de una funcion (scope)

// Como vimos en anteriores clase, en JS podemos definir variables cuyos
// valores pueden ser utilizados en cualquier parte de nuestro programa.

let nombre = 'Juan Carlos'

// El valor de esta variable lo podemos utilizar en cualquier parte de nuestra
// aplicacion

console.log(nombre)

// Incluso lo podemos usar dentro de una funcion
function imprimirNombre() {
  console.log(nombre);
}

// A esto se le conoce como una variable global, o una variable con alcance o
// scope global, ya que su valor puede ser utilizado en cualquier parte sin
// ninguna restriccion.

// Existe otro tipo de alcance que es lo opuesto al scope global, el scope
// local.

// Si dentro de una funcion declaramos una variable, su valor puede ser usado
// unicamente dentro de dicha funcion. Si se intenta acceder desde otra parte
// JS nos regregrara un error.

function imprimirNombreYEdad() {
  let edad = 21

  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad()
console.log(edad) // Nos dara error

// Reto: Crea una funcion y ejecuta una funcion que imprima el valor de una
// variable creada en la segunda funcion e intenta imprimir el mismo valor
// en la primera funcion.
