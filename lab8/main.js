document.forms.form.onsubmit = function () {
    console.log(this.text.value);
    if (this.text.value) {
        const li2 = document.createElement("li");
        
        li2.innerHTML = this.text.value;
        
        document.getElementById('lista').appendChild(li2);
        li2.dataset.status = "nie wykonano";
        li2.dataset.dataUtw = Date ();
        //do edycji
        li2.contentEditable = true;


        //button wykonane
        const btWyk = document.createElement("button");
        li2.appendChild(btWyk);
        const btWykText = document.createTextNode('Wykonane');
        btWyk.appendChild(btWykText);
        btWyk.setAttribute("class", "wyk");

        btWyk.onclick = function wyk() {
            li2.dataset.status = "wykonano";    
            li2.dataset.dataWyk = Date ();
            this.style.backgroundColor = "green";   
        }


        //button usuń
        const bt = document.createElement("button");
        li2.appendChild(bt);
        const btText = document.createTextNode('usuń');
        bt.appendChild(btText);
        bt.setAttribute("class", "usun");

        bt.onclick = function() { 
            if (confirm ('Usunąć?')) {
                lista.removeChild(li2);
            }
        };
        //czyszczenie pola onsubmit
        // parent.form.text.value="";

    return false
    }

}









//111
// let $test = document.querySelector('[data-test-array]');

// $test = $test.getAttribute('data-test-array');

// $test = $test.split(',');
// const test = document.getElementById('test');

// test.textContent = $test;

// console.log(test);


//2222
// const $btn = document.getElementById("test");

// $btn.onclick = function () {
//     const $test = document.querySelector ('[data-id')
//  if (this.id === $test.getAttribute('data-id')) {
//      $test.classList.remove('hide')
//  }
// }