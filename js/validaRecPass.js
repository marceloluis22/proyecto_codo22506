const email = document.getElementById("mail")
const tel = document.getElementById("tel")
const parrafo = document.getElementById("warnings")

let entrar = true

function recPass() {
    let mensaje = ""
    
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
        mensaje = mensaje + `El telefono no es valido / `
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


function checkMail(valor) {
    reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    return (reEmail.test(email.value)) 

}

function checkTelefono(valor) {
    reEmail = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/
    return (reEmail.test(tel.value)) 
}

