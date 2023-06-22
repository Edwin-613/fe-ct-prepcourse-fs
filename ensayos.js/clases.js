/* clases sintaxis funcion constructora
function Auto(puertas,color,marca,modelo,año,ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.ruedas = ruedas;
}
 
let miPrimerAuto = new Auto(4,"plateado","Mazda","Demio",2009,4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.marca); 
console.log(miPrimerAuto.modelo); 
//retornara Auto {
  puertas: 4,
  color: 'plateado',
  marca: 'Mazda',
  modelo: 'Demio',
  'año': 2009,
  ruedas: 4
}
Mazda
Demio*/

/*sintaxis ESPRECION DE CLASE 
class Auto{
    constructor(marca,modelo,color,año){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.año = año;
    }
}
let miSegundoAuto = new Auto("kia","sorento","plateado",2023);

console.log(miSegundoAuto);
console.log(miSegundoAuto.modelo);
console.log(miSegundoAuto.año);
//Auto {
    marca: 'kia',
    modelo: 'sorento',
    color: 'plateado',
    'año': 2023
  }
  sorento
  2023 */