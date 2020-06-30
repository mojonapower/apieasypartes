
function validar() {
    var patente=document.getElementById("patente").value
    $.ajax({
        url: "http://127.0.0.1:5000/patente"
    }).then(function(data) {
        alert(patente)
       var result=JSON.stringify(data);

       if(result.includes(patente)){
           alert("Patente registrada como Robada")

       }
       else{
           alert("Patente Mal ingresada o no se encuentra en nuestros registros como robada")
       }
    });
}
function user() {
    $.ajax({
        url: "http://127.0.0.1:5000/users"
    }).then(function(data) {
        alert(patente)
       var result=JSON.stringify(data);

       if(result.includes('admin')){
           alert("Codigo QR seguro")

       }
       else{
           alert("Error")
       }
    });
}
