document.getElementById('exemplo').innerHTML = 'Usei o DOM!';
document.getElementsByClassName('lista')[0].innerHTML='Item alterado!';
document.getElementsByTagName('button');
document.getElementsByName('email');

document.querySelector
document.querySelectorAll

function verde(){
    document.querySelector('#dom').classList.remove('azul');
    document.querySelector('#dom').classList.remove('vermelho');
    document.querySelector('#dom').classList.add('verde');
}
function vermelho(){
    document.querySelector('#dom').classList.remove('azul');
    document.querySelector('#dom').classList.remove('verde');
    document.querySelector('#dom').classList.add('vermelho');
}
function azul(){
    document.querySelector('#dom').classList.remove('verde');
    document.querySelector('#dom').classList.remove('vermelho');
    document.querySelector('#dom').classList.add('azul');
}

function trocar(){
   if(document.querySelector('button').classList.contains('preto')){
    document.querySelector('button').classList.remove('preto');
    document.querySelector('button').classList.add('amarelo');
   }else{
    document.querySelector('button').classList.remove('amarelo');
    document.querySelector('button').classList.add('preto');
}
}