//syntasis de un objeto
let persona = {nombre: "jasmine", edad: 28, estudios:{bachiller : true}};
//console.log(persona.edad);

//Asignar o Cambiar el Valor de una propiedad dentro de un objeto.
persona.nombre = "Rosa";
//console.log(persona.nombre);

persona.edad = 28 + " Años";
//console.log(persona.edad);



//ELIMINAR PROPIEDADES CON EL COMANDO DELETE
let autos = {};
autos.marcas = ["Mazda", "Kia" ,"Mercedes"];
delete autos.marcas; 
console.log(autos); 

//agregar una funcion al objeto.
let misFunciones = {
    saludar: function (){
      console.log ("Hola");
    },
};
misFunciones.saludar();

//Sintaxis de Dot Notacion y Bracket Notacion 

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

//BRACKET NOTATION

atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


let comidas = {};
let diferenciaaEnNotaciones = function (propUno,propDos){
comidas[propUno] = ["frutas","Verduras"];
comidas[propDos] = ["Hamburguesa", "papas fritas"];
};
 diferenciaaEnNotaciones ("sana","noSaludable");
 console.log(comidas);