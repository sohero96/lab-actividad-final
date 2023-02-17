/* formulario laboratorio */


//identificacion elementos html
var miformulario=document.getElementById('formulario');
var campoNombre=document.getElementById('nombre');
var campoEmail=document.getElementById('email');
var campoContrasena=document.getElementById('contrasena');
var campoContrasenaRepetida=document.getElementById('contrasenaRepetida');

//error evitar null general
var todosMsjError=document.querySelectorAll(' .formulario-error');
var msjErrorNombre=document.getElementById('formularioerror0');
var msjErrorEmail=document.getElementById('formularioerror1');
var msjErrorContrasena=document.getElementById('formularioerror2');
var msjErrorContrasenaRepetida=document.getElementById('formularioerror3');


//error 
var todosErrores=document.querySelectorAll(' .error');
var errorNombre=document.getElementById('error-nombre');
var errorEmail=document.getElementById('error-email');
var errorContrasena=document.getElementById('error-contrasena');
var errorContrasenaRepetida=document.getElementById('error-contrasena-repetida'); 
var mal=document.getElementById('mal');

//valor inicial variables
var valorNombre=null;
var valorEmail=null;
var valorContrasena=null;
var valorContrasenaRepetida=null;

//expresiones regulares
var patronNombre=/^[\w\sñáéíóú]{3,20}$/i;
var patronEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
var patronContrasena=/^[0-9]{4,8}$/;




function nombre(evento){

    //borramos posibles mensajes iniciales
    campoNombre.classList.remove('incorrecto');
    errorNombre.style.display="none";
    msjErrorNombre.style.display="none";

    valorNombre=campoNombre.value;
   
   if(valorNombre.length===0){
        campoNombre.classList.add('incorrecto');
        errorNombre.style.display="none";
        msjErrorNombre.style.display="block";
        evento.preventDefault();
    }else  if(!patronNombre.test(valorNombre)){
        campoNombre.classList.add('incorrecto');
        msjErrorNombre.style.display="none";
        errorNombre.style.display="block";
        evento.preventDefault();
    }else if(patronNombre.test(valorNombre)){
        campoNombre.classList.add('correcto');
        evento.preventDefault();
    }
}

function validarEmail(caso){

    campoEmail.classList.remove('incorrecto');
    errorEmail.style.display="none";
    msjErrorEmail.style.display="none";
    valorEmail=campoEmail.value;

    if(!patronEmail.test(valorEmail) && valorEmail.length!=0){
       campoEmail.classList.add('incorrecto');
       msjErrorEmail.style.display="none";
       errorEmail.style.display="block";
        caso.preventDefault();

    }else if(valorEmail.length==0){
        campoEmail.classList.add('incorrecto');
        errorEmail.style.display="none";
        msjErrorEmail.style.display="block";
        caso.preventDefault();

    }else if(patronEmail.test(valorEmail)){
        campoEmail.classList.add('correcto');
        caso.preventDefault();
    }

}

function validarContrasenas (dato){
    valorContrasena=campoContrasena.value;
    valorContrasenaRepetida=campoContrasenaRepetida.value;

    campoContrasena.classList.remove('incorrecto');
    campoContrasena.classList.remove('correcto');
    errorContrasena.style.display="none";
    msjErrorContrasena.style.display="none";
    campoContrasenaRepetida.classList.remove('correcto');
    campoContrasenaRepetida.classList.remove('incorrecto');
    errorContrasenaRepetida.style.display="none";
    //msjErrorContrasenaRepetida.style.display="none"; 


    mal.style.display="none";
   
    if(valorContrasena.length==0){
        msjErrorContrasena.style.display="block";
        campoContrasena.classList.add('incorrecto');
        dato.preventDefault();
    }else if(!patronContrasena.test(valorContrasena)){
        errorContrasena.style.display="block";
        campoContrasena.classList.add('incorrecto');
        dato.preventDefault();
    }else if(patronContrasena.test(valorContrasena)){
        errorContrasena.style.display="none";
        campoContrasena.classList.add('correcto');
        dato.preventDefault();
    }
    
    
    if(valorContrasenaRepetida.length==0){
            msjErrorContrasenaRepetida.style.display="block";
            campoContrasenaRepetida.classList.add('incorrecto');
            dato.preventDefault();
    
        }else if(!patronContrasena.test(valorContrasenaRepetida)){
            errorContrasenaRepetida.style.display="block";
            campoContrasenaRepetida.classList.add('incorrecto');
            dato.preventDefault();
        }else if(patronContrasena.test(valorContrasenaRepetida)){
            errorContrasenaRepetida.style.display="none";
            campoContrasenaRepetida.classList.add('correcto');
            dato.preventDefault();
        }

        if(valorContrasena!=valorContrasenaRepetida){
            msjErrorContrasenaRepetida.style.display="none";

            errorContrasenaRepetida.style.display="none";
            campoContrasenaRepetida.classList.add('incorrecto');
            mal.style.display="block";
            dato.preventDefault();
        }else if(valorContrasena==valorContrasenaRepetida){
            errorContrasenaRepetida.style.display="none";
            mal.style.display="none";
            campoContrasenaRepetida.classList.add('correcto');
            campoContrasena.classList.add('correcto');

        }

       
    }

    function enviar(){
        if(patronEmail.test(valorEmail) && patronEmail.test(valorEmail) && valorContrasena==valorContrasenaRepetida){
        alert('La inscripción ha sido correcta.');
    }
    }
    
  

//evento submit
miformulario.addEventListener('input', nombre);
miformulario.addEventListener('input', validarEmail);
miformulario.addEventListener('input', validarContrasenas);
miformulario.addEventListener('submit', enviar);
