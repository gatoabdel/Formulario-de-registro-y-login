
function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (elemento.value == "") {
        alert("El campo nombre no puede ser vacío");
        return false;
    }
    return true;
}

function validaApellido() {
    var elemento = document.getElementById("apellidos");
    if (elemento.value == "") {
        alert("El campo apellido no puede ser vacío");
        return false;
    }
    return true;
}
function validarMail(){
    var correo=document.getElementById("email").value;
    var expresion=/\w+@\w+\.+[a-z]/;
    var expresion2= /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    
    if(expresion.test(correo)||expresion2.test(correo)){
          setCookie("Correo",correo,1);
    
        return true;
    }
    alert("Email no válido");
  
    return false;
    
}
function validarPass(){
    var p1 = document.getElementById("pass").value;
    var expresion=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    
    if(!expresion.test(p1)){
       alert("Contraseña no válida");
        return false;
    }
    setCookie("Contraseña",p1,1);
    return true;
}


function validarPass2(){
    var p1 = document.getElementById("pass").value;
    var p2 = document.getElementById("pass2").value;
    
    if (p1 != p2) {   
        alert("Contraseñas no coinciden");
        return false;
    }
  
    return true;
}




document.getElementById("guardar").addEventListener("click", mostrarContraseña);

function mostrarContraseña(){
    var guardarContra=document.getElementById("guardar");
    var passTbb=document.getElementById("mostrar");
    
    if(guardarContra.checked==true){
        
        passTbb.type="text";
    }
    else{
        passTbb.type="password";
    }
}

document.getElementById("registrar").addEventListener("click",validar);

function validar(e){
    e.preventDefault();
    if(validaNombre()&& validaApellido() && validarPass() && validarPass2()&& validarMail() ){
        //Esto es para activar un mensaje de SE HA REGISTRADO CORRECTAMENTE
       
        document.getElementById("registrado").style.display="block";
      alert("Todo bien");
        return true;    
    }
    else{
        e.preventDefault();
        
        return false;
    }
    
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function deleteCookie(cname){
      return document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

document.getElementById("btnlogin").addEventListener("click",comprobar);
function comprobar(e){
    e.preventDefault();
var a= getCookie("Correo");
var b= getCookie("Contraseña");
    if(document.getElementById("user").value==a &&
      document.getElementById("mostrar").value==b){
        
        document.getElementById("inicioSesion").style.display="block";
       document.getElementById("hola").innerHTML="Bienvenido "+document.getElementById("nombre").value +" "+  document.getElementById("apellidos").value;
     
            document.getElementById("b").style.display="none";
        
    }
    
    
}
document.getElementById("cerrar").addEventListener("click",CerrarSeseion);

function CerrarSeseion(){
    
    document.getElementById("inicioSesion").style.display="none";
   document.getElementById("b").style.display="block";
   
}
document.getElementById("reg").addEventListener("click",registrarse);


function registrarse(){
    document.getElementById("registracion").style.display="block";
       document.getElementById("b").style.display="none";
}
document.getElementById("ini").addEventListener("click",Iniciar);
function Iniciar(){
        document.getElementById("registracion").style.display="none";
     document.getElementById("b").style.display="block";
}

