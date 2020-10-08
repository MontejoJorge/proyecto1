//Este if se encarga de que cada vez que se acceda a la página web que tiene como
//src este js se encargue de mirar que exista un usuario loggeado, en caso de que no haya
//ningun usuario con acceso se redirige al index

if (localStorage.getItem('usu') == null){
    alert("No hay ningun usuario loggeado");
    window.location.href = ('../index.html');
}else {


    document.getElementById('uName').innerHTML = "Hi, "+ localStorage.getItem('usu');
}




