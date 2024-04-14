function validarNombre(){
    var nombre = document.getElementById("nombre").value;
    console.log(nombre);
    if(nombre == ""){
       document.getElementById("errorNombre").style.display="block";
       document.getElementById("errorNombre").innerHTML="El campo es obligattorio";
    } 
    else{ 
       document.getElementById("errorNombre").style.display="none";
    }
}

document.getElementById("btnEnviar").addEventListener("click",validarNombre);