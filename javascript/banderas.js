//cargo en un arreglo las imganes de las banderas. Este sera el orden que se mostrarán
let banderas = ["images/Angola.png" , "images/Argelia.png" , "images/Alemania.png" , "images/Venezuela.png" , "images/Albania.png" , "images/Australia.png" , "images/ArabiaSaudi.png" , "images/Aruba.png" , "images/Andorra.png" , "images/Suiza.png" , "images/Azerbaiyan.png" , "images/Armenia.png" , "images/Argentina.png" , "images/Afganistán.png" , "images/Austria.png"]

//arreglo que guardara la opcion correcta
let correcta = [1 , 2 , 0 , 1 ,2 , 1 , 2 , 1 , 0 , 1 , 0 , 1 , 1 , 2 , 1 ];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["REINO UNIDO", "ANGOLA", "PANAMA"]);
opciones.push(["PERU", "ITALIA", "ARGELIA"]);
opciones.push(["ALEMANIA", "SUDAFRICA", "TRINIDAD Y TOBAGO"]);
opciones.push(["COLOMBIA", "VENEZUELA", "GUYANA"]);
opciones.push(["AUSTRALIA", "UCRANIA", "ALBANIA"]);
opciones.push(["NAMIBIA", "AUSTRALIA", "ETIOPIA"]);
opciones.push(["ESTADOS UNIDOS", "AZERBAIYAN", "ARABIA SAUDITA"]);
opciones.push(["MALTA", "ARUBA", "ISLAS MARSHALL"]);
opciones.push(["ANDORRA", "SOMALIA", "NUEVA ZELANDA"]);
opciones.push(["CHEQUIA", "SUIZA", "ESLOVAQUIA"]);
opciones.push(["AZERBAIYAN", "GEORGIA", "ARMENIA"]);
opciones.push(["CHILE", "ARMENIA", "UZBEKISTAN"]);
opciones.push(["URUGUAY", "ARGENTINA", "BRASIL"]);
opciones.push(["PAKISTAN", "TAYIKISTAN", "AFGANISTAN"]);
opciones.push(["BOTSUANA", "AUSTRIA", "REPUBLICA DEMOCRATICA DEL CONGO"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}