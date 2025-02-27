

function ToggleFunById(id, value) {
    document.getElementById(id).style.display = value;
    
}

function SetInnerTextIncrement(id) {
    let value = document.getElementById(id).innerText
    value = parseInt(value);

    value += 1;
    document.getElementById(id).innerText = value;
}
function SetInnerTextDeccrement(id) {
    let value = document.getElementById(id).innerText
    value = parseInt(value);
    value -= 1;
    if (value > 0) {
        document.getElementById(id).innerText = value;
    }
    return;

}

function SeTBorderByID(id,another1,another2,another3){
    document.getElementById(id).style.border = '2px solid purple';
    document.getElementById(another1).style.border = '1px solid gray';
    document.getElementById(another2).style.border = '1px solid gray';
    document.getElementById(another3).style.border = '1px solid gray';
}