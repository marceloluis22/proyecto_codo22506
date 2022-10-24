const usuario = document.getElementById("usuario")
const clave = document.getElementById("clave")
const parrafo = document.getElementById("warnings")

let entrar = true

function login() {
    let mensaje = ""

    if (!checkPassword(clave.value)) {
        mensaje = mensaje + `La clave no es valida / `
        clave.setAttribute('style', 'border-left: 4px solid #ff0000');
        clave.focus();
        entrar = (entrar && false);
    }
        else {
            clave.setAttribute('style', 'border-left: 4px solid #07e690');
            entrar = (entrar && true);
        }    

    if (!checkUsuario(usuario.value)) {
        mensaje = mensaje + `El Usuario no es valido /`
        usuario.setAttribute('style', 'border-left: 4px solid #ff0000');
        usuario.focus();
        entrar = (entrar && false);
    }
        else {
            usuario.setAttribute('style', 'border-left: 4px solid #07e690');
            entrar = (entrar && true);
        }    


    if(!entrar){
        parrafo.innerHTML = `` + mensaje
    }else{
        parrafo.innerHTML = `Enviado... <br>`+entrar;
    }
  
}

function checkPassword(valor) {
    var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return (myregex.test(clave.value))

}


function checkUsuario(valor) {
    reUsuario = /^\w+$/;
    return (reUsuario.test(usuario.value)) 

}
