// Clase 04 - Funciones

// Las funciones en los lenguajes de programacion,
// son bloques de codigo que nos permiten
// realizar acciones requqeirdas por la logica
// de negocio de nuestras aplicaciones.

// Nota: Se considera buena practica el encapsular
// piezas de codigos que se repitan una y otra
// vez en nuestra logica de negocio.

// Para esta clase usaremos una funcion para poder imprimir la edad de una
// pesona

let nombre = 'Roberto', edad = 30
let trabajo = 'Carpintero'

// Sintaxis para declarar una funcion en JS
function imprimirEdad() {
  console.log(`${nombre} tiene ${edad} años`)
}

// Como se puede apreciar se utiliza la plabra reservada function
// para decirle al lenguaje que se va a crear una funcion.
// Despues se nombra a la funcion, en este caso el nombre es imprimirEdad.

// Pista: En muchos lenguajes, existen varias convenciones para nombrar a las
// variables y funciones. La mas aceptada en JS es la convencion camel case
// (joroba de camello), que dicta la siguiente forma:
//      nombreVariable = valor
// Siempre se debe separar las palabras del nombre usando una letra mayuscula.

// Las funciones pueden recibir parametros o argumentos dentro de parentesis,
// que nos ayudaran a utilizar variables ya definidas anteriormente.

// Crearemos una segunda funcion para ejemplificar com mayor detalle.
function imprimirEdadYTrabajo(n, e, t) {
  console.log(`Hola soy ${n}, tengo ${e} años y trabajo como ${t}`)
}

// Dentro de la funcion definida arriba, utilizamos los valores de los
// parametros n, e y t (nombre, edad y trabajo) para imprimir un mensaje en
// pantalla.
// Cabe resaltar que podemos asignar cualquier valor a los parametros de una
// funcion.

// PRECAUCION: En JS los valores de los parametros de forma indistinta.
// Por ejemplo, supongamos que escribimos una funcion que imprime el nombre
// un animal y su raza de la siguiente manera:
// Hola, soy un perro de raza dobberman

// Para hacerlo podriamos escribir una funcion llamada imprimirAnimalYRaza,
// cuyos parametros sean nombre y raza

function imprimirAnimalYRaza(nombre, raza) {
  console.log(`Hola, soy un ${nombre} de raza ${raza}.`)
}

// En este punto del codigo, la funcion imprime el mensaje exactamente como
// queremos siempre y cuando definamos los valores correctos de los parametros,
// al momento de ejecutar la funcion. Pero en caso de cambiar el orden, JS
// imprimira el mensaje de la siguiente forma:
// Hola, soy un dobberman de la raza perro
// Esto da como resultado un error logico, ya que la funcion no cumple con su
// cometido de forma correcta.

// Puedes probar cambiando los valores de los prarametros de las funciones
// invocadas mas adelante. Tambien te invito a que crees tus propias funciones
// y las pruebas mas abajo.

// Para ejecutar una funcion simplemente la invocamos de la siguiente forma
imprimirEdad()
imprimirEdadYTrabajo("Sandra", 45, "Repartidora de pizzas")
imprimirAnimalYRaza('perro', 'dalmata')