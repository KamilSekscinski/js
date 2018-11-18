
//1.do każdego elementu dodaj identyfikator, 
//identyczny jak nazwa miesiąca; sprawdź w przeglądarce czy identyfikator został ustawiony
window.onload = function () {

let liEl = document.getElementsByTagName("li");
console.log(liEl);

for (let i=0; i<liEl.length; i++) {
    
    const textFromLi = liEl[i].textContent;
    console.log(textFromLi);

    liEl[i].setAttribute("id",textFromLi);
  
}

}





// const $field = document.getElementById('field');
// const $btn1 = document.getElementById('btn1');
// const $btn2 = document.getElementById('btn2');
// const $btn3 = document.getElementById('btn3');
// const $btn4 = document.getElementById('btn4');
// const myArray = [1,2,3,15,40,55,300];
// //zad1 dodanie na koniec tablicy liczby wpisanej w polu tekstowym 
// //(jeśli nie wprowadzono prawidłowej wartości numerycznej, dodawana jest losowa wartość z przedziału 1-20)
// $btn1.addEventListener('click', function (){
//     const valueFromField = $field.value;
//     updateMyArray(valueFromField);
// });
// console.log(myArray);
// function updateMyArray (value) {
//     const $result = document.getElementById('result'); 
//     value = parseFloat(value);

//     if (isNaN(value)) {
//         value = Math.floor(Math.random()*20)+1;
//     } 
//     myArray.push(value);

//     $result.textContent = myArray;
//     showMessage(value, myArray.length)
// }
// function showMessage(value, index) {
//     const $message = document.getElementById('message');
//     const textMsg = `dodano wartość ${value} na pozycji ${index}.`
//     $message.textContent = textMsg;

// }

