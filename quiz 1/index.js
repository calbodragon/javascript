var nombre ="piña";
var cantidad = 20;
var precio =2200 ;

var total= precio * cantidad;

console.log(total);

if (cantidad > 10){
 total = total *0.8
}else{
    total =total *0.9
}

console.log("el nuevo prescio es "+total)
