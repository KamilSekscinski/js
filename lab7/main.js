//zad.1 i 2
const parentListP = document.getElementById('parent-element');

dodajEle();
function dodajEle () {
  for (let i=0; i<3;i++) {
    //2.Przed każdym paragrafem dodaj nagłówek zawierający 
    //numer paragrafu (licząc od 1).
  
    //tworzenie nowego elementu h2
    const newTextH2 = document.createTextNode(`${i+1}`);
    const newh2 = document.createElement('h2');
    newh2.appendChild(newTextH2);
  //1. Do dokumentu dodaj paragrafy 
  //(elementy <p>) zawierające teksty z tablicy.
  
    parentListP.appendChild(newh2);
  //tworzenie nowego elementu p
    const newpText = document.createTextNode(`eefdfasda ${i+1}`);
    const newP = document.createElement('p');
    newP.appendChild(newpText);
    parentListP.appendChild(newP);
  //3. Kliknięcie w nagłówek powinno ukrywać zawartość 
  //paragrafu poniżej. Ponowne kliknięcie - odsłaniać go.
  
    newh2.onclick = function () {
      if (newP.classList.contains('hide')) {
        newP.classList.remove('hide')
      } else {
        newP.classList.add('hide');
      }
    }
  
    //4.Dodaj formularz z pojedynczym polem tekstowym 
    //- pozwala on na dodanie kolejnego paragrafu do dokumentu
    // (oczywiście wraz z działającym jak powyżej nagłówkiem).
    document.forms.myform.onsubmit = function () {
     
      
      if (this.nazwa.value) {
      let p2 = document.createElement("p");
      
      p2.innerHTML = this.nazwa.value;
      document.getElementById("parent-element").appendChild(p2);
      this.nazwa.value = "";
      this.nazwa.focus();
      console.log(array);
      // p2.onclick = usuń;
      }
      return false;
     }
    //poza zadaniami
  newh2.onmousedown = function () {
    this.style.background = "red"
  }
    //  function usuń() {
    //   this.parentNode.removeChild(this);
    //  }
  
    }
}
