const $field = document.getElementById('field');
const $btn1 = document.getElementById('btn1');
const $btn2 = document.getElementById('btn2');
const $btn3 = document.getElementById('btn3');
const $btn4 = document.getElementById('btn4');
const myArray = [1,2,3,15,40,55,300];
//zad1 dodanie na koniec tablicy liczby wpisanej w polu tekstowym 
//(jeśli nie wprowadzono prawidłowej wartości numerycznej, dodawana jest losowa wartość z przedziału 1-20)
$btn1.addEventListener('click', function (){
    const valueFromField = $field.value;
    updateMyArray(valueFromField);
});
console.log(myArray);
function updateMyArray (value) {
    const $result = document.getElementById('result'); 
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random()*20)+1;
    } 
    myArray.push(value);

    $result.textContent = myArray;
    showMessage(value, myArray.length)
}
function showMessage(value, index) {
    const $message = document.getElementById('message');
    const textMsg = `dodano wartość ${value} na pozycji ${index}.`
    $message.textContent = textMsg;

}
//zad 2 dodanie na początek tablicy wartości liczbowej (z pola lub losowej) 
$btn2.addEventListener('click', function (){
    const valueFromField = $field.value;
    updateMyArray2(valueFromField);
});

function updateMyArray2 (value) {
    const $result = document.getElementById('result'); 
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random()*20)+1;
    } 
    myArray.unshift(value);

    $result.textContent = myArray;
    showMessage2(value, 1)
}
function showMessage2(value, index) {
    const $message = document.getElementById('message');
    const textMsg = `dodano wartość ${value} na pozycji ${index}.`
    $message.textContent = textMsg;
}

//zad 3 usunięcie wartości z końca tablicy (i wstawienie jej do pola tekstowego)

$btn3.addEventListener('click', function (){
    const valueFromField = $field.value;
    updateMyArray3();
});

function updateMyArray3 () {
    const $result = document.getElementById('result'); 
    showMessage3()
    myArray.pop();

    $result.textContent = myArray;
    
}
function showMessage3() {
    const $message = document.getElementById('message');
    const textMsg = `usunięto wartość ${myArray[myArray.length-1]}.`
    $message.textContent = textMsg;

}

// zad. 4 usunięcie wartości z początku tablicy (i wpisanie jej do pola)

$btn4.addEventListener('click', function (){
    const valueFromField = $field.value;
    updateMyArray4();
});

function updateMyArray4 () {
    const $result = document.getElementById('result'); 
    showMessage4()
    myArray.shift();

    $result.textContent = myArray;
    
}
function showMessage4() {
    const $message = document.getElementById('message');
    const textMsg = `usunięto wartość ${myArray[0]}.`
    $message.textContent = textMsg;

}