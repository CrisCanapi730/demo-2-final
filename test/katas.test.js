const assert = require('assert');
const { Kata, CatalogoKata } = require('../src/katas.js');


describe('CatalogoKata', function() {
    describe('#ordenarPorDescripcion()', function() {
        it('should sort katas by description in alphabetical order', function() {
        // Crear instancias de Kata
        const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion Z', 'Facil');
        const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion A', 'Media');
        const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion M', 'Dificil');

        const catalogo = new CatalogoKata();
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
        catalogo.agregarKata(kata3);

        catalogo.ordenarPorDescripcion();

        const listaOrdenada = catalogo.getLista();
        assert.strictEqual(listaOrdenada[0].getDescripcion(), 'Descripcion A');
        assert.strictEqual(listaOrdenada[1].getDescripcion(), 'Descripcion M');
        assert.strictEqual(listaOrdenada[2].getDescripcion(), 'Descripcion Z');
        });
    });
});
