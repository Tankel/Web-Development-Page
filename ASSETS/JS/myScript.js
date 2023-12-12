// Esto es un pop-up
//alert("Hola Mundo");
/*
    Este es un console.log y sirve para debuggear
*/
console.log("Soy el logger de la consolas");

// !Condicionales
/*
var edad = 19;
if (edad < 12){
    alert("Todavia eres mu pequeño");
}
else if(edad < 19){
    alert("Eres un adolescente");
}
else if(edad < 35){
    alert("Sigues siendo joven");
}
else{
    alert("Eres un viejo");
}
*/
// !Bucles
/*
for(var i = 0; i < 5; i++){
    alert(Soy el alert ${i + 1});
}

var diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
for( dia in diasDeLaSemana){
    alert(diasDeLaSemana[dia]);
}
*/

var texto = "Hola Hamuel ";
var texto2 = "Como tas";
var saludo = texto + texto2;
var grito = texto.toUpperCase();
var normal = texto.toLowerCase();
var letra = texto.charAt(3);
var o = texto.indexOf("o");
var lastO = texto.lastIndexOf("o");

var subcadena = texto.substring(2); //si solo se pone uno es desde el indice que se coloca hasta el final
var subcadena = texto.substring(5, 7); // Desde el 5 al 7

var mensaje = "Hola mundo, soy javascript";
var palabras = mensaje.split(" ") // ["Hola", "mundo,", "Soy", "javascript"]


function sumarYMostrar() {
    num1 = prompt();
    num2 = prompt();
    alert(parseInt(num1, 10) + parseInt(num2, 10));
}


sumarYMostrar();