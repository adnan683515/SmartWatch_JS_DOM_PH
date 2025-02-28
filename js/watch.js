ToggleFunById('img-purple', 'block');
ToggleFunById('img-cyan', 'none');
ToggleFunById('img-gray', 'none');
ToggleFunById('img-teal', 'none');

document.getElementById('purple').addEventListener('click', function () {
    ToggleFunById('img-purple', 'block');
    ToggleFunById('img-cyan', 'none');
    ToggleFunById('img-gray', 'none');
    ToggleFunById('img-teal', 'none');

})
document.getElementById('green').addEventListener('click', function () {
    ToggleFunById('img-purple', 'none');
    ToggleFunById('img-cyan', 'none');
    ToggleFunById('img-gray', 'block');
    ToggleFunById('img-teal', 'none');
})
document.getElementById('black').addEventListener('click', function () {
    ToggleFunById('img-purple', 'none');
    ToggleFunById('img-cyan', 'none');
    ToggleFunById('img-gray', 'none');
    ToggleFunById('img-teal', 'block');
})
document.getElementById('sky-blue').addEventListener('click', function () {
    ToggleFunById('img-purple', 'none');
    ToggleFunById('img-cyan', 'block');
    ToggleFunById('img-gray', 'none');
    ToggleFunById('img-teal', 'none');
})
document.getElementById('positive-icon').addEventListener('click', function () {
    SetInnerTextIncrement('quantity-of-add-to-cart');
})
document.getElementById('negative-icon').addEventListener('click', function () {
    SetInnerTextDeccrement('quantity-of-add-to-cart')
})
document.getElementById('box-1').addEventListener('click', function () {
    SeTBorderByID('box-1', 'box-2', 'box-3', 'box-4')
})
document.getElementById('box-2').addEventListener('click', function () {
    SeTBorderByID('box-2', 'box-1', 'box-3', 'box-4')
})
document.getElementById('box-3').addEventListener('click', function () {
    SeTBorderByID('box-3', 'box-2', 'box-1', 'box-4')
})
document.getElementById('box-4').addEventListener('click', function () {
    SeTBorderByID('box-4', 'box-2', 'box-3', 'box-1')
})
const AllRingButton = document.querySelectorAll('.ring-color-btn')
for (let i = 0; i < AllRingButton.length; i++) {
    let element = AllRingButton[i];
    element.addEventListener('click', function (event) {

        for (let j = 0; j < AllRingButton.length; j++) {

            AllRingButton[j].classList.remove('border-4');
            AllRingButton[j].classList.remove('border-gray-600');
        }
        event.target.classList.add('border-4')
        event.target.classList.add('border-gray-600')
    })
}

document.getElementById('add-to-cart-btn').addEventListener('click', function () {

    // checout-quantity
    let addToCartQuantity = parseInt(document.getElementById('quantity-of-add-to-cart').innerText);
    const checkOutQuantity = parseInt(document.getElementById('checout-quantity').innerText)
    const navQuantity = parseInt(document.getElementById('nav-quantity').innerText)
    if (addToCartQuantity > 0) {
        document.getElementById('check-out-btn').classList.remove('hidden')
        document.getElementById('checout-quantity').innerText = addToCartQuantity + checkOutQuantity;
        document.getElementById('nav-quantity').innerText = addToCartQuantity + navQuantity;
    }
    else{
        alert("Please Select a quantity .....")
    }


})