function devolverNombre(){
    return "camilo";
}
function devolverSaludo(){
    return "Hola";
}
function saludar(cb1, cb2){
    return cb1() + " " + cb2();
}
let resultado = saludar(devolverSaludo, devolverNombre);
//console.log( resultado);







