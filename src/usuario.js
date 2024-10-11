class Usuario {
    constructor(nombre, descripcion) {
        this._nombre = nombre;
        this._descripcion = descripcion;
    }

    getNombre() {
        return this._nombre;
    }
    getDesc() {
        return this._descripcion;
    }
   
}


export class Estudiante extends Usuario{
    constructor(nombre, descripcion, promedio) {
        super(nombre, descripcion);
        this._promedio = promedio;
        this.tipo = "estudiante";
    }

    getTipo() {
        return this.tipo;
    }
}


export class Docente extends Usuario{
    constructor(nombre, descripcion, calificacion) {
        super(nombre, descripcion);
        this._calificacion = calificacion;
        this.tipo = "docente";
    }

    getTipo() {
        return this.tipo;
    }
    
}

