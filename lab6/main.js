
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

//8. Jeśli jeszcze raz klikniemy LEWYM przyciskiem w miesiąc, którego kolor 
//już został ustawiony na lightcyan lub lighblue (lub PRAWYM, jeśli kolor został ustawiony na 
//lightpink lub lightyellow), wraca on do pierwotnego stanu (ma to działać jak przełącznik).
liEl[i].onclick = function() {
  //czyścimy jak ustawione
  if (this.style.backgroundColor === "lightcyan" || this.style.backgroundColor === "lightblue") {
    this.style.backgroundColor = null
  }
  //kolorujemy
  else if(this.className === "parzysty") {
    this.style.backgroundColor = "lightcyan";
  }
  else {
    this.style.backgroundColor = "lightblue";
  }

};
//7. po kliknięciu prawym, ustaw lightyellow jeśli parzysty 
// lub lightpink jeśli nieparzysty

//8. Jeśli jeszcze raz klikniemy LEWYM przyciskiem w miesiąc, którego kolor 
//już został ustawiony na lightcyan lub lighblue (lub PRAWYM, jeśli kolor został ustawiony na 
//lightpink lub lightyellow), wraca on do pierwotnego stanu (ma to działać jak przełącznik).

liEl[i].onauxclick = function() {
  //czyścimy jak ustawione
  if (this.style.backgroundColor === "lightyellow" || this.style.backgroundColor === "lightpink") {
    this.style.backgroundColor = null
  }
  //kolorujemy
  else if(this.className === "parzysty") {
    this.style.backgroundColor = "lightyellow";
  }
  else {
    this.style.backgroundColor = "lightpink";
  }

};
// aby nie wyskakiwało menu kontekstowe
document.oncontextmenu = function (ev) {
  ev.preventDefault()
}

}
let $liItemWithTest = document.querySelectorAll('li.test');
$liItemWithTest = [...$liItemWithTest];
console.log($liItemWithTest);

}
