
document.forms.form.onsubmit = function () {
    console.log(this.text.value);
    if (this.text.value) {
        const li = document.createElement("li");
        li.innerHTML = this.text.value;
        document.getElementById('lista').appendChild(li);
        
        const bt = document.createElement("button");
        
        li.contentEditable = true;
        li.appendChild(bt);

        bt.onclick = function() {
            lista.removeChild(li);

        };
    //     li.onlick = function () {
    //         li.setAttribute(contentEditable, true);
    // };

    return false
}
// function usun () {
//     this.parentNode.removeChild(this);
// }
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