const $btnDodaj = document.getElementById('btn1');
const $btnOdejmij = document.getElementById('btn2');

const $kom1 = document.getElementById('kom1');
const $kom2 = document.getElementById('kom2');

$btnDodaj.onclick = function () {
    
    
    let kom2Val = parseFloat($kom2.textContent);
    let kom1Val = parseFloat($kom1.textContent);
    
    if (kom2Val<9) {
        $kom2.textContent = kom2Val +1;
    }
    else if(kom2Val==9&&kom1Val!=9) {
        $kom2.textContent = 0;
        $kom1.textContent = kom1Val +1;
    }
    else if(kom1Val==9) {
        $kom2.textContent = 0;
        $kom1.textContent = 0;
    }
    
}

$btnOdejmij.onclick = function () {

    let kom2Val = parseFloat($kom2.textContent);
    let kom1Val = parseFloat($kom1.textContent);
    
    if (kom2Val>0&&kom2Val>0) {
        $kom2.textContent = kom2Val -1;
    }
    else if(kom2Val==0&&kom1Val<=9&&kom1Val!==0) {
        $kom1.textContent = kom1Val -1;
        $kom2.textContent = 9;
    }
    else if(kom2Val==0&&kom1Val==0) {
        $kom2.textContent = 9;
        $kom1.textContent = 9;
    }
    
}


