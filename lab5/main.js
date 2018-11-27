const $field = document.getElementById('field');
const $btn1 = document.getElementById('btn1');
const $btn2 = document.getElementById('btn2');
const $btn3 = document.getElementById('btn3');
const $btn4 = document.getElementById('btn4');
const $btn5 = document.getElementById('btn5');
const $btn6 = document.getElementById('btn6');
const $btn7 = document.getElementById('btn7');
const $btn8 = document.getElementById('btn8');
const $btn9 = document.getElementById('btn9');
const $btn10 = document.getElementById('btn10');
const $btn11 = document.getElementById('btn11');
const $btn12 = document.getElementById('btn12');
const $btn13 = document.getElementById('btn13');
const $btn14 = document.getElementById('btn14');
const $btn15 = document.getElementById('btn15');
const $btn16 = document.getElementById('btn16');
const $btn17 = document.getElementById('btn17');
const $btn18 = document.getElementById('btn18');


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

// zad. 5 wstawienie wartości liczbowej (z pola lub losowej 1-20) w losowym miejscu tablicy

$btn5.addEventListener('click', function (){
    const valueFromField = $field.value;
    updateMyArray5(valueFromField);
});

function updateMyArray5 (value) {
    const $result = document.getElementById('result'); 
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random()*20)+1;
    }
    const los_arr = Math.floor(Math.random()*myArray.length); 
    myArray.splice(los_arr, 0, value);

    $result.textContent = myArray;
    showMessage5(value, los_arr)
}
function showMessage5(value, index) {
    const $message = document.getElementById('message');
    const textMsg = `dodano wartość ${value} na pozycji ${index}.`
    $message.textContent = textMsg;
}

// zad. 6 usunięcie wartości ze wskazanego lub losowego miejsca tablicy

$btn6.addEventListener('click', function (){
    const valueFromField = $field.value;
    updateMyArray6(valueFromField);
});

function updateMyArray6 (value) {
    const $result = document.getElementById('result'); 
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random()*myArray.length);
    }

    myArray.splice(value, 1);

    $result.textContent = myArray;
    showMessage6(value)
}
function showMessage6(value) {
    const $message = document.getElementById('message');
    const textMsg = `usunięto wartość na pozycji ${value}.`
    $message.textContent = textMsg;
}

// zad. 7 odwrócenie kolejności elementów tablicy

$btn7.addEventListener('click', function (){
    updateMyArray7();
});

function updateMyArray7 () {
    const $result = document.getElementById('result'); 
    myArray.reverse();
    $result.textContent = myArray;
    showMessage7()
}
function showMessage7() {
    const $message = document.getElementById('message');
    const textMsg = `Odwrócona tablica.`
    $message.textContent = textMsg;
}

// zad. 8 posortowanie tablicy (rosnąco)

$btn8.addEventListener('click', function (){
    updateMyArray8();
});

function updateMyArray8 () {
    const $result = document.getElementById('result'); 
    myArray.sort((a, b) => a - b);
    $result.textContent = myArray;
    showMessage8()
}
function showMessage8() {
    const $message = document.getElementById('message');
    const textMsg = `Posortowana tablica rosnąco.`
    $message.textContent = textMsg;
}

//  zad. 9 usunięcie z tablicy wartości podzielnych przez liczbę wpisaną w polu 
// (lub parzystych, jeśli wartość nie jest liczbą) - wykorzystaj metodę filter


// Zad. 10 usunięcie z tablicy wartości niepodzielnych przez liczbę wpisaną w polu 
// (lub nieparzystych, jeśli wartość nie jest liczbą) - wykorzystaj metodę filter

// Zad.11 znalezienie wartości maksymalnej (wykorzystaj metodę reduce) 
// - wynik wstaw do pola tekstowego

$btn11.addEventListener('click', function (){
    updateMyArray11();
});

function updateMyArray11 () {
    const $result = document.getElementById('result'); 
    let maxVal = myArray.reduce(max);
    $result.textContent = maxVal;
    showMessage11()
}
function showMessage11() {
    const $message = document.getElementById('message');
    const textMsg = `to wartość maksymalna.`
    $message.textContent = textMsg;
}

function max(last, curr) {
        if (last>curr) {
            return last;
        }
        return curr;
        }


// Zad. 12 -znalezienie wartości minimalnej (wykorzystaj metodę reduce) 
// - wynik wstaw do pola tekstowego

$btn12.addEventListener('click', function (){
    updateMyArray12();
});

function updateMyArray12 () {
    const $result = document.getElementById('result'); 
    let minVal = myArray.reduce(min);
    $result.textContent = minVal;
    showMessage12()
}
function showMessage12() {
    const $message = document.getElementById('message');
    const textMsg = `to wartość minimalna.`
    $message.textContent = textMsg;
}

function min(last, curr) {
        if (last<curr) {
            return last;
        }
        return curr;
        }

// zad. 13 - policz sumę wartości (wykorzystaj metodę reduce) 
// - wynik wstaw do pola tekstowego

$btn13.addEventListener('click', function (){
    updateMyArray13();
});

function updateMyArray13 () {
    const $result = document.getElementById('result'); 
    let sumArr = myArray.reduce(suma);
    $result.textContent = sumArr;
    showMessage13()
}
function showMessage13() {
    const $message = document.getElementById('message');
    const textMsg = `to suma wartości tablicy.`
    $message.textContent = textMsg;
}

function suma(last, curr) {

        return last + curr;

        }

// zad. 14 - każdą wartość w tablicy pomnóż przez wartość wpisaną w polu tekstowym 
// (lub 2, jeśli nie wprowadzono liczby) - wykorzystaj metodę map

$btn14.addEventListener('click', function (){
    let val = $field.value;
    updateMyArray14(val);
    console.log("pomnożono przez " + val)
});

function updateMyArray14 (value) {
    const $result = document.getElementById('result'); 
    let myArrayX = myArray.map(pomnoz);
    $result.textContent = myArrayX;
    
}

function pomnoz (value) {
    let val = $field.value;
    val = parseFloat(val);
    if (isNaN(val)) {
        return 2 * value;
    }
    return val * value;
    
}


//zad. 15 - to samo co wyżej tylko dzielenie

$btn15.addEventListener('click', function (){
    let val = $field.value;
    updateMyArray15(val);
    console.log("podzielono przez " + val)
});

function updateMyArray15 (value) {
    const $result = document.getElementById('result'); 
    let myArrayX = myArray.map(podziel);
    $result.textContent = myArrayX;
    
}

function podziel (value) {
    let val = $field.value;
    val = parseFloat(val);
    if (isNaN(val)) {
        return value/2;
    }
    return value/val;
    
}


//zad. 16 - dodawaniem (dodaj 1 jeśli w polu tekstowym nie wprowadzono liczby)

$btn16.addEventListener('click', function (){
    let val = $field.value;
    updateMyArray16(val);
    console.log("dodano " + val)
});

function updateMyArray16 (value) {
    const $result = document.getElementById('result'); 
    let myArrayX = myArray.map(dodaj);
    $result.textContent = myArrayX;
    
}

function dodaj (value) {
    let val = $field.value;
    val = parseFloat(val);
    if (isNaN(val)) {
        return value + 1;
    }
    return value + val;
    
}

// zad.17 - odejmowaniem

$btn17.addEventListener('click', function (){
    let val = $field.value;
    updateMyArray17(val);
    console.log("odjęto " + val)
});

function updateMyArray17 (value) {
    const $result = document.getElementById('result'); 
    let myArrayX = myArray.map(odejmij);
    $result.textContent = myArrayX;
    
}

function odejmij (value) {
    let val = $field.value;
    val = parseFloat(val);
    if (isNaN(val)) {
        return value - 1;
    }
    return value - val;
}

// zad. 18 - zaokrąglij wszystkie wartości do najbliższej wartości całkowitej (wykorzystaj metodę map)

$btn18.addEventListener('click', function (){
    let val = $field.value;
    updateMyArray18(val);
});

function updateMyArray18 (value) {
    const $result = document.getElementById('result'); 
    let myArrayX = myArray.map(round);
    $result.textContent = myArrayX;
    
}

function round (x) {
    return Math.round(x);
}