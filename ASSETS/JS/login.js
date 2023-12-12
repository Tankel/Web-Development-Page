var imagen = document.getElementById("imagen");

//alert("El width de la imagen es: "+ imagen.style.width);

localStorage.setItem("usrName", "luis");
localStorage.usrPwd = "luis123"; //*******
localStorage["usrAge"] = "20";

//alert("Bienvenido " + localStorage.getItem("usrName"));
//alert("Tu pasword es: " + localStorage.usrPwd);
//alert("Tu edad es: " +localStorage["usrAge"]);


/* INSTRUCCIONES
Cargar info e insertar en los h4
Pasword no se publica (longitid de *) = longitud del paswword 
*/

// Recuperar datos del localStorage
var storedName = localStorage.getItem("usrName");
var storedPwd = localStorage.getItem("usrPwd");
var storedAge = localStorage.getItem("usrAge");

// Actualizar los elementos <h4> 
var name_h4 = document.getElementById("usrName");
var pwd_h4 = document.getElementById("usrPwd");
var age_h4 = document.getElementById("usrAge");

function checkData(){
    if(name_h4.value == storedName && pwd_h4.value == storedPwd){
        alert("Has accedido correctamente 🫡");
        //window.location.href = "https://www.google.com.mx";
        window.location.replace("../../PAGES/PRACTICES/getNodeInfo.html");
    }else{
        alert("El usuario o contraseña son incorrectos");
    }
}

var btn = document.getElementById("btn");
btn.addEventListener("click", checkData);


