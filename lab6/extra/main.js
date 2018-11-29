
window.onload = function () {
  let para = document.getElementsByTagName("p");
//1. Znajdź paragraf zawierający najmniej tekstu i zmień kolor
//  znaków na zielony. W paragrafie z największą ilością 
//  tekstu zmień kolor na czerwony.

let $pItem = document.querySelectorAll('p');
$pItem = [...$pItem];
// console.log($pItem[1]);

//2. Wytłuść losowy paragraf (font-weight).
const losPar = Math.floor(Math.random() * $pItem.length);
  $pItem[losPar].style.fontWeight = "bold";

//3. W co drugim paragrafie ustaw pismo pochyłe (font-style).

// if ($pItem[i]%2==0) {
//   $pItem.style.fontStyle = "italic";
// }

//4. Po kliknięciu w paragraf lewym przyciskiem myszy, tekst zamieniany jest na 
// pisany dużymi literami (ustaw atrybut autocapitalize na characters, 
//   albo styl text-transform na uppercase). Po kliknięciu prawym przyciskiem, 
//   wraca on do stanu poprzedniego.
$pItem.onclick = function() {

  this.style.fontWeight = "italic";

};

// for (let i=0; i<$pItem; i++) {
  
  
//   $pItem[i].onauxclick = function() {
//     //czyścimy jak ustawione
//       this.style.textTransform = null
    
  
//   };
// }



// let para1 = $pItem[0].length;
// para1 = parseFloat(para1);
// console.log(para1);

// function max (a, b) {
//   if (a>b) {
//     return a
//   }
//   else if (b>a) {
//     return b
//   }
// }




}