const assert = require('assert');
const { Kata, CatalogoKata } = require('../src/katas.js');

describe('CatalogoKata', function() {
    describe('#ordenarPorDescripcion()', function() {
        it('debería ordenar las katas por descripción en orden alfabético', function() {
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

        it('debería ordenar las katas sin distinguir entre mayúsculas y minúsculas', function() {
            // Crear instancias de Kata con descripciones en mayúsculas y minúsculas
            const kata1 = new Kata('Kata 1', 'Autor A', 'descripcion z', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion A', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion M', 'Dificil');

            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);

            catalogo.ordenarPorDescripcion();

            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getDescripcion().toLowerCase(), 'descripcion a');
            assert.strictEqual(listaOrdenada[1].getDescripcion().toLowerCase(), 'descripcion m');
            assert.strictEqual(listaOrdenada[2].getDescripcion().toLowerCase(), 'descripcion z');
        });
        it('debería manejar descripciones idénticas sin errores', function() {
            // Crear instancias de Kata con descripciones iguales
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion A', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion A', 'Dificil');

            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);

            catalogo.ordenarPorDescripcion();

            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getDescripcion(), 'Descripcion A');
            assert.strictEqual(listaOrdenada[1].getDescripcion(), 'Descripcion A');
            assert.strictEqual(listaOrdenada[2].getDescripcion(), 'Descripcion A');
        });
        it('debería ordenar las katas con caracteres especiales', function() {
            
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion #1', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion A', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion M', 'Dificil');

            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);

            catalogo.ordenarPorDescripcion();

            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getDescripcion(), 'Descripcion #1');
            assert.strictEqual(listaOrdenada[1].getDescripcion(), 'Descripcion A');
            assert.strictEqual(listaOrdenada[2].getDescripcion(), 'Descripcion M');
        });
        it('debería manejar una lista vacía sin errores', function() {
            const catalogo = new CatalogoKata();

            // Intentar ordenar una lista vacía
            catalogo.ordenarPorDescripcion();

            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada.length, 0);  // La lista debería seguir vacía
        });
    });
    describe('#buscarPorId()', function() {
        it('should find the kata with the given id', function() {
          // Create Kata instances with unique ids
          const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion 1', 'Facil', 1);
          const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion 2', 'Media', 2);
          const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion 3', 'Dificil', 3);
          const catalogo = new CatalogoKata();
          catalogo.agregarKata(kata1);
          catalogo.agregarKata(kata2);
          catalogo.agregarKata(kata3);
    
          // Test buscarPorId
          const result = catalogo.buscarPorId(2);
          assert.strictEqual(result.getId(), 2);
          assert.strictEqual(result.getDescripcion(), 'Descripcion 3');
          assert.strictEqual(result.getNombre(), 'Kata 3');
        });
    });
});