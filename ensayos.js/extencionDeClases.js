/*class persona {
    constructor(nombre,edad){
        this.nombre= nombre;
        this.edad=edad;
    }
saludar(){
    console.log("Hola,mi nombre es " + this.nombre +". tengo" + this.edad);
}
}

let martin = new persona("Martin", 26);
martin.saludar(); //Hola, mi nombre es Martin. tengo 26 */


class programador extends persona {
    constructor(nombre,edad,añosDeExperiencia){
        super (nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear (){
        console.log("soy " + this.nombre + "tengo "+ this.edad + "Codeo desde hace " + this.añosDeExperiencia + " años");
    }
}

let Martin = new persona ("Martin", 26);
let programador = new programador ("Maria", 37, 4);
Martin.saludar();
programador.codear();