// mis variables  de entrada
var metrosCuadrados = 0;
var tiposDeImuebles = "";
var valorDeAdministracion =0;
var valorCuotadeAseo =0;
var valorDerechosDelGimnasio =0;
var genero = "";
var edad = 0;
var cantidadDePersonas
//capturas datos de entrada

metrosCuadrados = prompt("digite los metros cuadrados");
tiposDeImuebles = prompt('digite el tipo de inmueble "Casa" o "Apartamento".');
tiposDeImuebles = tiposDeImuebles.toUpperCase();

// procesos de calculo del problema
for (i=0;i<cantidadDePersonas; i++){

    genero=prompt("digite el genero" +(i++));
    edad=prompt("digite la edad"+(i++));
    genero=genero.toLowerCase();

}

valorDeAdministracion=
calcularValorAdministracion(
    metrosCuadrados,
    tiposDeImuebles
    );

valorCuotaDeAseo =
calcularCuotaDeAseo(
valorDeAdministracion)

genero =prompt("digite el genero");
edad = prompt("digite la edad");
genero = genero.toLowerCase();

valorDerechosDelGimnasio=
calcularValorDerechosDelGimnasio(genero,edad);

function calcularCuotaDeAseo(valorDeAdministracion){
return (valorDeAdministracion*0.1)+(metrosCuadrados*1000);
}
function calcularValorAdministracion (mt,t){
    if(t=="CASA"){
    return mt*1500+100000;
    }else if(t=="APARTAMENTO"){
        return mt*1500+50000;
    }else{
        return "tipo de inmueble no valido";
    }
}

function calcularValorDerechosDelGimnasio(genero,edad){
    switch(genero){
        case "masculino" :
            if(edad<40){
                return 10000;
            }else if(edad>=10||edad<20){
                return 20000;
            }else if(edad>=20||edad<40){
                return 15000;
            }else{
                return 0
            }
        break;
       case "femenino" :
            if(edad<10){
                return 10000;
            }else if(edad>=10||edad<18){
                return 12000;
            }else if(edad>=18||edad<35){
                return 80000;
            }else{
                return 0
    }
        break;

}
}



valorDeAdministracion =(valorDeAdministracion*0.1)+(metrosCuadrados*1000)
//salidas del sistema
document.write("el valor de la administracion es " + valorDeAdministracion+"<br>");
document.write("el valor de la cuota de aseo es "+ valorDeAdministracion+"<br>");
document.write("el valor de la cuota del gimnasio es "+ valorDerechosDelGimnasio);
