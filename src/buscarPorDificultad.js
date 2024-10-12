function buscarPorDificultad(instKata, dificultad) {
    return instKata.getDificultad() === dificultad;
}

function arrayKatasConMismaDificultad(lista, dificultad) {
    return lista.getLista().filter(instKata => buscarPorDificultad(instKata, dificultad));
}

function mostrarKatas(listaKatas) {
    let mensaje = "";
    for (let i = 0; i < listaKatas.length; i++) {
        mensaje += listaKatas[i].mostrar();
    }
    return mensaje;
}

module.exports = { buscarPorDificultad, arrayKatasConMismaDificultad, mostrarKatas };
