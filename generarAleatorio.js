function generarvalorAleatorio(numero){
    let valorAleatorio = Math.ceil(Math.random()*numero);
    return valorAleatorio;
}

const MAX = 3;
let aleatorio = generarvalorAleatorio(MAX);
console.log(aleatorio);