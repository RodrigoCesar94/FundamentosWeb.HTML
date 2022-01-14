let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width ='100%'
email.style.width ='100%'

function validaNome() {
 let txtNome = document.querySelector('#txtNome')

if(nome.value.length < 3){
 txtNome.innerHTML='Tamanho de Nome Insuficiente'
 txtNome.style.color='red'
 }
 else{
 txtNome.innerHTML='Tamanho de Nome OK'
 txtNome.style.color='green'
 nomeOk = true
 }
}   

txt.style.color='black'
function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')
if(email.value.indexOf('@')==-1 || email.value.indexOf('.')== -1){
    txtEmail.innerHTML='E-mail inválido'
    txtEmail.style.color='red'
}
else{
    txtEmail.innerHTML='E-mail válido'
    txtEmail.style.color='green' 
    emailOk = true
}
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >  100){
     txtAssunto.innerHTML = 'Texto Muito Grande, máximo 100 caracteres'
     txtAssunto.style.color = 'yellow';
    }
    if(assunto.value.length < 100){
        //contador de caracteres, verificação
    txtAssunto.innerHTML= 100-assunto.value.length;
    assuntoOk=true
    }
}

function enviar(){

    if(nomeOk==true && emailOk==true && assuntoOk==true){
    alert('Formulário enviado')
    }
    else{
    alert('Prencha os campos corretamente')    
    }
}

function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.height='600px'


}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height='250px'
}