

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