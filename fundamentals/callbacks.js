// Clase 19 - Callbacks

// En JS, los callbacks son funciones que se usan como argumentos para otras
// funciones. Los callbacks se ejecutan despues dentro de la funcion externa
// para realizar alguna accion.

// NOTA: Para esta clase usaremos JQuery en lugar de vanilla JS, por lo que este
// script sera ejecutado en un navegador unsando un archivo 'index.html'

// Multiples requests usando JQuery
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const onPeopleResponse = (people) => {
    console.log(`Hola, yo soy ${people.name}`);
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    const opts = { crossDomain: true };
    $
      .get(url, opts, onPeopleResponse)
      .fail(() => console.log(`No se pudo obtener el personaje ${id}`));
}

for(var i = 1; i <= 82; i++) {
    obtenerPersonaje(i);
}

// En resumen, aqui estamos usando el metodo get de jQuery, que nos permite
// hacer request del tipo GET a una API remota. Esta funcion recive como
// parametros tres elemntos. El primero, la direccion del endpoint de la API,
// el segundo, un objecto con meta data para nuestro request, y por ultimo,
// un callback.

// Este callback se ejecuta hasta que finalize la peticion http. Esta funcion
// siempre recibe un objeto que obtiene al hacer el request al API. En este caso
// una vez obtenido nuestro objeto 'people/1', procedemos a imprimir en consola
// el attributo name de ese objeto en una frase custom, dando como resultado
// la frase 'Hola, yo soy Luke Skywalker' en este caso.

// Link de Star Wars API: https://swapi.dev/
