/** Entrada de datos - qué necesito*/
let num1 = parseInt(prompt("Introduce el numero 1"));
let num2 = parseInt(prompt("Introduce el numero 2"));
let num3 = parseInt(prompt("Introduce un tercer número"));

/* Datos intermedios .. variables que uso para realizar el algoritmo */

/** Para la salida */
let resultado = "";

/* Proceso */
if ((num1 >= num2) && (num1 >= num3)){
    resultado = (+num1+" es el mayor");
}
    else{
        if ((num2>=num1) && (num2 >= num3)){
            resultado = (+num2+" es el mayor");
        }
        else{
            if ((num3>=num1) && (num3>=num2)){
                resultado = (+num3 +" es el mayor");
            }
            else {
                resultado = ("son igusles");
            }
        }

    }
    /** Salida */
    console.log(resultado);




