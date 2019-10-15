// Clase 01 - Variables

// Para declarar una variable en JS, se utiliza
// la siguiente notacion.

var name = 'Homero'

// En JS no se necesita terminar las lineas con ";",
// aunque existen algunos casos donde si es necesario
// usuarlo.

//Para imprimir en consola siempre se utiliza la instruccion
console.log("Hola mundo en JS")

// Para imprimir un string concatenado con una variable
// se escribe lo siguiente:

console.log("Hola " + name)

// Esto imprime lo siguiente: ``Hola Homero``.
// Con esta notacion podemos concatenar las variables
// que queramos en un solo log.

// JS es un lenguaje debilmente tipado, por lo que
// podemos definir y 'redefinir' el tipo de una variable

var weight = 75   // Esta variable es numerica
console.log(weight)
weight =  "75 kg" // Redefinimos la variable como string
console.log(weight)

// ** -- NOTA -- **
// Las variables no pueden cambiar su tipo primitivo
// cuando el programa esta en ejecucion.

// JS puede trabajar con los siguientes tipos de datos
// primitivos

var number = 10             // Tipo de dato numerico entero, flotante, etc.
var string = "Hola"         // Tipo de dato String
var boolean = true          // Tipo de dato booleano
var empty = null            // Tipo de dato nulo o vacio
var symbol = Symbol('a')    // Tipo de dato simbolo (un unico valor que no es
                            // igual a otro valor)

// ** -- Alerta de spoiler -- **
// En una clase futura, veremos como declarar variables
// con `let` y cual es su diferencia con respecto a var.

