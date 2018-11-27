
//1.do każdego elementu dodaj identyfikator, 
//identyczny jak nazwa miesiąca; sprawdź w przeglądarce czy identyfikator został ustawiony
window.onload = function () {

let liEl = document.getElementsByTagName("li");
console.log(liEl);

for (let i=0; i<liEl.length; i++) {
    
    const textFromLi = liEl[i].textContent;
    console.log(textFromLi);
//2. dla każdego elementu ustaw klasę: do miesiecy parzystych "parzysty", do nieparzystych "nieparzysty"
  if (i%2==0) {
    liEl[i].setAttribute("class", "nieparzysty");
  }
  else {liEl[i].setAttribute("class", "parzysty");}
    // liEl[i].setAttribute("id",textFromLi);

//1.do każdego elementu dodaj identyfikator, 
liEl[i].setAttribute("id",textFromLi);
//3.do każdego miesiąca dodaj atrybut title zawierający informację 
//o liczbie znaków w jego nazwie
liEl[i].setAttribute("title", textFromLi.length);
//4. do nazwy każdego miesiąca dopisz 2018
liEl[i].textContent += " 2018";
//5. kolor tekstu każdego z miesięcy ustaw na losową 
//wartość wybraną spośród "red", "green", "blue", "orange"
const kolory = ["red", "green", "blue", "orange"];
liEl[i].style.color = kolory[Math.floor(Math.random() * kolory.length)];
//6. po kliknięciu lewym przyciskiem myszy, ustaw jego tło na kolor 
//lightcyan jeśli to miesiąc parzysty lub na lightblue, jeśli nieparzysty 
}
let $liItemWithTest = document.querySelectorAll('li.test');
$liItemWithTest = [...$liItemWithTest];
console.log($liItemWithTest);

}
