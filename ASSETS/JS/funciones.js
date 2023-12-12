//var MSJ = "";
function crearMSJ(nombre){
    MSJ = "Hola "+ nombre + " crayolaaa";
    return MSJ
}

//crearMSJ("yola");
//alert(crearMSJ("yola"));
//alert("hola");

function validaMSJ(nombre){
    for(var i=0; i<10; i++)  {
        if(nombre.indexOf(''+i) >= 0){
            return false
        }
    }
    return true
}

do{
    var nombre = prompt("Dame un nombre");
    var flag = validaMSJ(nombre);
    
    if(flag){
        alert("Hola"+nombre);
        //break
    }else{
        mensajeAgresivo = "QUE ME DES UN NOMBRE AAAAAAAAAAAA";
        alert(mensajeAgresivo)
    }
    //var result = /^[a-zA-Z]+$/.test(inputString);
}while(!flag)