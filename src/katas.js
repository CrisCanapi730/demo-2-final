export class Kata{
    constructor(nombre, autor, descripcion, dificultad, puntuacion=-1){
        this._nombre = nombre;
        this._autor = autor;
        this._descripcion = descripcion;
        this._dificultad = dificultad;
        this._id = -1;
        this._puntuacion = puntuacion;
        this._estado = "No Terminado";
    }

    getNombre(){
        return this._nombre;
    }
    getAutor(){
        return this._autor;
    }
    getDescripcion() {
        return this._descripcion;
    }
    getDescCorta() {
        return this._descripcion.slice(0, 16) + "...";
    }
    getDificultad() {
        return this._dificultad;
    }
    getId() {
        return this._id;
    }
    getPuntuacion(){
        return this._puntuacion;
    }
    getEstado() {
        return this._estado;
    }



    setNombre(nombre) {
        this._nombre = nombre;
    }
    setAutor(autor) {
        this._autor = autor;
    }
    setDescripcion(desc) {
        this._descripcion = desc;
    }
    setDificultad(dificultad) {
        this._dificultad = dificultad;
    }
    setId(id) {
        this._id = id;
    }
    setPuntuacion(puntuacion){
        if(puntuacion > 100 || puntuacion < 0)
        {
            puntuacion = -1;
        }
        this._puntuacion = puntuacion;
    }
    setEstado(estado) {
        if(estado == "Terminado" || estado == "No terminado") {
            this._estado = estado;
            return true;
        }
        return false;
    }


    mostrar(){
//        return `<button class=\"btn\">Nombre kata: ${this._nombre}, Autor: ${this._autor}</button>`;
    return `<div>Nombre kata: ${this._nombre}, Autor: ${this._autor}</div>`;
    }
    mostrarPuntuacion(){
        let puntuacion = this.getPuntuacion();
        if(puntuacion == -1){
            this.setPuntuacion("Sin calificar");
        }
        return this.getPuntuacion();
    }
    

}

export class CatalogoKata{
    constructor()
    {
        this.listaKatas = [];
        this.cont = 0;
    }

    agregarKata(kata)
    {
        kata.setId(this.cont++);
        this.listaKatas.push(kata);
    }

    eliminarKata(pos) {
        this.listaKatas.splice(pos, 1);
    }

    getLista(){
        return this.listaKatas;
    }

    mostrarCatalogoKatas(){
        let mensaje = "";
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            mensaje+=this.listaKatas[i].mostrar();
        }
        return mensaje;
    }

    buscarPorId(id) {
        for(let i = 0; i< this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getId() == id)
            return this.listaKatas[i];
        }
    }
    buscarPorNombre(nombreKata){
        const coincidencias = [];
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getNombre().toLowerCase() === nombreKata.toLowerCase()){

                coincidencias.push(this.listaKatas[i]);
            }
        }
        return coincidencias;
    }

    buscarPorAutor(nombreAutor){
        const coincidencias = [];
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getAutor() === nombreAutor){
                coincidencias.push(this.listaKatas[i]);
            }
        }
        return coincidencias;
    }

    buscarPorDescripcion(descripcion){
        const coincidencias = [];
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getDescripcion() === descripcion){
                coincidencias.push(this.listaKatas[i]);
            }
        }
        return coincidencias;
    }

    ordenarPorNombre() {
        this.listaKatas.sort((kataA, kataB) => {
            const nombreA = kataA.getNombre().toLowerCase();
            const nombreB = kataB.getNombre().toLowerCase();

            if (nombreA < nombreB) {
                return -1;
            }
            else if (nombreA > nombreB) {
                return 1;
            } else {
                return 0;
            } 
        });
    }
    
    ordenarPorAutor() {
        this.listaKatas.sort((kataA, kataB) => {
            const autorA = kataA.getAutor().toLowerCase();
            const autorB = kataB.getAutor().toLowerCase();
    
            if (autorA < autorB) {
                return -1;
            }
            else if (autorA > autorB) {
                return 1;
            } else {
                return 0;
            } 
        });
    }
    ordenarPorDescripcion() {
        this.listaKatas.sort((kataA, kataB) => {
            const descripcionA = kataA.getDescripcion().toLowerCase();
            const descripcionB = kataB.getDescripcion().toLowerCase();
    
            if (descripcionA < descripcionB) {
                return -1;
            }
            else if (descripcionA > descripcionB) {
                return 1;
            } else {
                return 0;
            } 
        });
    }

    clone() {
        const nuevoCatalogo = new CatalogoKata();
        
        for (const kata of this.listaKatas) {
            const nuevoKata = new Kata(
                kata.getNombre(),
                kata.getAutor(),
                kata.getDescripcion(),
                kata.getDificultad(),
                kata.getPuntuacion()
            );
            nuevoKata.setId(kata.getId());
            nuevoCatalogo.agregarKata(nuevoKata);
        }

        return nuevoCatalogo;
    }
    buscarPorEstado(estado) {
        let coincidencias = [];
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getEstado() === estado){
                coincidencias.push(this.listaKatas[i]);
            }
        }
        return coincidencias;

    }
}