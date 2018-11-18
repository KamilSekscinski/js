
//1.do każdego elementu dodaj identyfikator, 
//identyczny jak nazwa miesiąca; sprawdź w przeglądarce czy identyfikator został ustawiony
window.onload = function () {

let liEl = document.getElementsByTagName("li");
console.log(liEl);

for (let i=0; i<liEl.length; i++) {
    
    const textFromLi = liEl[i].textContent;
    console.log(textFromLi);
  if (i%2==0) {
    liEl[i].setAttribute("class", "nieparzysty");
  }
  else {liEl[i].setAttribute("class", "parzysty");}
    // liEl[i].setAttribute("id",textFromLi);
//2. dla każdego elementu ustaw klasę: do miesiecy parzystych "parzysty", do nieparzystych "nieparzysty"
    
}
let $liItemWithTest = document.querySelectorAll('li.test');
$liItemWithTest = [...$liItemWithTest];
console.log($liItemWithTest);

}
