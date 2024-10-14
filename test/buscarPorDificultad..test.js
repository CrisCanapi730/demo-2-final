const assert = require('assert');
const { buscarPorDificultad, arrayKatasConMismaDificultad, mostrarKatas } = require('../src/buscarPorDificultad.js');
const { Kata, CatalogoKata } = require('../src/katas.js');

// Usaremos las clases reales de Kata y CatalogoKata para estas pruebas.

describe('Kata Functions', function() {
    
    describe('buscarPorDificultad', function() {
        it('debería devolver true si la dificultad coincide', function() {
            const kata = new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Facil');
            assert.strictEqual(buscarPorDificultad(kata, 'Facil'), true);
        });

        it('debería devolver false si la dificultad no coincide', function() {
            const kata = new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Media');
            assert.strictEqual(buscarPorDificultad(kata, 'Dificil'), false);
        });
    });
    describe('arrayKatasConMismaDificultad', function() {
        it('debería devolver una lista de katas con la misma dificultad', function() {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripción 2', 'Facil');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripción 3', 'Dificil');
            
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);

            const resultado = arrayKatasConMismaDificultad(catalogo, 'Facil');
            assert.strictEqual(resultado.length, 2);
            assert.strictEqual(resultado[0].getDificultad(), 'Facil');
            assert.strictEqual(resultado[1].getDificultad(), 'Facil');
        });
    });
    it('debería devolver una lista vacía si no hay katas con la dificultad especificada', function() {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Facil');
        const kata2 = new Kata('Kata 2', 'Autor B', 'Descripción 2', 'Media');
        
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);

        const resultado = arrayKatasConMismaDificultad(catalogo, 'Dificil');
        assert.strictEqual(resultado.length, 0);
    });

});
