// Clase 10 - Ciclo For

// En muchos lenguajes de programacion existe un control de flujo llamado ciclo for.
// El ciclo for nos permite repetir una o varias sentencias de codigo una determinada
// cantidad de veces a traves de una sentencia logica.

let persona = {
  nombre: 'Richard',
  apellido: 'Hendrix',
  edad: 36,
  peso: 75
};

const INCREMENTO_PESO = 0.2;

const aumentarPeso = (persona, incremento) => {
  persona.peso += incremento;
}

const disminuirPeso = (persona, decremento) => {
  persona.peso -= decremento;
}

console.log(`${persona.nombre} pesa ${persona.peso}kg`);

for (let i = 1; i <= 365; i++) {
  let random = Math.random();

  if (random < 0.25) {
    aumentarPeso(persona.peso, INCREMENTO_PESO);
  } else {
    disminuirPeso(persona.peso, INCREMENTO_PESO);
  }
}

console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(2)}kg`);
