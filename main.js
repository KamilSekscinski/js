const $field = document.getElementById('field');
const $btn = document.getElementById('btn');
const myArray = [1,2,3,15,40,55,300];

$btn.addEventListener ('click', function (){
    const valueFromField = $field.value;
    updateMyArray (valueFromField);
});

function updateMyArray (value) {
    const $result = document.getElementById('result'); 
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random()*20)+1;
    } 
    myArray.push(value);

    $result.textContent = myArray;
    showMessage (value, myArray.length)
}
function showMessage (value, index) {
    const $message = document.getElementById('message');
    const textMsg = `dodano wartość ${value} na pozycji ${index}.`
    $message.textContent = textMsg;

}