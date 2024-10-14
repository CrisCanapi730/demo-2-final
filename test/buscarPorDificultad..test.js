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

});
