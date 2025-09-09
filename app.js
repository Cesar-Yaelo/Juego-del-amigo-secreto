// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos= [];

function limpiarCaja() {
    //Con esta función limpiamos el cajetin donde se escribe el nombre
    document.querySelector('#amigo').value = '';
}

function lista(){
    let lista= document.querySelector('#listaAmigos');
    lista.innerHTML='';

    for(let i=0 ; i < amigos.length ; i++){
        let li= document.createElement("li");  // creamos el <li>
        li.textContent = amigos[i];            // le ponemos el nombre guardado en el array
        lista.appendChild(li);                 // lo metemos en el <ul>
    }
}

function agregarAmigo() {
    //Asignamos el valor del HTML a una variable en java, en este caso el nombre agregado
    let valor = document.querySelector('#amigo').value;

    //Con esta condición verificamos si el cajetin esta lleno o vacio
    if (valor === '') {
        alert('El campo está vacío');
    } else {
        amigos.push(valor); // Agregamos el valor del input (el nombre que agregamos) directamente
        console.log(amigos);
        limpiarCaja();
        lista(); 
    }
}

function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
    } else {
         // Generar índice aleatorio
        let indice = Math.floor(Math.random() * amigos.length);

        // Obtener el elemento HTML donde mostrar el resultado
        let resultado = document.querySelector('#resultado');

        // Mostrar el ganador
        let ganador = amigos[indice];
        resultado.innerHTML = "Tu amigo secreto es: " + ganador;
    }


}










