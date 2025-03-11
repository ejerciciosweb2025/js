function validarNumero(numero){
    let esNumero = false;
    while(esNumero==false){
        if(isNaN(numero)){
            console.log("No es un número");
            numero = prompt("Introduce un número...si quieres salir: ");
        }
        else{
            //console.log("Es un número");
            esNumero=true;
        }
    }
    return parseInt(numero);   
}

let numero = 5;
numero = validarNumero(num);
console.log(numero);