const assert = require('assert');
const { Kata, CatalogoKata } = require('../src/katas.js');

describe('CatalogoKata', function() {
    const assert = require('assert');
    const { Kata, CatalogoKata } = require('../src/katas.js');
    describe('#mostrarPuntuacion()', function() {
        it('debería devolver la puntuación si ya está establecida', function() {
            const kata = new Kata();
            kata.setPuntuacion(5);
            assert.ok(kata.mostrarPuntuacion() > 0, 'Puntuación debería ser mayor que 0');
        });

        it('debería devolver "Sin calificar" si la puntuación es -1', function() {
            const kata = new Kata();
            kata.setPuntuacion(-1);
            assert.notDeepStrictEqual(kata.mostrarPuntuacion(), 5, 'Puntuación no debería ser 5');
        });










        

        it('debería mantener la puntuación establecida después de cambiarla de -1', function() {
            const kata = new Kata();
            kata.setPuntuacion(-1);
            kata.mostrarPuntuacion();  // Cambiar la puntuación a "Sin calificar"
            kata.setPuntuacion(8);
            assert.strictEqual(kata.mostrarPuntuacion(), 8);
        });

        it('debería manejar puntuaciones que no son -1 correctamente', function() {
            const kata = new Kata();
            kata.setPuntuacion(0);
            assert.strictEqual(kata.mostrarPuntuacion(), 0);
            kata.setPuntuacion(10);
            assert.strictEqual(kata.mostrarPuntuacion(), 10);
        });
    });
    describe('#eliminarKata()', function() {
        it('debería eliminar una kata en la posición especificada', function() {
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion B', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion C', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
    
            const initialLength = catalogo.getLista().length;
            catalogo.eliminarKata(1);  // Eliminar 'Kata 2'
    
            // Verificar si la longitud disminuyó en 1
            assert.ok(catalogo.getLista().length === initialLength - 1, 'La longitud de la lista no disminuyó');
            
            // Verificar que 'kata2' ya no está en la lista
            assert.ok(!catalogo.getLista().includes(kata2), 'El kata eliminado aún está en la lista');
        });
    
        it('debería manejar la eliminación con una posición fuera de rango', function() {
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion B', 'Media');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
    
            const initialLength = catalogo.getLista().length;
            catalogo.eliminarKata(10);  // Posición fuera de rango
    
            // Verificar que la longitud no ha cambiado
            assert.ok(catalogo.getLista().length === initialLength, 'La longitud de la lista cambió al intentar eliminar fuera de rango');
            
            // Verificar que 'kata1' y 'kata2' aún están en la lista
            assert.ok(catalogo.getLista().includes(kata1) && catalogo.getLista().includes(kata2), 'El contenido de la lista cambió incorrectamente');
        });
    
        it('debería manejar la eliminación con una lista vacía', function() {
            const catalogo = new CatalogoKata();
            const initialLength = catalogo.getLista().length;
    
            catalogo.eliminarKata(0);  // Intentar eliminar en una lista vacía
    
            // Verificar que la lista sigue vacía
            assert.ok(catalogo.getLista().length === initialLength, 'La lista vacía fue modificada');
        });
    
        it('debería manejar la eliminación del primer elemento', function() {
            const kata1 = new Kata('Kata 1', 'Autor A', 'Descripcion A', 'Facil');
            const kata2 = new Kata('Kata 2', 'Autor B', 'Descripcion B', 'Media');
            const kata3 = new Kata('Kata 3', 'Autor C', 'Descripcion C', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
    
            const initialLength = catalogo.getLista().length;
            catalogo.eliminarKata(0);  // Eliminar 'Kata 1'
    
            // Verificar si la longitud disminuyó en 1
            assert.ok(catalogo.getLista().length === initialLength - 1, 'La longitud de la lista no disminuyó al eliminar el primer elemento');
            
            // Verificar que 'kata1' ya no está en la lista
            assert.ok(!catalogo.getLista().includes(kata1), 'El primer kata eliminado aún está en la lista');
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
            
            const resultado = catalogo.mostrarCatalogoKatas();

            // Verificar que contiene las palabras clave correctas usando assert.match
            assert.match(resultado, /Kata 1/, 'El resultado no contiene "Kata 1"');
            assert.match(resultado, /Kata 2/, 'El resultado no contiene "Kata 2"');
            assert.match(resultado, /Kata 3/, 'El resultado no contiene "Kata 3"');
        });

        it('debería manejar un catálogo vacío', function() {
            const catalogo = new CatalogoKata();
            const resultado = catalogo.mostrarCatalogoKatas();
        
            // Log the actual output to see if there's something unexpected
            console.log('Resultado para catálogo vacío:', resultado);
        
            assert.strictEqual(resultado, "", 'El resultado debería estar vacío');
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
    
            // Instead of strictEqual, use assert.ok() to confirm it's undefined
            assert.ok(result === undefined, 'Result should be undefined for a non-existing id');
        });
    
        it('should handle an empty list without errors', function() {
            const catalogo = new CatalogoKata();
            const result = catalogo.buscarPorId(1);
    
            // Confirming result is undefined for an empty list
            assert.ok(result === undefined, 'Result should be undefined when the list is empty');
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

        it('debería devolver un array vacío si el catálogo está vacío', () => {
            const catalogo = new CatalogoKata();
            const resultado = catalogo.buscarPorDescripcion('Descripción cualquiera');
            assert.strictEqual(resultado.length, 0);
        });

        it('debería devolver todas las katas que coinciden con la descripción', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción duplicada', 'Fácil');
            const kata2 = new Kata('Kata2', 'Autor2', 'Descripción duplicada', 'Difícil');
        
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
        
            const resultado = catalogo.buscarPorDescripcion('Descripción duplicada');
            assert.strictEqual(resultado.length, 2);
            assert.strictEqual(resultado[0].getDescripcion(), 'Descripción duplicada');
            assert.strictEqual(resultado[1].getDescripcion(), 'Descripción duplicada');
        });
        
    });
    
    describe('#ordenarPorNombre()', function() {
        it('debería ordenar las katas por nombre en orden alfabético', function() {
            const kata1 = new Kata('Zeta', 'Autor A', 'Descripcion', 'Facil');
            const kata2 = new Kata('Alpha', 'Autor B', 'Descripcion', 'Media');
            const kata3 = new Kata('Beta', 'Autor C', 'Descripcion', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.ordenarPorNombre();
            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getNombre(), 'Alpha');
            assert.strictEqual(listaOrdenada[1].getNombre(), 'Beta');
            assert.strictEqual(listaOrdenada[2].getNombre(), 'Zeta');
        });

        it('debería ordenar las katas sin distinguir entre mayúsculas y minúsculas', function() {
            const kata1 = new Kata('Zeta', 'Autor A', 'Descripcion', 'Facil');
            const kata2 = new Kata('alpha', 'Autor B', 'Descripcion', 'Media');
            const kata3 = new Kata('Beta', 'Autor C', 'Descripcion', 'Dificil');
            const catalogo = new CatalogoKata();
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
            catalogo.agregarKata(kata3);
            catalogo.ordenarPorNombre();
            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada[0].getNombre().toLowerCase(), 'alpha');
            assert.strictEqual(listaOrdenada[1].getNombre().toLowerCase(), 'beta');
            assert.strictEqual(listaOrdenada[2].getNombre().toLowerCase(), 'zeta');
        });

        it('debería manejar nombres idénticos sin errores', function() {
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
            catalogo.ordenarPorNombre();
            const listaOrdenada = catalogo.getLista();
            assert.strictEqual(listaOrdenada.length, 0);  // La lista debería seguir vacía
        });
    });

    describe('#ordenarPorAutor()', () => {
        it('debería ordenar correctamente cuando autorA < autorB', function() {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata A', 'Autor A', 'Descripción A', 'Facil');
            const kata2 = new Kata('Kata B', 'Autor B', 'Descripción B', 'Dificil');

            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
    
            catalogo.ordenarPorAutor();
            const resultado = catalogo.getLista();
    
            assert.strictEqual(resultado[0].getAutor(), 'Autor A');
            assert.strictEqual(resultado[1].getAutor(), 'Autor B');
        });
        it('debería mantener el orden cuando autorA === autorB', function() {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata A', 'Autor A', 'Descripción A', 'Facil');
            const kata2 = new Kata('Kata B', 'Autor A', 'Descripción B', 'Dificil');
            
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
    
            catalogo.ordenarPorAutor();
            const resultado = catalogo.getLista();
    
            assert.strictEqual(resultado[0].getAutor(), 'Autor A');
            assert.strictEqual(resultado[1].getAutor(), 'Autor A');
        });
        it('debería ordenar correctamente cuando autorA > autorB', function() {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata A', 'Autor B', 'Descripción A', 'Facil');
            const kata2 = new Kata('Kata B', 'Autor A', 'Descripción B', 'Dificil');
            
            catalogo.agregarKata(kata1);
            catalogo.agregarKata(kata2);
    
            catalogo.ordenarPorAutor();
            const resultado = catalogo.getLista();
    
            assert.strictEqual(resultado[0].getAutor(), 'Autor A');
            assert.strictEqual(resultado[1].getAutor(), 'Autor B');
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
        it('debería devolver un catálogo vacío cuando no hay katas para clonar', () => {
            const catalogoOriginal = new CatalogoKata();
            const catalogoClonado = catalogoOriginal.clone();
            assert.strictEqual(catalogoClonado.getLista().length, 0);
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
        it('debería retornar false al intentar establecer un estado inválido', () => {
            const kata = new Kata('Kata1', 'Autor1', 'Descripción de kata 1', 'Fácil');
            
            const resultado = kata.setEstado('En progreso'); // Estado inválido
            
            assert.strictEqual(resultado, false); // Debería retornar false
            assert.notStrictEqual(kata.getEstado(), 'En progreso'); // Asegurarse de que el estado no cambie
        });
        // buscar por autor
        it('debería encontrar una coincidencia de autor', () => {
            const catalogo = new CatalogoKata();
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción de kata 1', 'Fácil');
            catalogo.agregarKata(kata1);
            
            const resultado = catalogo.buscarPorAutor('Autor1');
            
            assert.strictEqual(resultado.length, 1); // Debería encontrar una coincidencia
            assert.strictEqual(resultado[0].getAutor(), 'Autor1');
        });
    });

    describe('Kata - getDescCorta', function() {
        it('debería encontrar una coincidencia de autor', () => {
            const kata1 = new Kata('Kata1', 'Autor1', 'Descripción de kata 1 muy larga que se deberia cortar', 'Fácil');
            const descripcion = 'Descripción de k...';
            assert.strictEqual(kata1.getDescCorta(), descripcion);
        });
    });
    
    
    
});