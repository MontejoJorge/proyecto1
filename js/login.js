var admin = {nm:'admin', pw:'admin'}

var arrayU = [];

arrayU.push(admin);

localStorage.setItem('arrayU',JSON.stringify(arrayU))
function registro() {
    let us = {nm:document.getElementById('nm').value, pw:document.getElementById('pw').value};

    let arrayUsuario = JSON.parse(localStorage.getItem('arrayU'));

    arrayUsuario.push(us);
    localStorage.setItem('arrayU',JSON.stringify(arrayUsuario));
    let arrayP = JSON.parse(localStorage.getItem('arrayU'));
    for (x =0 ; x<arrayP.length; x++)
        alert(arrayP[x].nm)


}

function comprobar() {
    var arrayU = JSON.parse(localStorage.getItem('arrayU'));

    var nmUsu = document.getElementById('userName').value;
    var pwUsu = document.getElementById('userPw').value;
    let u = arrayU.find (u => u.nm == nmUsu && u.pw == pwUsu)
    if(u == undefined) {
        alert('Usuario y/o contraseña incorrecto');
    }else {
        alert('Login correcto');
    }
}


