// Clase 03 - Numeros

// JS nos permite trabajar con tipos de datos
// numericos.

// Nosotros podemos usar varios tipos numericos,
// algunos son los siguientes:

// Enteros                      {1, 2, 3, 4, 5, 6}
// Flotantes o deciamles        {1.0, 1.1, 1.2, 1.3}
// Positivos y negativos        {1, -2, 3, -4, 5, -6}

// Igual que los strings podemos guardar datos numericos
// en variables

// Incrementar en uno
var edad = 21
console.log(edad += 1)

// Decremento
var peso = 75
console.log(peso -= 2)

// En JS podemos realizar operaciones aritmeticas
// entre nuestras variables numericas

// Suma
var caloriasComida = 10
console.log(peso + caloriasComida)

// Resta
var caloriasDeporte = 5
console.log(peso - caloriasDeporte)

// Operaciones con decimales

// Producto
var precioVino = 300.3
var total = precioVino * 3
console.log(total)

// Division
var amigos = 6
var totalPizza = 240
var totalPersona = totalPizza / amigos
console.log(totalPersona)

// Al realizar operaciones con numeros decimales
// JS toma en cuenta todos los decimales que pueda
// tener el numero.

// Para redondear un numero a unos pocos decimales, por
// ejemplo 2, podemos usar una libreria que viene por
// defecto con el lenguaje. Math

// Redondear un flotante
var nuevoTotal = Math.round(precioVino * 100 * 3) / 100
console.log(nuevoTotal)

// Obtener mas decimales de un flotante
console.log(nuevoTotal.toFixed(2))

// Convertir un string a decimal
var strFloat
console.log(parseFloat(nuevoTotal))
