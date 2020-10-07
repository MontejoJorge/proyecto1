// Zona de creación de objetos de prueba
var admin = {nm:'admin', pw:'admin'};
localStorage.clear('usu');
var event = {fecha:'2020-10-31', cita:'Jawlelin', dc:'Soy la vane grupo'}
var arrayU = [];
var arrayE = [];
arrayU.push(admin);
arrayE.push(event);
localStorage.setItem('arrayU',JSON.stringify(arrayU));
localStorage.setItem('arrayE',JSON.stringify(arrayE));






mostrarUsu();
mostrarEventos();
//----------------------------------------------------------

function registro() {
    // Creación de un objeto Usuario con los elementos del HTML
    let us = {nm:document.getElementById('nm').value, pw:document.getElementById('pw').value};

    let arrayUsuario = JSON.parse(localStorage.getItem('arrayU'));
    let u = arrayUsuario.find (u => u.nm == document.getElementById('nm').value )
    if(u == undefined){
        arrayUsuario.push(us);
        alert("El usuario ha sido registrado")

        document.getElementById('nm').value ="";
        document.getElementById('pw').value ="";

    }

    else
        alert("Error, ese usuario ya existe")


    localStorage.setItem('arrayU',JSON.stringify(arrayUsuario));
    mostrarUsu();




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
        document.getElementById('nm').value ="";
        document.getElementById('pw').value ="";
        localStorage.setItem('usu', nmUsu);
        window.location.href = ('html/home.html');
    }
}

function addEvent(){

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

function mostrarDescripcion(id){
    let arrayE = JSON.parse(localStorage.getItem('arrayE'));
    alert(arrayE[id].dc);
    localStorage.setItem('arrayE', JSON.stringify(arrayE));
}