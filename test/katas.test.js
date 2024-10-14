const assert = require('assert');
const { Kata, CatalogoKata } = require('../src/katas.js');

describe('CatalogoKata', function() {
    const assert = require('assert');
    const { Kata, CatalogoKata } = require('../src/katas.js');
    describe('#eliminarKata()', function() {
        it('debería eliminar una kata en la posición especificada', function() {
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion B', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion C', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.eliminarKata(1);  // Eliminar 'Kata 2'
            const listaEsperada = [kata1, kata3];
            assert.deepStrictEqual(catalogo.getLista(), listaEsperada);
        });

        it('debería manejar la eliminación con una posición fuera de rango', function() {
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion B', 'Media');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.eliminarKata(10);  // Posición fuera de rango
            const listaEsperada = [kata1, kata2];
            assert.deepStrictEqual(catalogo.getLista(), listaEsperada);
        });

        it('debería manejar la eliminación con una lista vacía', function() {
            const catalogo = new CatalogoKata();
            catalogo.eliminarKata(0);  // Intentar eliminar en una lista vacía
            const listaEsperada = [];
            assert.deepStrictEqual(catalogo.getLista(), listaEsperada);
        });

        it('debería manejar la eliminación del primer elemento', function() {
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion B', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion C', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.eliminarKata(0);  // Eliminar 'Kata 1'
            const listaEsperada = [kata2, kata3];
            assert.deepStrictEqual(catalogo.getLista(), listaEsperada);
        });

        it('debería manejar la eliminación del último elemento', function() {
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion B', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion C', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.eliminarKata(2);  // Eliminar 'Kata 3'
            const listaEsperada = [kata1, kata2];
            assert.deepStrictEqual(catalogo.getLista(), listaEsperada);
        });
    });
    
    describe('#mostrarCatalogoKatas()', function() {
        it('debería mostrar el catálogo de katas correctamente', function() {
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion B', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion C', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            const resultadoEsperado = `${kata1.mostrar()}${kata2.mostrar()}${kata3.mostrar()}`;
            assert.strictEqual(catalogo.mostrarCatalogoKatas(), resultadoEsperado);
        });

        it('debería manejar un catálogo vacío', function() {
            const catalogo = new CatalogoKata();
            const resultadoEsperado = "";
            assert.strictEqual(catalogo.mostrarCatalogoKatas(), resultadoEsperado);
        });

        it('debería mostrar correctamente un catálogo con una sola kata', function() {
            const kata = new Kata('Kata Unica', 'Autor Unico', 'Descripcion Unica', 'Facil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata);
            const resultadoEsperado = kata.mostrar();
            assert.strictEqual(catalogo.mostrarCatalogoKatas(), resultadoEsperado);
        });

        it('debería manejar katas con caracteres especiales en sus descripciones', function() {
            const kata1 = new Kata('Kata #1', 'Autor A', 'Descripcion #1', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion @2', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion &3', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            const resultadoEsperado = `${kata1.mostrar()}${kata2.mostrar()}${kata3.mostrar()}`;
            assert.strictEqual(catalogo.mostrarCatalogoKatas(), resultadoEsperado);
        });
    });

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
        it('debería devolver un array vacío si no encuentra coincidencias', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción de kata 1', 'Fácil');
    
            catalogo.agregarKata(kata1);
    
            const resultado = catalogo.buscarPorDescripcion('Descripción inexistente');
            assert.strictEqual(resultado.length, 0);
        });
    });
    
    describe('#ordenarPorNombre()', function() {
        it('debería ordenar las katas por nombre en orden alfabético', function() {
            // Crear instancias de Kata
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.ordenarPorNombre();
            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getNombre(), 'Kata 1');
            assert.strictEqual(listaOrdenada[1].getNombre(), 'Kata 2');
            assert.strictEqual(listaOrdenada[2].getNombre(), 'Kata 3');
        });

        it('debería ordenar las katas sin distinguir entre mayúsculas y minúsculas', function() {
            // Crear instancias de Kata con nombres en mayúsculas y minúsculas
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion', 'Facil');
            const kata2 = new Kata('kata 2', 'Autor B', 'Descripcion', 'Media');
            const kata3 = new Kata('KATA 3', 'Autor C', 'Descripcion', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.ordenarPorNombre();
            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getNombre().toLowerCase(), 'kata 1');
            assert.strictEqual(listaOrdenada[1].getNombre().toLowerCase(), 'kata 2');
            assert.strictEqual(listaOrdenada[2].getNombre().toLowerCase(), 'kata 3');
        });

        it('debería manejar nombres idénticos sin errores', function() {
            // Crear instancias de Kata con nombres iguales
            const kata1 = new Kata('Kata', 'Autor A', 'Descripcion', 'Facil');
            const kata2 = new Kata('Kata', 'Autor B', 'Descripcion', 'Media');
            const kata3 = new Kata('Kata', 'Autor C', 'Descripcion', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.ordenarPorNombre();
            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getNombre(), 'Kata');
            assert.strictEqual(listaOrdenada[1].getNombre(), 'Kata');
            assert.strictEqual(listaOrdenada[2].getNombre(), 'Kata');
        });

        it('debería ordenar las katas con caracteres especiales', function() {
            const kata1 = new Kata('Kata #1', 'Autor A', 'Descripcion', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.ordenarPorNombre();
            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getNombre(), 'Kata #1');
            assert.strictEqual(listaOrdenada[1].getNombre(), 'Kata 2');
            assert.strictEqual(listaOrdenada[2].getNombre(), 'Kata 3');
        });

        it('debería manejar una lista vacía sin errores', function() {
            const catalogo = new CatalogoKata();
            // Intentar ordenar una lista vacía
            catalogo.ordenarPorNombre();
            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada.length, 0);  // La lista debería seguir vacía
        });
    });

    describe('#ordenarPorAutor()', () => {
        it('debería ordenar las katas por autor en orden alfabético', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Zorro', 'Descripción', 'Fácil');
            const kata2 = new Kata('Kata2', 'Alonso', 'Descripción', 'Intermedio');
            const kata3 = new Kata('Kata3', 'Beta', 'Descripción', 'Difícil');
    
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
    
            catalogo.ordenarPorAutor();
            const listaOrdenada = catalogo.getLista();
    
            assert.strictEqual(listaOrdenada[0].getAutor(), 'Alonso');
            assert.strictEqual(listaOrdenada[1].getAutor(), 'Beta');
            assert.strictEqual(listaOrdenada[2].getAutor(), 'Zorro');
        });
    });

    describe('#clone()', () => {
        it('debería clonar el catálogo de katas', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción de kata 1', 'Fácil');
            const kata2 = new Kata('Kata2', 'Autor2', 'Descripción de kata 2', 'Intermedio');
    
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
    
            const catalogoClonado = catalogo.clone();
    
            // Verifica que ambos catálogos tienen la misma cantidad de katas
            assert.strictEqual(catalogoClonado.getLista().length, catalogo.getLista().length);
    
            // Verifica que las katas clonadas son iguales a las originales (valores coinciden)
            assert.strictEqual(catalogoClonado.getLista()[0].getNombre(), catalogo.getLista()[0].getNombre());
            assert.strictEqual(catalogoClonado.getLista()[1].getNombre(), catalogo.getLista()[1].getNombre());
    
            // Verifica que no son el mismo objeto en memoria
            assert.notStrictEqual(catalogoClonado, catalogo);
            assert.notStrictEqual(catalogoClonado.getLista()[0], catalogo.getLista()[0]);
        });
    });

    describe('#buscarPorEstado()', () => {
        it('debería encontrar katas con el estado "No Terminado"', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción de kata 1', 'Fácil');
            const kata2 = new Kata('Kata2', 'Autor2', 'Descripción de kata 2', 'Intermedio');
            
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
    
            // Por defecto, las katas tienen el estado "No Terminado"
            const resultado = catalogo.buscarPorEstado('No Terminado');
            assert.strictEqual(resultado.length, 2); // Ambas katas están "No Terminadas"
            assert.strictEqual(resultado[0].getEstado(), 'No Terminado');
            assert.strictEqual(resultado[1].getEstado(), 'No Terminado');
        });
        it('debería devolver un array vacío si no hay coincidencias con el estado', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción de kata 1', 'Fácil');
            kata1.setEstado('Terminado');
    
            catalogo.agregarKata(kata1);
    
            const resultado = catalogo.buscarPorEstado('No Terminado');
            assert.strictEqual(resultado.length, 0);
        });
        it('debería encontrar katas con el estado "Terminado"', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción de kata 1', 'Fácil');
            kata1.setEstado('Terminado');
    
            catalogo.agregarKata(kata1);
    
            const resultado = catalogo.buscarPorEstado('Terminado');
            assert.strictEqual(resultado.length, 1);
            assert.strictEqual(resultado[0].getEstado(), 'Terminado');
        });
    });
    
});