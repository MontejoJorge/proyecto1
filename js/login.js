// Zona de creación de objetos de prueba
// Usuario admin que siempre exista para loggear
var admin = {nm:'admin', pw:'Jm12345'};

var arrayU = JSON.parse(localStorage.getItem('arrayU'));

var arrayE = JSON.parse(localStorage.getItem('arrayE'));
escuchadoresDeEventos();

function crearDatos(){



    //Eliminación de variable en local storage para saber si hay algun usuario loggeado
    localStorage.removeItem('usu');

    //Array de eventos y usuarios con su correspondiente push a local storage
    console.log(JSON.parse(localStorage.getItem('arrayU')));


    console.log(arrayE);

    if(arrayU == null){
        arrayU = [];
        arrayU.push(admin);
        localStorage.setItem('arrayU',JSON.stringify(arrayU));
        console.log(JSON.parse(localStorage.getItem('arrayU')));

    }

if(arrayE == null)
{
      arrayE = []
    localStorage.setItem('arrayE',JSON.stringify(arrayE));
    console.log(JSON.parse(localStorage.getItem('arrayE')));
}

}






//Esta funcion de aqui sirve para que una vez que estemos en el field de pass
//al hacer enter se haga click el boton de login



//LLamada a dos funciones para que cada vez que se carge la página salgan los
//eventos y los usuarios recargados
mostrarUsu();
mostrarEventos();
//----------------------------------------------------------

function registro() {
    // Creación de un objeto Usuario con los elementos del HTML
    let us = {nm:document.getElementById('nm').value.toLowerCase(), pw:document.getElementById('pw').value};

    let arrayUsuario = JSON.parse(localStorage.getItem('arrayU'));
    let u = arrayUsuario.find (u => u.nm == document.getElementById('nm').value.toLowerCase() )
    //Comprobación de que la busqueda no haya encontrado ya a ese usuario y permita
    //registrarlo
    if(u == undefined){
        arrayUsuario.push(us);
        alert("El usuario ha sido registrado")

        document.getElementById('nm').value ="";
        document.getElementById('pw').value ="";

    }

    else
        alert("Error, ese usuario ya existe")


    localStorage.setItem('arrayU',JSON.stringify(arrayUsuario));
    //Actualización del listado de usuarios
    mostrarUsu();




}

function comprobar() {
    //Este metodo se encaga de comprobar de que el usuario loggeado existe y de
    // la variable del nombre de usuario para saber que está loggeado
    let arrayU = JSON.parse(localStorage.getItem('arrayU'));

    var nmUsu = document.getElementById('nm').value.toLowerCase();
    var pwUsu = document.getElementById('pw').value;
    let u = arrayU.find (u => u.nm == nmUsu && u.pw == pwUsu)
    if(u == undefined) {
        alert('Usuario y/o contraseña de;a incorrecto');
    }else {
        document.getElementById('nm').value ="";
        document.getElementById('pw').value ="";
        localStorage.setItem('usu', nmUsu);

        window.location.href = ('html/home.html');
    }
}


function addEvent(){
    //Función que se encarga de añadir eventos y comprobar que no existan
    let arrayE = JSON.parse(localStorage.getItem('arrayE'));
    if(document.getElementById('datePicker').value === ""|| document.getElementById('addEventName').value ===""){
        alert("No se puede dejar vacio el titulo ni la fecha.")
    }
    else {
        let ev = {
            fecha: document.getElementById('datePicker').value,
            cita: document.getElementById('addEventName').value,
            dc: document.getElementById('addEventDescription').value
        }

        let w = arrayE.find(e => e.fecha == document.getElementById('datePicker').value && e.cita == document.getElementById('addEventName').value);

        if (w == undefined) {
            arrayE.push(ev);
            document.getElementById('addEventName').value = "";
            document.getElementById('addEventDescription').value ="";

        } else
            alert('Ese evento ya existe en este dia')


        localStorage.setItem('arrayE', JSON.stringify(arrayE));
        mostrarEventos();
    }
}
function mostrarUsu(){
    //Este metodo se encarga de coger todos los usuarios que esten cargados en esa
    //sesión y de mostrarlos por pantalla añadiendo un elemento HTML
    let divU = document.getElementById('addEvent');
    divU.innerHTML = "<p class='title'>A&ntilde; usuario</p><input type='text' id='nm' placeholder='Nombre del usuario'><input type='password' id='pw' placeholder='Contrase&ntilde;a'><input type='button' id='btnAddUsu' value='A&ntilde;adir' onclick='registro()'>"




    let div = document.getElementById('eventInfo');
    let primero = "<div id='eventHistory'><p class='eventDate'>Usuario</p><p class='eventName'>Opciones</p></div>"

    let arrayU = JSON.parse(localStorage.getItem('arrayU'));

    let forma = "";
    for(x = 0; x<arrayU.length; x++){
        forma = forma+"<div class='event'><p class='eventDate'>"+arrayU[x].nm+"</p> <input type='button' id='"+x+"' value='Eliminar usuario' onclick='eliminarUsu(this.id)'></div>"

}

    div.innerHTML = primero + forma;
    localStorage.setItem('arrayU', JSON.stringify(arrayU));
}

function mostrarEventos(){
    //Esta funcion se encarga de listar todos los eventos cargados en localstorage
    //y de mostrarlos por pantalla

    let divE = document.getElementById('addEvent');
    divE.innerHTML = "<p class='title'>A&ntilde;adir evento</p><input type='date' name='date' id='datePicker'><input type='text' name='eventName' id='addEventName' placeholder='Evento'> <input type='text' name='descripcion' id='addEventDescription'><input type='button' value='Añadir' id='addButton' onclick='addEvent()'>"








    let div = document.getElementById('eventInfo');

    let primero = "<div id='eventHistory'><p class='eventDate'>Fecha</p><p class='eventName'>Evento</p><p class='eventDesc'>Descripcion</p></div>"

    let arrayE = JSON.parse(localStorage.getItem('arrayE'));




    arrayE.sort(function(a, b){
        var fecha1 =new Date(a.fecha), fecha2 = new Date(b.fecha)
        return fecha1-fecha2 //sort by date ascending
    });

    let forma = "";
    for (x=0;x<arrayE.length;x++){

        let w = mostrarDescripcion(x);


        forma = forma+"<div class='event'><p class='eventDate'>"+arrayE[x].fecha+"</p> <p class='eventName'>"+arrayE[x].cita+"</p><p class='eventDesc'>"+w+" </p><input type='button' id='"+x+"' value='Eliminar cita' onclick='eliminarEve(this.id)'></div>"
        //<input type='button' value='Mostrar descripcion del evento' id='"+x+"' onclick='mostrarDescripcion(this.id)'>

    }
    div.innerHTML = "";
    div.innerHTML =  primero +forma;


    localStorage.setItem('arrayE',JSON.stringify(arrayE));

}
//Estos dos siguientes elementos se encargan de eliminar usuarios y eventos
//cada vez que un evento/usuario es añadido se usa su posición en el array para asignarles
//el id, de esta manera llamando a la funcion pasandole el id podemos eliminar el usuario
// del array.
function eliminarUsu(id){
    let arrayU = JSON.parse(localStorage.getItem('arrayU'));
    arrayU.splice(id, 1);
    localStorage.setItem('arrayU', JSON.stringify(arrayU));
    mostrarUsu();


}

function eliminarEve(id){
    let arrayE = JSON.parse(localStorage.getItem('arrayE'));
    arrayE.splice(id, 1);
    localStorage.setItem('arrayE', JSON.stringify(arrayE));
    mostrarEventos();

}
//-------------------------------------------------------------------------------------
//Esta funcion se encarga de mostrar en un alert/innerHTML la descripción de cualquier
//evento, al igual que para borrar se trabaja con el id del evento como posicion de array
function mostrarDescripcion(id){
    let arrayE = JSON.parse(localStorage.getItem('arrayE'));
    var desc = arrayE[id].dc;
    localStorage.setItem('arrayE', JSON.stringify(arrayE));
    return desc;
}



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

   // var tf = document.getElementById('pw');
   // tf.addEventListener("keyup",function (event){
        //Nuevo metodo no he conseguido que funcione
      //  if (event.keyCode === 13)
       // {
           // event.preventDefault();
          //  document.getElementById('login').click();
           // escuchadoresDeEventos();
      //  }

  //  });


}