const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("mail")
const usuario = document.getElementById("usuario")
const clave = document.getElementById("clave")
const tel = document.getElementById("tel")
const motivo = document.getElementById("motivo")
const parrafo = document.getElementById("warnings")
let entrar = true

function contacto() {
    let mensaje = ""
    if (!checkNommbre(nombre.value)) {
        mensaje = mensaje + `El nombre no es valido / `
        nombre.setAttribute('style', 'border-left: 4px solid #ff0000');
        nombre.focus();
        entrar = false;
        }
        else {
            mensaje = mensaje + ``
            nombre.setAttribute('style', 'border-left: 4px solid #07e690');
            entrar = true;
        }


    if (!checkApellido(apellido.value)) {
        mensaje = mensaje + `El apellido no es valido / `
        apellido.setAttribute('style', 'border-left: 4px solid #ff0000');
        apellido.focus();
        entrar = (entrar && false);
        }
        else {
            mensaje = mensaje + ``
            apellido.setAttribute('style', 'border-left: 4px solid #07e690');
            entrar = (entrar && true);
        }


    if (!checkMail(email.value)) {
        mensaje = mensaje + `El mail no es valido / `
        email.setAttribute('style', 'border-left: 4px solid #ff0000');
        email.focus();
        entrar = (entrar && false);
    }
        else {
            mensaje = mensaje + ``
            email.setAttribute('style', 'border-left: 4px solid #07e690');
            entrar = (entrar && true);
        } 
        
    if (!checkTelefono(tel.value)) {
        mensaje = mensaje + `El telefono no es valido <br>`
        tel.setAttribute('style', 'border-left: 4px solid #ff0000');
        tel.focus();
        entrar = (entrar && false);
    }
        else {
            mensaje = mensaje + ``
            tel.setAttribute('style', 'border-left: 4px solid #07e690');
            entrar = (entrar && true);
        }   


    if(!entrar){
        parrafo.innerHTML = `` + mensaje
    }else{

        parrafo.innerHTML = `Enviado... <br>`
    }
  
}

function checkPassword(valor) {
    var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return (myregex.test(clave.value))

}


function checkNommbre(valor){
    reNombre = /^(?=.{2,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/
    return (reNombre.test(nombre.value)) 
       
   }

function checkApellido(valor){
    reApellido = /^(?=.{2,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/
    return (reApellido.test(apellido.value)) 

   }

function checkUsuario(valor) {
    reUsuario = /^\w+$/;
    return (reUsuario.test(usuario.value)) 

}

function checkMail(valor) {
    reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    return (reEmail.test(email.value)) 

}



function checkTelefono(valor) {
    reEmail = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/
    return (reEmail.test(tel.value)) 
}


