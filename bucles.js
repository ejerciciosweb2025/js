/** repetir si sabemos for sino while o para menus que tenemos do while */
let i=0;
for( i=1;i<=5;i=i+1){
    console.log(i);
}

j=0;
while(j<5){
    console.log(j);
    j=j+1;

}

/* let centinela = true;

while(centinela==true){
    cadena = prompt("Introduce Adios para salir del bucle");
    if(cadena=="Adios"){
        centinela = false;
    }
}
*/
let opcion=1;
do{
    alert("\n1-Crea una tabla");
    alert("\n2-Crea algo");
    alert("\n3-Crea ");
    alert("\n5-Salir");
    opcion=parseInt(prompt("Elige la opción del menú: "));
}while(opcion!=5);