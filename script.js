
function comprararg () {
  window.location.href = 'Arg.html';
}

function comprarbr () {
  window.location.href = 'br.html';
}

function comprarch () {
  window.location.href = 'ch.html';
}

function comprarcol () {
  window.location.href = 'col.html';
}

function compraruru () {
  window.location.href = 'ur.html';
}

function comprarecu () {
  window.location.href = 'ec.html';
}

function comprarper () {
  window.location.href = 'per.html';
}

function comprarven () {
  window.location.href = 'ven.html';
}

function comprarbol () {
  window.location.href = 'bol.html';
}

function comprarpar () {
  window.location.href = 'par.html';
}




function realizarcompra(){
    window.location.href = "form.html";
    
}

function validar(){

  let usuario=document.getElementById("usuario").value;
  let contraseña=document.getElementById("contraseña").value;

  if (usuario=="proyecto" && contraseña=="1234") {

    alert("Compra realizada");
    
  }else{
    alert ("Intente de nuevo");

  }
}
