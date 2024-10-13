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
});
