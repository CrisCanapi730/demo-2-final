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

        it('should return undefined if no kata with the given id is found', function() {
            const catalogo = new CatalogoKata();
            const result = catalogo.buscarPorId(999);
            assert.strictEqual(result, undefined);
        });
        it('should handle an empty list without errors', function() {
            const catalogo = new CatalogoKata();
            const result = catalogo.buscarPorId(1);
            assert.strictEqual(result, undefined);
        });
    });
    describe('#buscarPorNombre()', function() {
        it('should find all katas with the given name', function() {
          // Create Kata instances
          const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion 1', 'Facil', 1);
          const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion 2', 'Media', 2);
          const kata3 = new Kata('Kata 2', 'Autor C', 'Descripcion 3', 'Dificil', 3);
          const catalogo = new CatalogoKata();
          catalogo.agregarKata(kata1);
          catalogo.agregarKata(kata2);
          catalogo.agregarKata(kata3);
    
          // Test buscarPorNombre
          const result = catalogo.buscarPorNombre('Kata 2');
          assert.strictEqual(result.length, 2);
          assert.strictEqual(result[0].getNombre(), 'Kata 2');
          assert.strictEqual(result[1].getNombre(), 'Kata 2');
        });
    
        it('should return an empty array if no katas with the given name are found', function() {
          const catalogo = new CatalogoKata();
          const result = catalogo.buscarPorNombre('NonExistentKata');
          assert.strictEqual(result.length, 0);
        });

        it('should handle case insensitivity', function() {
            // Create Kata instances with different cases
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion 1', 'Facil', 1);
            const kata2 = new Kata('kata 2', 'Autor B', 'Descripcion 2', 'Media', 2);
            const kata3 = new Kata('KATA 2', 'Autor C', 'Descripcion 3', 'Dificil', 3);
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
      
            // Test buscarPorNombre
            const result = catalogo.buscarPorNombre('KATA 2');
            assert.strictEqual(result.length, 2);
        });
        it('should handle an empty list without errors', function() {
            const catalogo = new CatalogoKata();
            const result = catalogo.buscarPorNombre('Kata 1');
            assert.strictEqual(result.length, 0); // The list should be empty
        });
    });

    describe('#buscarPorDescripcion()', () => {
        it('debería encontrar una kata por descripción', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción de kata 1', 'Fácil');
            const kata2 = new Kata('Kata2', 'Autor2', 'Descripción de kata 2', 'Intermedio');
    
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
    
            const resultado = catalogo.buscarPorDescripcion('Descripción de kata 1');
            assert.strictEqual(resultado.length, 1);
            assert.strictEqual(resultado[0].getDescripcion(), 'Descripción de kata 1');
        });
    });
    
});