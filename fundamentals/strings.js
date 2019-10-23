// Clase 02 - Strings

// Los strings son cadenas de texto con una
// longitud determinada por el numero de
// caracteres.

// Podemos guardar una cadena en una variable
var nombre = 'Santiago', apellido = 'Molina'
// De esta forma podemos declarar multiples variables
// en una sola linea

// El contenido de las cadenas de texto va encerrado por
// comillas simples ('') o por comillas dobles (""). Por
// ahora, el uso de las comillas sera indistinto para nosotros
// pero en proximas clases veremos cuando hay que usar una u otra.

// ** -- Nota -- **
// Existen "strings especiales" con los que podemos no solo
// guardar cadenas de caracteres sino tambien agregarles valores
// previamente definidos en variables.

// JavaScript nos facilita funciones para los strings con los que
// podemos aprovechar mejor estos tipos de datos para nuestra
// conveniencia.

// Convertir una cadena a mayusculas
var nombreEnMayusculas = nombre.toUpperCase()
console.log(nombreEnMayusculas)

// Convertir una cadena a minusculas
var apellidoEnMinusculas = apellido.toLowerCase()
console.log(apellidoEnMinusculas)

// Las cadenas pueden ser tratadas como arreglos (veremos
// este tema mas adelante).
// charAt es una funcion que acepta como parametro la posicion
// que queremos obtener en el string.

// Obtener el primer caracter de una cadena
var primeraLetraNombre = nombre.charAt(0)
console.log(primeraLetraNombre)

// Obtener el tamaño del string
var cantidadLetrasNombre = nombre.length
console.log(cantidadLetrasNombre)

// Concatenar dos cadenas
var nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

// Interpolacion de texto
nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)
// La interpolacion de texto hace exactamente lo
// mismo que la concatenacion de cadenas, solo
// que esta forma es mucho mas elegante y facil
// de entender.
// Se recomienda el uso de esta forma sobre la primera.

// Substrings
// Los substrings son strings mas pequeños obtenidos de
// un string mas grande

// La funcion substr acepta dos parametros.
// El primero es la posicion donde queremos que empiece,
// y el segundo es el numero de caracteres que queremos
// obtener.
var str = nombre.substr(1, 2)
console.log(str)
