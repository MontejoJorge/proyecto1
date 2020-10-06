// Zona de creación de objetos de prueba
var admin = {nm:'admin', pw:'admin'}

var event = {fecha:'2020-10-31', cita:'Jawlelin'}
var arrayU = [];
var arrayE = [];
arrayU.push(admin);
arrayE.push(event);
localStorage.setItem('arrayU',JSON.stringify(arrayU));
localStorage.setItem('arrayE',JSON.stringify(arrayE));


mostrarUsu();
//----------------------------------------------------------

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

function addEvent(){
    let mensaje ="";
    let arrayE = JSON.parse(localStorage.getItem('arrayE'));
    let ev = {fecha:document.getElementById('dt').value, cita:document.getElementById('ev').value}
    arrayE.push(ev);
    arrayE.sort(function(a, b){
        var fecha1 =new Date(a.fecha), fecha2 = new Date(b.fecha)
        return fecha1-fecha2 //sort by date ascending
    });
    arrayE.forEach(e => mensaje = mensaje + e.fecha +": \n"+ e.cita+"\n" );
    document.getElementById('ta').value = mensaje;
    localStorage.setItem('arrayE', JSON.stringify(arrayE));

}
function mostrarUsu(){

    let arrayU = JSON.parse(localStorage.getItem('arrayU'));
    let div =  document.getElementById('du');
    let listadoU = "";
    for(x = 0; x<arrayU.length; x++){
       listadoU = listadoU +arrayU[x].nm+" "+"<input type='button' value='Eliminar Usuario' onclick='eliminarUsu'>"+"<br>"
}
    div.innerHTML = listadoU;

}

function eliminarUsu(){


}

