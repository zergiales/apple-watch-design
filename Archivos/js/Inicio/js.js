adios = "rojo";
function funcion1(hola) {
    adios = hola;
    if (hola == "verde"){
        document.getElementById("foto1").style.filter="opacity(0%)";
        document.getElementById("foto2").style.filter="opacity(0%)";
        document.getElementById("foto3").style.filter="opacity(0%)";
        document.getElementById("foto4").style.filter="opacity(0%)";
        document.getElementById("foto5").style.filter="opacity(100%)";
        document.getElementById("foto6").style.filter="opacity(0%)";
    }if (hola == "rojo") {
        document.getElementById("foto1").style.filter="opacity(100%)";
        document.getElementById("foto2").style.filter="opacity(0%)";
        document.getElementById("foto3").style.filter="opacity(0%)";
        document.getElementById("foto4").style.filter="opacity(0%)";
        document.getElementById("foto5").style.filter="opacity(0%)";
        document.getElementById("foto6").style.filter="opacity(0%)";
    } if(hola == "azul") {
        document.getElementById("foto1").style.filter="opacity(0%)";
        document.getElementById("foto2").style.filter="opacity(0%)";
        document.getElementById("foto3").style.filter="opacity(100%)";
        document.getElementById("foto4").style.filter="opacity(0%)";
        document.getElementById("foto5").style.filter="opacity(0%)";
        document.getElementById("foto6").style.filter="opacity(0%)";
    }
}

function funcion2() {
    // alert(adios);
    if (adios == "verde"){
        document.getElementById("foto1").style.filter="opacity(0%)";
        document.getElementById("foto2").style.filter="opacity(0%)";
        document.getElementById("foto3").style.filter="opacity(0%)";
        document.getElementById("foto4").style.filter="opacity(0%)";
        document.getElementById("foto5").style.filter="opacity(0%)";
        document.getElementById("foto6").style.filter="opacity(100%)";
    }if (adios == "rojo") {
        document.getElementById("foto1").style.filter="opacity(0%)";
        document.getElementById("foto2").style.filter="opacity(100%)";
        document.getElementById("foto3").style.filter="opacity(0%)";
        document.getElementById("foto4").style.filter="opacity(0%)";
        document.getElementById("foto5").style.filter="opacity(0%)";
        document.getElementById("foto6").style.filter="opacity(0%)";
    } if(adios == "azul") {
        document.getElementById("foto1").style.filter="opacity(0%)";
        document.getElementById("foto2").style.filter="opacity(0%)";
        document.getElementById("foto3").style.filter="opacity(0%)";
        document.getElementById("foto4").style.filter="opacity(100%)";
        document.getElementById("foto5").style.filter="opacity(0%)";
        document.getElementById("foto6").style.filter="opacity(0%)";
    }
}
function funcion3() {
    alert();    
}