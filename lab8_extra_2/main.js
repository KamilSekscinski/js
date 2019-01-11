const loginFormInp = document.getElementById('input_login');

// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // loginFormInp.textContent
//     // console.log('costam');
//     // const cos = loginFormInp.textContent;
//     console.log(event);
// });

document.forms.loginForm.onsubmit = function() {
    if (this.inputLogin.value) {
        const h21 = document.createElement('h2');
        h21.inputLogin.value.innerHTML;
        console.log(h21);
    }
    
}

