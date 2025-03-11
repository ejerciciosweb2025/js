let valorAleatorio = Math.random()*10;
console.log(Math.ceil(valorAleatorio));
let caracter ='    casa   de Maria    ';

let miLista = new Array();
let miLista2 = [];
caracter = caracter.trim();
caracter = caracter.toUpperCase();
console.log(caracter);
caracter = caracter.toLowerCase();

//caracter = caracter.split(" ");
console.log(caracter);



miLista.push("Hola");
miLista.push("gato");
miLista.push("Abecedario");
miLista2.push("Hola2");
miLista2.push("perro");
//miLista.pop();
//miLista2.pop();
miLista.sort();

console.log( miLista.includes("gato"));
console.log(miLista);
console.log(miLista2);

document.write("Escribo dentro de mi cuerpo de texto");
alert("mostrar en la pantalla");
respuesta = confirm("Te parece bien");
