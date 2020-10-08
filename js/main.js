//Este if se encarga de que cada vez que se acceda a la página web que tiene como
//src este js se encargue de mirar que exista un usuario loggeado, en caso de que no haya
//ningun usuario con acceso se redirige al index


if (localStorage.getItem('usu') == null){
    alert("No hay ningun usuario loggeado");
    window.location.href = ('../index.html');
}else {


    document.getElementById('uName').innerHTML = "Hi, "+ localStorage.getItem('usu');
}
escuchadoresDeEventos();
function escuchadoresDeEventos(){

    let a = document.getElementById('btnUsu');
    a.addEventListener("click", function (event){
            document.getElementById('check').click();
            let ul = document.getElementById('menuList');
            ul.innerHTML = "<li id='btnCal'><a href=#>Inicio</a></li><li id='btnUsu'><a class='active' href='#' >Usuarios</a></li><li><a href='../index.html'>Cerrar sesion</a></li>";
            escuchadoresDeEventos();
            mostrarUsu();
        }
    );
    let b = document.getElementById('btnCal');

    b.addEventListener("click", function (event){
            document.getElementById('check').click();
            let ul = document.getElementById('menuList');
            ul.innerHTML = "<li id='btnCal'><a class='active' href=#>Inicio</a></li><li id='btnUsu'><a  href='#' >Usuarios</a></li><li><a href='../index.html'>Cerrar sesion</a></li>";
            escuchadoresDeEventos();
            mostrarEventos();
        }
    );



}




