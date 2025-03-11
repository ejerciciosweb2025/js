function menu(){
    let opcion =1;
    do{
        console.log("---------------MENU----------------------");
        console.log("1-Jugar al juego de piedra papel y tijera");
        console.log("2-Salir del programa");
        
        opcion = prompt("Escribe que opción deseas realizar");
        console.log("-----------------------------------------");

        if( opcion==1){
            generoJugadores();
        }
        else{
            console.log("Gracias por usar el programa");
        }

    }while(opcion!=2);
}

menu();