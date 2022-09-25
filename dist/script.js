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


var nome = "Bianca";
var idade = 19;
var salvo = true;
var cidade;

//Comentário de uma linha

/*Cometário
     de
Mútiplaslinhas*/ 


//Funções (1-2)

function alterar(){
    document.getElementById("titulo").innerHTML="Trocou o titulo";
    document.getElementById("campo").value="Trocou de campo";
}
alterar();

//Funções (2-2)
function alterar(titulo){
    document.getElementById("titulos").innerHTML=titulo;
}
alterar("Título de exemplo");

function somar(x, y){
    let total=x+y;
    document.getElementById("campos").value= total;
}

function somar(x, y){
    let total=x+y;
    return total;
}

var resultado = somar(22,19);

console.log(resultado);

//Manipulando Atributos

function trocarImagem(filename, animalname){
    document.querySelector(".imagem").setAttribute('src', '../assets/images/'+filename);
    document.querySelector(".imagem").setAttribute('data-animal', animalname);
}
function pegarAnimal(){
    let animal= document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é: "+animal);
}

//Distâncias e Scroll Suave

function subirTela(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

//Resposta do Exercício Scroll

function decidirBotaoScroll(){
    if(window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotaoScroll);