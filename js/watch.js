ToggleFunById('img-purple','block');
ToggleFunById('img-cyan','none');
ToggleFunById('img-gray','none');
ToggleFunById('img-teal','none');

document.getElementById('purple').addEventListener('click',function(){

    ToggleFunById('img-purple','block');
    ToggleFunById('img-cyan','none');
    ToggleFunById('img-gray','none');
    ToggleFunById('img-teal','none');
})
document.getElementById('green').addEventListener('click',function(){
    ToggleFunById('img-purple','none');
    ToggleFunById('img-cyan','none');
    ToggleFunById('img-gray','block');
    ToggleFunById('img-teal','none');
})
document.getElementById('black').addEventListener('click',function(){
    ToggleFunById('img-purple','none');
    ToggleFunById('img-cyan','none');
    ToggleFunById('img-gray','none');
    ToggleFunById('img-teal','block');
})
document.getElementById('sky-blue').addEventListener('click',function(){
    ToggleFunById('img-purple','none');
    ToggleFunById('img-cyan','block');
    ToggleFunById('img-gray','none');
    ToggleFunById('img-teal','none');
})

document.getElementById('positive-icon').addEventListener('click',function(event){
    SetInnerTextIncrement('quantity-of-add-to-cart');
})
document.getElementById('negative-icon').addEventListener('click',function(){
    SetInnerTextDeccrement('quantity-of-add-to-cart')
})