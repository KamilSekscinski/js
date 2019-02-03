window.onload = function () {
    //zad.1
    clickSwitch();
    //zad.2
    randArray();
    //zad.3
    clickUl();
    //zad.4
    createTable();
    //zad.5
    queueSystem()
    }

//Zad.1 W dokumencie znajdują się trzy "włączniki" (odpowiednio ostylowane elementy DIV). 
// Kliknięcie lewym przyciskiem myszy powoduje włączenie włącznika (zmienia się wtedy jego styl), 
// kolejne kliknięcie - jego wyłączenie. Poniżej wyświetlany jest komunikat informujący ile 
// włączników jest w danej chwili włączonych (np. "wszystkie włączone", "dwa włączone", etc.).

function clickSwitch() {
    const $div1 = document.querySelector('.div1');
    const $div2 = document.querySelector('.div2');
    const $div3 = document.querySelector('.div3');
    //po kliknieciu wlacza/wylacza klasę .yellow,
    $div1.onclick = function() {
        this.classList.toggle('yellow');  
        switchNum() 
    };

    $div2.onclick = function() {
        this.classList.toggle('yellow');
        switchNum()  
    };
    $div3.onclick = function() {
        this.classList.toggle('yellow');
        switchNum()  
    };
    //funkcja sprawdzająca liczbę aktywnych włączników z klasą .yellow
    function switchNum() {
        const yellSwitch = document.querySelectorAll('.yellow');
        const $infoSwitch = document.getElementById("info-switch");
        if (yellSwitch.length == 2) {
            $infoSwitch.innerHTML = 'Włączono 2 włączniki';
        }
        else if (yellSwitch.length == 1) {
            $infoSwitch.innerHTML = 'Włączono 1 włącznik';
        }
        else if (yellSwitch.length == 3) {
            $infoSwitch.innerHTML = 'Włączono wszystkie włączniki';
        }
        else {$infoSwitch.innerHTML = '';}
    }
}

// Zad.2. Stwórz tablicę o rozmiarze podanym przez użytkownika. 
// Pierwsza wartość w tablicy powinna wynosić 3. Każda kolejna różni się od poprzedniej 
// o losową wartość od -3 do 3. Wyświetl tablicę w dokumencie. 
// Wyświetl informację ile jest w niej par takich samych elementów obok siebie 
// (np. dla tablicy [3, 5, 5, 4, 2, 3, 3, 5] są to dwie pary: para piątek i para trójek).

function randArray() {
    const arrLenBtn = document.getElementById('arrlen-value-btn');
    const arrlenVal = document.getElementById('arrlen-value');
    const $warn = document.getElementById('warn');

    arrLenBtn.addEventListener('click', function() {
        
        const resultArr = document.getElementById('result-arr');
        const resultArrPair = document.getElementById('result-arr-pair');
        const $arrlenVal = parseFloat(arrlenVal.value);
        
    
        if (!isNaN($arrlenVal)) { 
            if ($arrlenVal<=0) {
                $warn.innerHTML = 'Podaj wartość większą od zera!';
                resultArr.innerHTML = '';
                resultArrPair.innerHTML = '';
            }
            else {
                $warn.innerHTML = '';
                // tablica z pierwszą wartością 3 a kolejne rożnią się o losową wartość od -3 do 3
                let ar = [3];
                for (let i = 1; i < $arrlenVal; ++i) {
                ar[i] = ar[i-1] + (getRandom(-3,3));
                }
                resultArr.innerHTML = '<b>Tablica:</b> ' + ar;
                // takie same liczby obok siebie
                let pairNum = 0;
                for (let x=1; x<ar.length; ++x) {
                    if (ar[x] == ar[x-1]) {
                        pairNum += 1;
                    }
                }
                resultArrPair.innerHTML = '<b>Liczba par obok siebie w tablicy:</b> ' + pairNum;
                }
            }
        else {
            $warn.innerHTML = 'Podaj wartość liczbową!';
            resultArr.innerHTML = '';
            resultArrPair.innerHTML = '';
            }

    // losowa liczba z podanego zakresu
        function getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    })
}


// zad.3. Stwórz listę (typu UL) wypełnioną losowymi "słowami" 
// (słowo to po prostu ciąg od 4 do 10 losowych znaków). 
// Jeśli klikniemy któreś ze słów, wyświetli się (w elemencie) 
// informacja ile razy zostało ono kliknięte oraz o której godzinie 
// (wraz z sekundami) kliknięto je ostatnio.

function clickUl() {
    const liWords = document.querySelectorAll('.ulWords li');
    let clickSum = [];
    let text = [];
    for (let i = 0; i < liWords.length; i++) {
        clickSum[i] = 0;
        text[i] = liWords[i].textContent;
        liWords[i].onclick = function () {
            let clickDate = new Date();
            clickSum[i] += 1;
            liWords[i].textContent = `${text[i]} - kliknięto: ${clickSum[i]} razy, ostatnio o godzinie:
             ${clickDate.toLocaleTimeString()}`
        }
    }  
}


// Zad.4. Użytkownik podaje dwie wartości - liczbę wierszy i kolumn tabeli. Program tworzy tabelę, 
// następnie wypełnia ją losowymi wartościami (od 1 do 100). Największa wartość zostaje 
// oznaczona kolorem czerwonym, a najmniejsza - zielonym. Wartości parzyste zostają wytłuszczone.

function createTable() {
    const $numRow = document.getElementById('numRow');
    const $numCol = document.getElementById('numCol');
    const $warn = document.getElementById('warn2');

    const $btnAddTable = document.getElementById('table-create-btn');
    
    $btnAddTable.onclick = function () {
        //tworzenie tabeli
        const myTable = document.querySelector('.my-table');
        if (myTable.childElementCount>0) {
            $warn.innerHTML = 'Czyszczenie zawartości';
            location.reload(true);
        }
        else if ($numRow.value==0 || $numCol.value==0 ) {
            $warn.textContent = 'Wpisz liczbę wierszy i kolumn!';
        }
        else {
            if (!isNaN($numRow.value) && !isNaN($numCol.value) ) {
                $warn.innerHTML = '';
                //dodanie tabeli
                for (let i=0; i<$numRow.value; i++) {
                    let row = myTable.insertRow();
                    for (let i=0; i<$numCol.value; i++) {
                        row.insertCell();
                    }
                }
                //dodawanie zawartości do komórek tabeli
                const tdTable = myTable.querySelectorAll('td');
                let tdTableArr = [];
                for (let i=0; i<tdTable.length; i++) {
                     tdTableArr[i] = Math.floor(Math.random() * 99) + 1;
                     tdTable[i].textContent = tdTableArr[i];
                     //wartości parzyste pogrubiona czcionka
                     if (tdTable[i].textContent % 2 ==0) {
                        tdTable[i].classList.add('bold');
                     }
                }
                // max i min z tabeli
                let max = Math.max(...tdTableArr);
                let min = Math.min(...tdTableArr);
                // dodanie stylu do wartości min i max
                for (let i=0; i<tdTable.length; i++) {
                    if (tdTable[i].textContent == max) {
                        tdTable[i].classList.add('numMax');
                     }
                     else if (tdTable[i].textContent == min) {
                        tdTable[i].classList.add('numMin');
                     }
                }
            }
            else {
                $warn.textContent = 'Wpisz liczbę!';
            }
            
        }
        
    }
}


// zad.5. Kolejka do elektronicznego systemu obsługi: do dyspozycji mamy dwa przyciski "nowy klient" 
// (dodaje klienta do kolejki) oraz "obsłuż klienta" (klient pierwszy w kolejce zostaje obsłużony i usunięty). 
// Poniżej wyświetlany jest stan kolejki (np. w postaci poziomej tabeli). Jeszcze niżej wyświetlana jest lista 
// wykonanych operacji (najnowsza operacja znajduje się na górze): "klient X pojawił się o godzinie GG:MM:SS" 
// albo "klient X został obsłużony o godzinie GG:MM:SS". Klienci są reprezentowani przez kolejne wartości 
// całkowite rozpoczynając od 1. Maksymalny rozmiar kolejki to 10 - próba dodania nowego klienta skutkuje 
// komunikatem "dla klienta X nie ma miejsca w kolejce".

function queueSystem() {
    const newClientBtn = document.getElementById('btn-new-client');
    const complClientBtn = document.getElementById('btn-compl-client');
    
    let numClient = 0;
    let numQueue = 0;
    const queueTable = document.querySelector('.queue-table');
    const operationTable = document.querySelector('.operation-table');
    //dodawanie klienta
    newClientBtn.onclick = function() {
        if (numQueue>=10) {
            alert (`Dla klienta ${numClient + 1} nie ma miejsca w kolejce`)
        }
        else {
            let clickDate = new Date();
            numClient++;
            numQueue++;
            let row = queueTable.insertRow();
            row.textContent = `${numClient} `
            let row2 = operationTable.insertRow(0);
            row2.textContent = `Dodaje klienta ${numClient} do kolejki o godz ${clickDate.toLocaleTimeString()}`
        }    
    }
    //obsluga klienta
    complClientBtn.onclick = function() {
        if (numQueue<=0) {
            alert ('Brakuje klientów kolejce');
        }
        else {
            let clickDate = new Date(); 
            let firstClient = queueTable.querySelectorAll('tr');
            let row2 = operationTable.insertRow(0);
            row2.textContent = `Obsłużono klienta ${firstClient[0].innerHTML} o godz ${clickDate.toLocaleTimeString()}`
            queueTable.deleteRow(0);
            numQueue--;
        } 
    }
}

