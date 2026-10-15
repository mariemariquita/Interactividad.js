//Comentario
/*Comentario bloque */


/*Estructura de un programa:
- Datos de entrada
- Procesos
-Salida*/

//Mandar mensjaes a la consola
console.log('Hello, World!');

//Mandar mensajes en alerta al usuario
//alert ('Welcome to my website!');

//Las consatantes van en mayúsculas.

//document es un objeto que representa el documento HTML que se está mostrando en el navegador.
//const es una palabra reservada que se utiliza para declarar una constante, es decir, un valor que no puede cambiar durante la ejecución del programa.

const TOGGLE_BUTTON = document.getElementById('toggle-theme-btn');

//un listener define una escucha de eventos, y dispara una acción cuando ocurre ese evento.
//un listener se define de la siguiente manera:
//variable-elemento-addEventListener('evento', función);
TOGGLE_BUTTON.addEventListener('click', function(){
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
});

