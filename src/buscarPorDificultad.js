function buscarPorDificultad(instKata, dificultad){
    return instKata.getDificultad() === dificultad;
}

export function arrayKatasConMismaDificultad(lista, dificultad){
    return lista.getLista().filter(instKata => buscarPorDificultad(instKata, dificultad));
}

export function mostrarKatas(listaKatas){
    let mensaje = "";
    for(let i = 0; i<listaKatas.length ; i++){
        mensaje += listaKatas[i].mostrar();
    }
    return mensaje;
}

