/* has Own Property
Sirve para encontrar una propiedad dentro de un objeto
Ejemplo : */

/*let libro = {autor: "Napoleon Gil", genero: "Educacion Financiera", año: 2020};
let tienePropiedad = libro.hasOwnProperty("genero");
//console.log(tienePropiedad); // true


/*objeto keys 
Sirve para encontrar Todas las propiedades
Ejemplo : */ 

let todasLasPropiedades = object.keys(libro);
return(todasLasPropiedades); 

// actualizar contraseña
let objetoUsuario = {password:12345};
objetoUsuario.password = 613613;
return objetoUsuario;

/*agregar Amigos
let objetoUsuario = {amigos:["baci","jhon","rea"]};
objetoUsuario.amigos.push("yerson");
return objetoUsuario; */

//agregar metodo calculo de descuento.
objetoProducto = {precio:100,porcentajeDeDescuento:0.2};
objetoProducto.calcularPrecioDescuento = function(precio,porcentajeDeDescuento){
  let multiplicacion =  this.precio * this.porcentajeDeDescuento;
  let precioFinal = this.multiplicacion - this.porcentajeDeDescuento;
  console.log(precioFinal);
}
let precioFinal = objetoProducto.calcularPrecioDescuento();
console.log(precioFinal);