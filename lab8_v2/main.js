const listaZadan = document.querySelector('.listaZad ol');
const zadForm = document.querySelector('.formZad form');

document.addEventListener('DOMContentLoaded', function(){
    przypDodZad();
    wysZadania();
});

function wysZadania() {
    tabZadania.forEach(function(tytul) {
        dodNoweZad(tytul);
    });
}

function dodNoweZad(tytul) {
    const liZad = document.createElement('li');
    liZad.classList.add('poj-zad');
    liZad.innerHTML = przygZadHTML (tytul);
    liZad.dataset.dataUtw = Date ();

    const wlaczWykBtn = liZad.querySelector('.btn-toggle');
    const usunBtn = liZad.querySelector('.btn-delete');

    wlaczWykBtn.addEventListener ('click', function() {
        przelZadWyk(this);
        // liZad.dataset.dataWyk = Date ();
    });

    usunBtn.addEventListener ('click', function() {
        usunZad(this);
    });
    
    listaZadan.appendChild(liZad);

};
//wyk/niewyk button
function przelZadWyk(but) {
    but.classList.toggle('btn-toggle-complete');

};
//usun button
function usunZad(but) {
    const zadDoUsun = but.closest('li');
    but.closest('ol').removeChild(zadDoUsun);

};

function przygZadHTML (tytul) {
    return '<div class="input-group">'+
            
        '<input type="text" class="form-control2" placeholder="Tytuł zadania..." value="' + tytul +'">'+
        '<span class="input-group-btn">'+
            '<button class="btn-toggle">wykonane/niewykonane</button>'+
        '</span>'+
        '<span class="input-group-btn">'+
            '<button class="btn-delete">Usuń</button>'+
        '</span>'+
    '</div>'
}

function przypDodZad () {
    zadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const tytul = this.querySelector('input').value;

        if (tytul) {
            dodNoweZad(tytul);
        }
    });   
}

const $search = document.querySelector('#search');

$search.addEventListener('input', function() {
    const val = this.value;
    const elems = listaZadan.querySelectorAll('.poj-zad');
    [].forEach.call(elems, function(el) {
        const text = el.querySelector('.form-control2').innerText;
        if (text.indexOf(val) !== -1) {
            //znaleziono text, pokaz
            el.style.setProperty('display', '');
        } else {
            el.style.setProperty('display', 'none');
        }
    });
});
    
// $btn.onclick = function () {
//     const $ParentElement = document.getElementById('lista');
//     const li2 = document.createElement('li');
//     $ParentElement.appendChild(li2);
//     const NewSpan = document.createElement('span');
//     let valToDo = document.getElementById('wykonaj').value;
//     const newTextSpan = document.createTextNode(valToDo);
//     li2.appendChild(NewSpan);
//     NewSpan.appendChild(newTextSpan);
//     li2.dataset.status = "nie wykonano";
//     li2.dataset.dataUtw = Date ();
//     li2.classList.add('todo-element');

   
//     //button wykonane
//     const btWyk = document.createElement("button");
//     li2.appendChild(btWyk);
//     const btWykText = document.createTextNode('Wykonane');
//     btWyk.appendChild(btWykText);
//     btWyk.setAttribute("class", "wyk");

//     btWyk.onclick = function wyk() {
//         li2.dataset.status = "wykonano";    
//         li2.dataset.dataWyk = Date ();
//         this.style.backgroundColor = "green";
//         // li2.setAttribute("class", "legWyk");
        
        
        
//     }


//     //usuń
//     const newButton = document.createElement('button');
//     li2.appendChild(newButton);
//     const newTextBuTT = document.createTextNode('usuń');
//     newButton.appendChild(newTextBuTT);
//     newButton.onclick = function () {
//         // $ParentElement.removeChild(li2);
//         usun($ParentElement, li2);
//     };
//     //edycja
//     NewSpan.contentEditable = true;

// }

const tabZadania = [
    'Zadanie 1',
    'Zadanie 2',
    'Zadanie 3'
]


// const $zad_todo = document.getElementById('zad_todo');
// $zad_todo.onclick = function () {

   
//     console.log('costam')

    
    
// }
// const span2 = document.getElementsByTagName('span');
// const $search = document.getElementById('search');

// $search.addEventListener('input', function() {
//     const val = this.value;
//     const elems = lista.querySelectorAll('.todo-element');
//     [].forEach.call(elems, function(span2) {
//         const text = span2.querySelector('.todo-element-text').innerText;
//         if (text.indexOf(val) !== -1) {
//             //znaleziono text, pokaz
//             span2.style.setProperty('display', '');
//         } else {
//             span2.style.setProperty('display', 'none');
//         }
//     });
// });

// const $search = document.getElementById('search');
// $search.focus = function () {

// }

// function ukryj(){
//     const elUkrywane = getElementsByClass("wyk");
//     for(i=0; i<elUkrywane.length; i++){
//       elUkrywane[i].style.display = "none";
//     }
//   }


// function usun(element1, element2) {
//     element1.removeChild(element2);
// }


// document.forms.form.onsubmit = function () {
//     console.log(this.text.value);
//     if (this.text.value) {
//         const li2 = document.createElement("li");
        
//         li2.innerHTML = this.text.value;
        
//         document.getElementById('lista').appendChild(li2);
//         li2.dataset.status = "nie wykonano";
//         li2.dataset.dataUtw = Date ();
//         //do edycji
//         li2.contentEditable = true;


//         //button wykonane
//         const btWyk = document.createElement("button");
//         li2.appendChild(btWyk);
//         const btWykText = document.createTextNode('Wykonane');
//         btWyk.appendChild(btWykText);
//         btWyk.setAttribute("class", "wyk");

//         btWyk.onclick = function wyk() {
//             li2.dataset.status = "wykonano";    
//             li2.dataset.dataWyk = Date ();
//             this.style.backgroundColor = "green";   
//         }


//         //button usuń
//         const bt = document.createElement("button");
//         li2.appendChild(bt);
//         const btText = document.createTextNode('usuń');
//         bt.appendChild(btText);
//         bt.setAttribute("class", "usun");

//         bt.onclick = function() { 
//             if (confirm ('Usunąć?')) {
//                 lista.removeChild(li2);
//             }
//         };
//         //czyszczenie pola onsubmit
//         // parent.form.text.value="";

//     return false
//     }

// }









//111
// let $test = document.querySelector('[data-test-array]');

// $test = $test.getAttribute('data-test-array');

// $test = $test.split(',');
// const test = document.getElementById('test');

// test.textContent = $test;

// console.log(test);


//2222
// const $btn = document.getElementById("test");

// $btn.onclick = function () {
//     const $test = document.querySelector ('[data-id')
//  if (this.id === $test.getAttribute('data-id')) {
//      $test.classList.remove('hide')
//  }
// }