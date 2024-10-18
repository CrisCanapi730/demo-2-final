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
    describe('Mostrar katas', function() {
        it('debería devolver un string con las descripciones de las katas concatenadas', function() {
            const listaKatas = [
                new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Facil'),
                new Kata('Kata 2', 'Autor B', 'Descripción 2', 'Facil')
            ];
            
            listaKatas[0].mostrar = function() { return 'Kata 1: Descripción 1'; };
            listaKatas[1].mostrar = function() { return 'Kata 2: Descripción 2'; };
            
            const resultadoEsperado = 'Kata 1: Descripción 1Kata 2: Descripción 2';
            assert.strictEqual(mostrarKatas(listaKatas), resultadoEsperado);
        });
        it('debería devolver un string vacío si no hay katas en la lista', function() {
            const listaKatas = [];
        
            const resultadoEsperado = '';
            assert.strictEqual(mostrarKatas(listaKatas), resultadoEsperado);
        });
    });
});


