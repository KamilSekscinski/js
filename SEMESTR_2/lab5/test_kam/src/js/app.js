// import Log from "./js/components/m-log.js";
// import Human from "./js/components/human.js"


// ĆW B
const vBox = document.querySelector('.box');

const garazBox = document.createElement("div")

const autoBox = document.createElement("div");
const motoBox = document.createElement("div");


class pojazd {
    constructor (typ, kolor, rodzaj_silnika, stan_licznika=0) {
        this.typ = typ;
        this.kolor = kolor;
        this.rodzaj_silnika = rodzaj_silnika;
        this.stan_licznika = stan_licznika;
    }
    print_typ() {
        const text = `Pojazd typu: ${this.typ}`;
        return text;
        // const tekst = `Kolor pojazdu to: ${this.kolor}`;
        // console.log(tekst);
    }
    print_kolor() {
        const text = `Kolor pojazdu to: ${this.kolor}`;
        // this.kolor = `Kolor pojazdu to: ${this.kolor}`;

        // const tekst = `Kolor pojazdu to: ${this.kolor}`;
        // console.log(tekst);

        return text;
        
    }
    print_rodzaj_silnika() {
 

        if (this.rodzaj_silnika === "elektryczny") {
            const text = `${this.typ} jest ekologiczny`;

            // this.rodzaj_silnika = text;
            return text;
            const tekst = `${this.typ} jest ekologiczny`;
            console.log(tekst);
            
        }
        else {
            const tekst = `${this.typ} jest nie-ekologiczny. Elon Musk nie jest zadowolony z Twojego wyboru.`;
            console.log(tekst);
            // this.rodzaj_silnika = tekst;
            return tekst;
            
        }
        
    }

    stan_licz() {
        const los = Math.floor((Math.random() * 9000) +1000)
        
        
        if (los < 2500) {
            const tekst = `Silnik jest niedotarty ${this.stan_licznika}`;
            // this.stan_licznika = tekst;
            console.log(tekst);
 
        }
        else {
            this.stan_licznika = los;
            // console.log(this.stan_licznika)  
        }
        
    }
    print_stan_licznika() {
        this.stan_licz();
        const tekst = `Stan licznika to: ${this.stan_licznika} km`;
        // this.stan_licznika =`Stan licznika to: ${this.stan_licznika} km`;
        // this.stan_licznika = tekst;
        return tekst;
        // const tekst = `Stan licznika to: ${this.stan_licznika} km`;
        // console.log(tekst);
        
    }

    // print_all() {
    //     this.print_typ();
    //     this.print_kolor();
    //     this.print_rodzaj_silnika();
    //     this.print_stan_licznika();
    // }

} 

class motocykl extends pojazd {
    constructor (typ, kolor, stan_licznika) {
        super(typ, kolor, stan_licznika);
        // super(kolor);
        this.rodzaj_silnika = "benzynowy";
        // this.stan_licznika = 0;
        // super(stan_licznika);
    }
    print_moto() {

        return `Pojazd jest jednośladem`;
        const tekst = `Pojazd jest jednośladem`;
        console.log(tekst);
        
    }
}

class samochód extends pojazd {
    constructor (typ, kolor, rodzaj_silnika, stan_licznika) {
        super(typ, kolor, rodzaj_silnika, stan_licznika);  
    }
    print_auto_kolor() {
        if (this.kolor === "czerwony") {

            const text = `Samochód jest niezniszczalny, bo ma kolor ${this.kolor}`;
            return text;

            // const tekst = `Samochód jest niezniszczalny, bo ma kolor ${this.kolor}`;
            // console.log(tekst);
            // return tekst;
            
        }
        else {
            return ``
        }
        
    }
}

class garaz {
    constructor (tytul) {
        this.tytul = tytul;
        this.tablicamot = []

    };
    dodaj(pojazd) {
        this.tablicamot.push(pojazd)
    };
    usun(pojazd) {
        for (var i=0; i<this.tablicamot.length; i++) {
            if (this.tablicamot[i].pojazd === pojazd) {
                this.tablicamot.splice(i,1);
                return;
            }
        }
    };
    
}



const noweAuto = new pojazd("Suv", "czerwony", "diesel");

// noweAuto.print_all();
// noweAuto.print_typ();
// noweAuto.print_kolor();
// noweAuto.print_rodzaj_silnika();
// noweAuto.print_stan_licznika();
console.log(noweAuto);

console.log('----------------------------------------------------')

const motor = new motocykl("Kawasaki", "czerwony", )
// motor.print_typ();
// motor.print_kolor();
// motor.print_rodzaj_silnika();
// motor.print_stan_licznika();
console.log(motor)

console.log('----------------------------------------------------')

const auto = new samochód("Golf V", "czerwony", "elektryczny")

const auto2 = new samochód("Leon", "czarny", "elektryczny")

// auto.print_typ();
// auto.print_kolor();
// auto.print_rodzaj_silnika();
// auto.print_stan_licznika();

auto.print_auto_kolor()

console.log(auto)


const nowyGaraż = new garaz ("Lista pojazdów");
nowyGaraż.dodaj(noweAuto);

nowyGaraż.dodaj(motor);
console.log(nowyGaraż);

nowyGaraż.usun(motor);
console.log(nowyGaraż);


// vBox.appendChild(garazBox).innerHTML = `${nowyGaraż.print()}`


vBox.appendChild(autoBox).innerHTML= `${auto.print_typ()} 
<br> ${auto.print_kolor()}
<br> ${auto.print_rodzaj_silnika()}
<br> ${auto.print_stan_licznika()}
<br> ${auto.print_auto_kolor()}`;
autoBox.classList.add('autobox');



vBox.appendChild(motoBox).innerHTML= `${motor.print_typ()} 
<br> ${motor.print_kolor()}
<br> ${motor.print_rodzaj_silnika()}
<br> ${motor.print_stan_licznika()}
<br> ${motor.print_moto()}`;
motoBox.classList.add('motobox');



 //usuń
 const newButton1 = document.createElement('button');
 const newButton2 = document.createElement('button');
 autoBox.appendChild(newButton1);
 motoBox.appendChild(newButton2);
 const newTextBuTT1 = document.createTextNode('usuń');
 const newTextBuTT2 = document.createTextNode('usuń');
 newButton1.appendChild(newTextBuTT1);
 newButton2.appendChild(newTextBuTT2);
 
 newButton1.onclick = function () {
     deleteFunc(vBox, autoBox);
     
    //  nowyGaraż.usuń(this)
     };  
     
 newButton2.onclick = function () {
        deleteFunc(vBox, motoBox);
        // nowyGaraż.usuń(this)
    
        };   
        
//funkcja usuń element
function deleteFunc(element1, element2) {
    element1.removeChild(element2);
    console.log(nowyGaraż)
}


// autoBox.innerHTML= `${noweAuto.print_typ()}`

// mBox.innerHTML = tabMoto.join(" <br>");
// mBox.innerHTML = noweAuto;

// aBox.noweAuto;






// -------------------------------------------------------------------

// const addTaskSec = document.querySelector('.addTaskSection');
// const listTodo = document.querySelector('.taskListSection ol');

// const $btnAdd = document.getElementById('add-btn_auto');

// $btnAdd.onclick = function() {
//     let valToDoTyp = document.getElementById('add-input_typ').value;
//     let valToDoKolor = document.getElementById('add-input_kolor').value;
//     let valToDoSilnik = document.getElementById('add-input_silnik').value;

    

//     //wykona się po wpisaniu wartości w input
    
//     if (valToDoTyp, valToDoKolor, valToDoSilnik) {
//         const liZad = document.createElement('li');
//         listTodo.appendChild(liZad);


//         const auto3 = new samochód(valToDoTyp, valToDoKolor, valToDoSilnik)

//         console.log(auto3)
    

//         const NewSpan = document.createElement('span');
        
//         const newTextSpan = document.createTextNode(valToDoTyp);
//         const newTextSpan2 = document.createTextNode(valToDoKolor);
//         liZad.appendChild(NewSpan);


//         NewSpan.appendChild(newTextSpan);
//         NewSpan.appendChild(newTextSpan2);
       

//         //usuń
//         const newButton = document.createElement('button');
//         liZad.appendChild(newButton);
//         const newTextBuTT = document.createTextNode('usuń');
//         newButton.appendChild(newTextBuTT);
//         newButton.onclick = function () {
//             deleteFunc(listTodo, liZad);
//             };
//         //edycja
//         NewSpan.contentEditable = true;
//     }
//     else {alert('Uzupelnij puste pole!!')}
    
    

// };
// //funkcja usuń element
// function deleteFunc(element1, element2) {
//     element1.removeChild(element2);
// }

// -------------------------------------------------------------------


// const noweAuto2 = new pojazd("Seat", "niebieski", "elektryczny");

// noweAuto2.print_all()


// z zajęc |||||||||||||||||||||||||||||||

// function Log(msg){
//     console.log(`%c${msg}`, 'color: red; font-size: 16px;');
// }

// class Human {
//     constructor (gender, age) {
//         this.gender = gender;
//         this.age = age;
//     }

//     print() {
//         const tekst = `Stworzono nowego człowieka. Płeć ${this.gender}: wiek: ${this.age}`
//         console.log(tekst)
//     }
// }

// const HumanTest = new Human('test', 20);
// HumanTest.print();
// console.log(HumanTest);


// class Pet {
//     constructor(name) {
//         this.name = name;
//     }
//     print() {
//         console.log('Nazwa zwierzaka: ' + this.name);
//     }
// }

// class Dog extends Pet {
//     constructor(name, tricks) {
//         super(name);
//         this.tricks = tricks;
//         this.tablica = [];
//     }
//     print() {
//         super.print();
//         console.log('Ten zwierzak potrafi: ' + this.tricks);
//         this.dodaj(this.tricks);
//     }
//     dodaj(value) {
//         this.tablica.push(value);

//         const self = this;
        
//         document.querySelector('#btn').addEventListener('click', function() {
//             this.currentTarget;
//             self.tablica
//         });
//     }
// }

// const petTet = new Pet('Krystian');
// petTet.print();
// console.log(petTet);

// const dogTest = new Dog('Leszek', 'salto');
// dogTest.print();
// console.log(dogTest);

// |||||||||||||||||||||||

// Log('Hello World from JS');

// const obiekt = {
//     a: 1,
//     b: 56,
//     wart: true,
//     string: "test",
//     fun: function () {
//         console.log('testowy wpis')
//     }
// }

// obiekt.fun();
// console.log(obiekt.a);

