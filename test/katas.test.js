<<<<<<< HEAD
const { expect } = require('chai');
const ordenarPorDescripcion = require('../src/katas.js'); // adjust the path accordingly

describe('ordenarPorDescripcion', () => {
  it('should sort the list by description in ascending order', () => {
    const obj1 = { getDescripcion: () => 'banana' };
    const obj2 = { getDescripcion: () => 'apple' };
    const obj3 = { getDescripcion: () => 'cherry' };
    const list = [obj1, obj2, obj3];

    ordenarPorDescripcion.call({ listaKatas: list });

    expect(list[0].getDescripcion()).to.equal('apple');
    expect(list[1].getDescripcion()).to.equal('banana');
    expect(list[2].getDescripcion()).to.equal('cherry');
  });

  it('should handle an empty list', () => {
    const list = [];
    ordenarPorDescripcion.call({ listaKatas: list });
    expect(list).to.be.empty;
  });

  it('should handle a list with one item', () => {
    const obj = { getDescripcion: () => 'banana' };
    const list = [obj];

    ordenarPorDescripcion.call({ listaKatas: list });

    expect(list[0].getDescripcion()).to.equal('banana');
  });

  it('should sort ignoring case sensitivity', () => {
    const obj1 = { getDescripcion: () => 'Banana' };
    const obj2 = { getDescripcion: () => 'apple' };
    const obj3 = { getDescripcion: () => 'cherry' };
    const list = [obj1, obj2, obj3];

    ordenarPorDescripcion.call({ listaKatas: list });

    expect(list[0].getDescripcion()).to.equal('apple');
    expect(list[1].getDescripcion()).to.equal('Banana');
    expect(list[2].getDescripcion()).to.equal('cherry');
  });

  it('should handle descriptions with special characters', () => {
    const obj1 = { getDescripcion: () => 'banana!' };
    const obj2 = { getDescripcion: () => 'apple@' };
    const obj3 = { getDescripcion: () => 'cherry#' };
    const list = [obj1, obj2, obj3];

    ordenarPorDescripcion.call({ listaKatas: list });

    expect(list[0].getDescripcion()).to.equal('apple@');
    expect(list[1].getDescripcion()).to.equal('banana!');
    expect(list[2].getDescripcion()).to.equal('cherry#');
  });

  it('should handle null descriptions gracefully', () => {
    const obj1 = { getDescripcion: () => 'banana' };
    const obj2 = { getDescripcion: () => null };
    const obj3 = { getDescripcion: () => 'apple' };
    const list = [obj1, obj2, obj3];

    ordenarPorDescripcion.call({ listaKatas: list });

    expect(list[0].getDescripcion()).to.equal('apple');
    expect(list[1].getDescripcion()).to.equal('banana');
    expect(list[2].getDescripcion()).to.equal(null);
  });
=======
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
>>>>>>> 23ab775f63992e21cc18d997193124b9652171ef
});
