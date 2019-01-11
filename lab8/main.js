const addTaskSec = document.querySelector('.addTaskSection');
const listTodo = document.querySelector('.taskListSection ol');

const $btnAdd = document.getElementById('add-btn');

$btnAdd.onclick = function() {
    let valToDo = document.getElementById('add-input').value;
    //wykona się po wpisaniu wartości w input
    if (valToDo) {
        const liZad = document.createElement('li');
        listTodo.appendChild(liZad);
        const NewSpan = document.createElement('span');
        
        const newTextSpan = document.createTextNode(valToDo);
        liZad.appendChild(NewSpan);
        NewSpan.appendChild(newTextSpan);
        liZad.dataset.status = "nie wykonano";
        liZad.dataset.dataUtw = Date ();
        liZad.classList.add('todo-element');
        liZad.classList.add('todo-not-complete');
        NewSpan.classList.add('todo-element-text');
    
        //button wykonane
        const btWyk = document.createElement("button");
        liZad.appendChild(btWyk);
        const btWykText = document.createTextNode('Wykonane');
        btWyk.appendChild(btWykText);
        btWyk.setAttribute("class", "wyk");

        btWyk.onclick = function wyk() {
            liZad.dataset.status = "wykonano";
            liZad.classList.add('todo-complete');
            liZad.classList.remove('todo-not-complete');    
            liZad.dataset.dataWyk = Date ();
            this.style.backgroundColor = "green"; 
            }

        //usuń
        const newButton = document.createElement('button');
        liZad.appendChild(newButton);
        const newTextBuTT = document.createTextNode('usuń');
        newButton.appendChild(newTextBuTT);
        newButton.onclick = function () {
            deleteFunc(listTodo, liZad);
            };
        //edycja
        NewSpan.contentEditable = true;
    }
    else {alert('Uzupelnij puste pole!!')}
    
    

};
//funkcja usuń element
function deleteFunc(element1, element2) {
    element1.removeChild(element2);
}
//wyszukiwanie po napisie
const $search = document.querySelector('#search');

$search.addEventListener('input', function() {
    const val = this.value;
    const elems = listTodo.querySelectorAll('.todo-element');
    [].forEach.call(elems, function(el) {
        const text = el.querySelector('.todo-element-text').innerText;
        if (text.indexOf(val) !== -1) {
            //znaleziono text, pokaz
            el.style.setProperty('display', '');
        } else {
            el.style.setProperty('display', 'none');
        }
    });
});
//zadania do zrobienia filter
const $zadTodo = document.getElementById('zad_todo');

$zadTodo.addEventListener('click', function() {
    let elemsComplete = listTodo.querySelectorAll('.todo-complete');
    [].forEach.call(elemsComplete, function(el) {
        el.classList.toggle('hide');
    });
});

//zadania wykonane filter
const $zadDo = document.getElementById('zad_do');

$zadDo.addEventListener('click', function() {
    this.style.backgroundColor = "green";
    let elemsNotComplete = listTodo.querySelectorAll('.todo-not-complete');
    [].forEach.call(elemsNotComplete, function(el) {
        el.classList.toggle('hide');
    });
});
