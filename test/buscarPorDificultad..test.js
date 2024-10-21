const assert = require('assert');
const { buscarPorDificultad, arrayKatasConMismaDificultad, mostrarKatas } = require('../src/buscarPorDificultad.js');
const { Kata, CatalogoKata } = require('../src/katas.js');

// Usaremos las clases reales de Kata y CatalogoKata para estas pruebas.

describe('Kata Functions', function() {
    
    describe('buscarPorDificultad', function() {
        let kata;
        beforeEach(function() {
            kata = new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Facil');
        });
        afterEach(function() {
            kata = null;
        });
        it('debería devolver true si la dificultad coincide y el objeto kata tiene las propiedades correctas', function() {
            assert.ok(kata.getNombre(), 'Kata 1');
            assert.ok(kata.getAutor(), 'Autor A');
            assert.ok(kata.getDescripcion(), 'Descripción 1');
            assert.strictEqual(buscarPorDificultad(kata, 'Facil'), true);
            assert.deepStrictEqual(kata, new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Facil'));
        });
    
        it('debería devolver false si la dificultad no coincide y verificar que la dificultad cambia correctamente', function() {
            kata.setDificultad('Media');
            assert.strictEqual(buscarPorDificultad(kata, 'Dificil'), false);
            assert.strictEqual(kata.getDificultad(), 'Media');
            assert.strictEqual(kata.getNombre(), 'Kata 1');
            assert.strictEqual(kata.getAutor(), 'Autor A');
        });
    });
    
    
    describe('arrayKatasConMismaDificultad', function() {
        let catalogo, kata1, kata2, kata3;
        beforeEach(function() {
            catalogo = new CatalogoKata();
            kata1 = new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Facil');
            kata2 = new Kata('Kata 2', 'Autor B', 'Descripción 2', 'Facil');
            kata3 = new Kata('Kata 3', 'Autor C', 'Descripción 3', 'Dificil');
            
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
        });
        afterEach(function() {
            catalogo = null;
            kata1 = null;
            kata2 = null;
            kata3 = null;
        });
    
        it('debería devolver una lista de katas con la misma dificultad', function() {
            const resultado = arrayKatasConMismaDificultad(catalogo, 'Facil');
            assert.strictEqual(resultado.length, 2);
            assert.strictEqual(resultado[0].getDificultad(), 'Facil');
            assert.strictEqual(resultado[1].getDificultad(), 'Facil');
        });
    });
    
    describe('Mostrar katas', function() {
        let listaKatas;
    

        beforeEach(function() {
            listaKatas = [
                new Kata('Kata 1', 'Autor A', 'Descripción 1', 'Facil'),
                new Kata('Kata 2', 'Autor B', 'Descripción 2', 'Facil')
            ];
            listaKatas[0].mostrar = function() { return 'Kata 1: Descripción 1'; };
            listaKatas[1].mostrar = function() { return 'Kata 2: Descripción 2'; };
        });
    
        afterEach(function() {
            listaKatas = null;
        });
    
        it('debería devolver un string con las descripciones de las katas concatenadas', function() {
            const resultadoEsperado = 'Kata 1: Descripción 1Kata 2: Descripción 2';
            assert.strictEqual(mostrarKatas(listaKatas), resultadoEsperado);
        });
    
        it('debería devolver un string vacío si no hay katas en la lista', function() {
            listaKatas = [];
            const resultadoEsperado = '';
            assert.strictEqual(mostrarKatas(listaKatas), resultadoEsperado);
        });
    });
    
});


