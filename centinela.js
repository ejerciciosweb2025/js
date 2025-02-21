/* Entrada de datos*/
let numero  = 0;

/* Variables temporales en el proceso */
let salir   = false;
let i       = 1;
eleccion    = "";

/* Proceso */
while(salir==false && i<=5){
    numero = parseInt(Math.random()*100+1);
    console.log(numero);
    i++;
    eleccion = prompt("Quieres salir s/n");
    if( eleccion=="s"){
        salir = true;
    }
}

/* Resultado* */