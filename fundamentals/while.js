// Clase 11 - Ciclo while

// Igual que en el ciclo for, muchos lenguajes de programacion cuentan con varias estructuras de
// flujo que nos permiten ejecutar bloques de codigo en ciclos controlados por el programador.
// El ciclo while es uno de ellos, en esta clase veremos su estructura y su funcionamiento.

const INCREMENTO_PESO =  0.3;
const DIAS_DEL_ANO = 365;

let persona = {
  nombre: 'Alexander',
  apellido: 'Fletcher',
  edad: 55,
  peso: 85
};


const aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO;
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = persona.peso - 3;

var dias = 0;   // Esta variable va a ser accedida por cualquier parte del programa, por eso el var.

// La estructura de un ciclo while en JS es la siguiente. Para invocar este ciclo, debemos llamarlo
// utilizando la palabra reservada 'while'. Despues, en parentesis, colocamos una sentencia logica
// (una condicion) que usaremos para que el bloque de codigo dentro de las llaves ('{ }') sea
// ejecutado mientras la condicion sea verdadera.

// Si la condicion llega a ser falsa, el ciclo while se interrumpira y el programa seguira su flujo
// normal. A continuacion un ejemplo:

console.log(`${persona.nombre} pesa ${persona.peso}`);

while (persona.peso > META) {
  if (comeMucho())
    aumentarPeso(persona);

  if (realizaDeporte())
    adelgazar(persona);

  dias++;
}

console.log(`Pasaron ${dias} dias y ${persona.nombre} pesa ${persona.peso}`);
