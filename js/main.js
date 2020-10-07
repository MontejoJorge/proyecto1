if (localStorage.getItem('usu') == null){
    alert("No hay ningun usuario loggeado");
    window.location.href = ('../index.html');
}else {
    document.getElementById('uName').innerHTML = localStorage.getItem('usu');
}