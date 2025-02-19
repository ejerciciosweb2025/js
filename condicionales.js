let nota        = parseInt(prompt("Introduce un número: "));
let resultado   = "";

if(nota<5){
    resultado="Suspenso";
}
else{
    if(nota<6){
        resultado="Aprobado";
    }
    else{
        if(nota<7){
            resultado="Bien";
        }
        else{
            if(nota<8.5){
                resultado="Notable";
            }
            else{
                if(nota<10){
                    resultado="Sobresaliente";
                }
                else{
                    resultado="Matricula de honor";
                }
            }
        }
    }
} 
console.log(resultado);
