// Zona de creación de objetos de prueba
// Usuario admin que siempre exista para loggear
var admin = {nm:'admin', pw:'Jm12345'};
//Eliminación de variable en local storage para saber si hay algun usuario loggeado
localStorage.clear('usu');
var event = {fecha:'2020-10-31', cita:'Jawlelin', dc:'Soy la vane grupo'}
//Array de eventos y usuarios con su correspondiente push a local storage
var arrayU = [];
var arrayE = [];
arrayU.push(admin);
arrayE.push(event);
localStorage.setItem('arrayU',JSON.stringify(arrayU));
localStorage.setItem('arrayE',JSON.stringify(arrayE));





//LLamada a dos funciones para que cada vez que se carge la página salgan los
//eventos y los usuarios recargados
mostrarUsu();
mostrarEventos();
//----------------------------------------------------------

function registro() {
    // Creación de un objeto Usuario con los elementos del HTML
    let us = {nm:document.getElementById('nm').value, pw:document.getElementById('pw').value};

    let arrayUsuario = JSON.parse(localStorage.getItem('arrayU'));
    let u = arrayUsuario.find (u => u.nm == document.getElementById('nm').value )
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

    var nmUsu = document.getElementById('nm').value;
    var pwUsu = document.getElementById('pw').value;
    let u = arrayU.find (u => u.nm == nmUsu && u.pw == pwUsu)
    if(u == undefined) {
        alert('Usuario y/o contraseña de;a incorrecto');
    }else {
        alert('Login correcto');
        document.getElementById('nm').value ="";
        document.getElementById('pw').value ="";
        localStorage.setItem('usu', nmUsu);
        window.location.href = ('html/home.html');
    }
}


function addEvent(){
    //Función que se encarga de añadir eventos y comprobar que no existan
    let arrayE = JSON.parse(localStorage.getItem('arrayE'));
    let ev = {fecha:document.getElementById('dt').value, cita:document.getElementById('ev').value, dc:document.getElementById('dc').value}

    let w = arrayE.find(e => e.fecha == document.getElementById('dt').value && e.cita == document.getElementById('ev').value);

    if (w == undefined) {
        arrayE.push(ev);
        document.getElementById('ev').value = "";
        alert("Evento registrado")
    }else
        alert('Ese evento ya existe en este dia')




    localStorage.setItem('arrayE', JSON.stringify(arrayE));
    mostrarEventos();

}
function mostrarUsu(){
    //Este metodo se encarga de coger todos los usuarios que esten cargados en esa
    //sesión y de mostrarlos por pantalla añadiendo un elemento HTML
    let arrayU = JSON.parse(localStorage.getItem('arrayU'));
    let div =  document.getElementById('du');
    let listadoU = "";
    for(x = 0; x<arrayU.length; x++){
        listadoU = listadoU + "<div><p>"+arrayU[x].nm+"</p></div> "+"<input type='button' id='"+x+"' value='Eliminar Usuario' onclick='eliminarUsu(this.id)'>"+"<br>"

}

    div.innerHTML = listadoU;
    localStorage.setItem('arrayU', JSON.stringify(arrayU));
}

function mostrarEventos(){
    //Esta funcion se encarga de listar todos los eventos cargados en localstorage
    //y de mostrarlos por pantalla
    let div = document.getElementById('de');
    let arrayE = JSON.parse(localStorage.getItem('arrayE'));
    let lista = "";


    arrayE.sort(function(a, b){
        var fecha1 =new Date(a.fecha), fecha2 = new Date(b.fecha)
        return fecha1-fecha2 //sort by date ascending
    });

    for (x=0;x<arrayE.length;x++){
        lista = lista + "<div><p>"+arrayE[x].fecha+" "+arrayE[x].cita+"<br><input type='button' value='Mostrar descripcion del evento' id='"+x+"' onclick='mostrarDescripcion(this.id)'>"+"</p></div> <input type='button' id='"+x+"' value='Eliminar cita' onclick='eliminarEve(this.id)'><br>"
    }

    div.innerHTML = lista;
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
    alert(arrayE[id].dc);
    localStorage.setItem('arrayE', JSON.stringify(arrayE));
}