/** Diseñar un algoritmo que lea una palabra 
 * y cuente cuantas vocales a, e, i, o y u contiene la palabra escrita.
 */


/** Entrada de datos */
let palabra ="";
let respuesta ="aeiou";
let contadorRespuestaVocales;
let respuestaVocales="";
/*let respuestaPorVocal=0;*/
/*let letraa  =0;
let letrae  =0;
let letrai  =0;
let letrao  =0;
let letrau  =0;*/
palabra = prompt("Escribe una palabra");


/** Proceso */
for(i=0;i<palabra.length;i++){
    contadorRespuestaVocales=0;
    for(j=0;j<respuesta.length;j++){
        if(palabra[i]==respuesta[j]){
            contadorRespuestaVocales++;
        }
        
    }
    respuestaVocales=respuestaVocales+contadorRespuestaVocales;
    /*console.log(i);
    console.log(palabra[i]);*/
    /*if(palabra[i]=='a'){
        letraa++;
    }
    else if(palabra[i]=='e'){
        letrae++;    
    }
    else if(palabra[i]=='i'){
        letrai++;    
    }
    else if(palabra[i]=='o'){
        letrao++;    
    }
    else if(palabra[i]=='u'){
        letrau++;    
    }*/

}
/*respuestaPorVocal=0;
for(z=0;z<respuestaVocales.length;z++){
    if(respuestaPorVocal>0){
        respuestaPorVocal++;
    }
}
console.log("Respuesta por vocal del string: "+respuestaPorVocal);*/



/*Salida*/
console.log(palabra);
/*console.log("La letra a aparece ... "+letraa);
console.log("La letra e aparece ... "+letrae);
console.log("La letra i aparece ... "+letrai);
console.log("La letra o aparece ... "+letrao);
console.log("La letra u aparece ... "+letrau);*/

console.log(respuestaVocales);
