/** Entrada de datos */
let num1 = parseInt(prompt("Numero 1: "));
let num2 = parseInt(prompt("Numero 2: "));
let num3 = parseInt(prompt("Numero 3: "));

/*candidato eligo un numero mayor* */
/* let mayor = num1;*/
/* Si mi numero es menor lo cambio por el mayor */
/* if(mayor < num2){
    mayor = num2;
}
*/

/******Candidato con 3 numeros*********  */
let mayor = num1;
if(mayor < num2){
    mayor = num2;
    if(mayor<num3 ){
        mayor = num3;
    }
}
else{
    if(mayor<num3){
        mayor = num3;
    }
} 

console.log(mayor);