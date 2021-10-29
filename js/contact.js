
var form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let inputAsunto = document.querySelector("#asunto");
    let inputNombre = document.querySelector("#nombre");
    let inputEmail = document.querySelector("#email");
    let descripcion = document.querySelector("#descripcion");

    var mensajesError = [];
    if(inputNombre === null || inputNombre.value.length == 0){
        mensajesError.push('ingrese su nombre');
    }
    if(inputAsunto === null || inputAsunto.value.length == 0){
        mensajesError.push('ingrese un asunto');
    }

    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido=expReg.test(inputEmail);
    
    if(valido==false || inputEmail === null || inputEmail.value.length == 0){
        mensajesError.push('el email ingresado no es valido');
    }

    
    error.innerHTML = mensajesError.join(', ');
});
