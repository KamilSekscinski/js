//Zad.1 W dokumencie znajdują się trzy "włączniki" (odpowiednio ostylowane elementy DIV). 
// Kliknięcie lewym przyciskiem myszy powoduje włączenie włącznika (zmienia się wtedy jego styl), 
// kolejne kliknięcie - jego wyłączenie. Poniżej wyświetlany jest komunikat informujący ile 
// włączyników jest w danej chwili włączonych (np. "wszystkie włączone", "dwa włączone", etc.).

const $div1 = document.getElementById('div1');
const $div2 = document.getElementById('div2');
const $div3 = document.getElementById('div3');

$div1.onclick = function() {
    this.classList.toggle('yellow');  
    
};
$div2.onclick = function() {
    this.classList.toggle('yellow');  
};
$div3.onclick = function() {
    this.classList.toggle('yellow');  
};
const $check = document.getElementById('check');

$check.onclick = function () {
    let buttonOn = document.querySelectorAll('.yellow');
    
    console.log(buttonOn.length);
}
