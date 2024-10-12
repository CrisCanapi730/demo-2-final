class Usuario {
    constructor(nombre, descripcion) {
        this._nombre = nombre;
        this._descripcion = descripcion;
    }

    getNombre() {
        return this._nombre;
    }

    getDescripcion() {
        return this._descripcion;
    }
}

class Estudiante extends Usuario {
    constructor(nombre, descripcion, promedio) {
        super(nombre, descripcion);
        this._promedio = promedio;
        this._tipo = "estudiante"; // Convierte en privado
    }

    getTipo() {
        return this._tipo;
    }

    getPromedio() {
        return this._promedio;
    }
}

class Docente extends Usuario {
    constructor(nombre, descripcion, calificacion) {
        super(nombre, descripcion);
        this._calificacion = calificacion;
        this._tipo = "docente"; // Convierte en privado
    }

    getTipo() {
        return this._tipo;
    }

    getCalificacion() {
        return this._calificacion;
    }
}

module.exports = { Usuario, Estudiante, Docente };
