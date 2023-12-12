var parrafos = document.getElementsByTagName("p");
var pNombre = document.getElementById("parrafoNombre");
var pLorem = document.getElementsByName("parrafoLorem");

console.log(parrafos);
console.log(pNombre);
console.log(pLorem);

alert(parrafos[0].textContent);
alert(pNombre.textContent);
alert(pLorem[0].textContent);

var header3 = document.createElement("h3");
var header3txt = document.createTextNode("Este es el fin de la pagina");
//ligamos el texto al elemento
header3.appendChild(header3txt);
//ligamos el elemento al body
document.body.appendChild(header3);

pNombre.parentNode.removeChild(pNombre);
