var admin = {nm:'admin', pw:'admin'}
// Creación de usuario admin para que exista
var arrayU = [];

arrayU.push(admin);

localStorage.setItem('arrayU',JSON.stringify(arrayU));
function registro() {
    // Creación de un objeto Usuario con los elementos del HTML
    let us = {nm:document.getElementById('nm').value, pw:document.getElementById('pw').value};

    let arrayUsuario = JSON.parse(localStorage.getItem('arrayU'));

    arrayUsuario.push(us);

    localStorage.setItem('arrayU',JSON.stringify(arrayUsuario));



}

function comprobar() {
    let arrayU = JSON.parse(localStorage.getItem('arrayU'));

    var nmUsu = document.getElementById('nm').value;
    var pwUsu = document.getElementById('pw').value;
    let u = arrayU.find (u => u.nm == nmUsu && u.pw == pwUsu)
    if(u == undefined) {
        alert('Usuario y/o contraseña incorrecto');
    }else {
        alert('Login correcto');
    }
}


