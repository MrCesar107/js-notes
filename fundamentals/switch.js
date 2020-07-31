// Clase 12 - Switch

// Esta es la ultima clase de estructuras de control que veremos en JS.
// En ocasiones, tenemos la necesidad de programar varios casos de uso para
// el flujo de nuestras aplicaciones.

// Una forma de resolver esta necesidad, seria usando varias condicionales
// if - else que determinen el flujo para varios casos de uso. Sin embargo,
// existe una forma mas 'elegante' en varios lenguajes de programacion
// (JavaScript incluido), la estructura de control switch.

let persona = {
  nombre: 'Susana',
  apellido: 'Rodriguez',
  edad: 53,
  peso: 70,
};

let { nombre, apellido, edad } = persona;   // ES6 Destructuring

// Definimos la estructura switch

const identificarPersonas = (name) => {
  switch (name) {  // Dentro de los parentesis, colocamos la variable que sera evaluada.
    case 'Susana':
      console.log('Bienvenida Susansa');
      break;
    default:
      console.log('No se quien eres');
      break;
  }
}

// Dentro del 'switch', vamos probando distintos casos que se iran declarando
// usando la palabra reservada 'case'. Dentro de cada caso podemos escribir
// nuestra logica que sera realizada en caso de que la condicion inicial sea
// cumplida.

// En este caso, evaluamos la variable 'nombre' de nuestro objeto 'persona'.
// Usamos un switch para definir dos casos (case). El primer caso dice si el
// valor de la variable es igual a 'Susana', entonces imprima un saludo.

// El segundo caso ('default') solo sera ejecutado en caso de que no se cumplan
// ninguna de las condiciones anteriores del switch.

identificarPersonas('Rogelio');
