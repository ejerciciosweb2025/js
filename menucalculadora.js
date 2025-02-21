function menu(){
    console.log(" Menú que se ha de mostrar hasta que se pulse el 5.");
    console.log("-----------------------MENU------------------------");
    console.log("1 - Realizar Suma");
    console.log("2 - Reealizar Resta ");
    console.log("3 - Realizar multiplicación");
    console.log("4 - Realizar una division");
    console.log("5 - Salir del programa");
    let opcion = prompt("Escribe una opción del menu");
    return opcion;
}

function esNumero(){
    numero1     = prompt("Escribe el primer numero");
    console.log(numero1);
    console.log( !isNaN(numero1));
    letra ='a';
    console.log(letra);
    console.log(!isNaN(letra));
}

function suma( numero1, numero2){
    let resultado;
    resultado = numero1+numero2;
    return resultado;
}

function suma2(){
    let resultado =0;
    numero1     = prompt("Escribe el primer numero");
    numero1     = parseInt(numero1);
    numero2     = parseInt(prompt("Escribe el segundo numero"));
    resultado   = numero1 + numero2;
    return resultado;
}
function resta2(){
        let resultado =0;
        numero1     = prompt("Escribe el primer numero");
        numero1     = parseInt(numero1);
        numero2     = parseInt(prompt("Escribe el segundo numero"));
        resultado   = numero1 - numero2;
        return resultado;
}

function producto2(){
    let resultado =0;
    numero1     = prompt("Escribe el primer numero");
    numero1     = parseInt(numero1);
    numero2     = parseInt(prompt("Escribe el segundo numero"));
    resultado   = numero1*numero2;
    return resultado;
}
function division2(){
    let resultado =0;
    numero1= parseInt(prompt("Escribe el primer numero"));
    numero2 = parseInt(prompt("Escribe el segundo numero"));
    resultado = numero1/numero2;
    return resultado;
}
/**    */
let eleccion="1";
let n1=0;
let n2=0;
let operacion=0;
let sumatorio=0;
let sustracion=0;
let multiplicacion=0;
let division=0;

while(eleccion!="5"){
    eleccion = menu();
    if(eleccion=="5"){
        break;
    }

    /*
    n1 = prompt("Escribe el primer numero");
    n1 = parseInt(n1);
    n2 = parseInt(prompt("Escribe el segundo numero"));*/
    
    /* switch(eleccion){
        case "1":
            sumatorio  = suma2();
            /* sumatorio = suma(n1,n2); 
            operacion = sumatorio;
            break;
        case "2":
            sustracion  = resta2();
            operacion = sustracion;
            break;
        case "3":
            multiplicacion = producto2();
            operacion = multiplicacion;
            break;
        case "4" :
            division = division2();
            operacion = division;
            break;
    }
    */

    if(eleccion =="1"){
        sumatorio  = suma2();
        operacion = sumatorio;
    }
    else if(eleccion=="2"){
        sustracion  = resta2();
        operacion = sustracion;
    }
    else if(eleccion=="3"){
        multiplicacion = producto2();
        operacion = multiplicacion;
    }
    else if(eleccion=="4"){
        division = division2();
        operacion = division;
    }
    /* console.log(eleccion); 
    */
}
/* esNumero(); */

console.log("El resultado total de las operaciones es: "+operacion);
alert("El resultado total de las operaciones es: "+operacion);