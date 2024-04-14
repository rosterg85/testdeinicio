class Persona{
     constructor(n, a,e, s, p , al){
        this.nombre=n;
        this.apellido=a;
        this.edad=e;
        this.sexo=s;
        this.peso=p;
        this.altura=al;
        this.identificacion=123456;
    }
    obtenerIMC = function (x,y) {
        let resultado;
    return resultado=x/(y*y);
    }

    get _identificacion(){
        return this.identificacion;
    }
    desplegarIMC(){
        
        console.log(this.obtenerIMC(this.peso,this.altura));

}
    getNombre(){
        return this.nombre;
    }
    setNombre(newNombre){
        this.nombre=newnombre;
    }
    getEdad(){
        return this.edad;
    }
    setEdad(edad){
        this.edad=edad;
    }

    Saludar(){
console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`)
//console.log("Hola soy "+ this.nombre +"y tengo "+ this.edad)
    }
}

class Estudiante extends Persona{
    constructor (nombre,apellido,edad,carrera){
        super(nombre,apellido,edad);
    this.carrera=carrera;
    }
    Saludar(){
        console.log(`Hola soy ${this.nombre} , tengo ${this.edad} años y estudios ${this.carrera}`);
        }

}


let persona1=new Persona("Juan","Perez",20,"m",80,173); //let es una variable const es para constantes
persona1.Saludar();
persona1.desplegarIMC();
let IMC=persona1.obtenerIMC(persona1.peso,persona1.altura);
console.log(IMC);
//persona1.setEdad(30);
/*
console.log(persona1.nombre)
persona1.Saludar();


const estudiante1 = new Estudiante("Juan","Perez",20,"Ing. Fisica");
console.log(estudiante1.nombre);
console.log(estudiante1.carrera);
estudiante1.Saludar();
*/
//console.log(persona1._identificacion);
//console.log(persona1.obteneridentificacion(5,5));