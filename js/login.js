localStorage.setItem('nm', "admin");
localStorage.setItem('pw', "admin")


function registro() {
     var us = {nm:document.getElementById('nm').value, pw:document.getElementById('pw').value};


    localStorage.setItem('usu', us);


}

function comprobar() {

    var usu = localStorage.getItem('usu');
    alert(usu.nm + usu.pw)

    var nmUsu = document.getElementById('userName').value;
    var pwUsu = document.getElementById('userPw').value;

    if(usu.nm == nmUsu && usu.pw == pwUsu) {
        alert('Loggin correcto');
    }else {
        alert('Usuario y/o contraseña incorrectos');
    }
}


