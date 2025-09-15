let input = document.querySelector('input[name=tarefa]');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');
let card = document.querySelector('.card');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas() {
    lista.innerHTML = '';

    for (tarefa of tarefas) {
        let itemLista = document.createElement('li');
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');
        itemLista.onclick = function () {
            deletarTarefa(this);
        }

        let itemTexto = document.createTextNode(tarefa);
        itemLista.appendChild(itemTexto);
        lista.appendChild(itemLista);
    }
}


