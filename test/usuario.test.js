const assert = require('assert');
const { Usuario, Estudiante, Docente } = require('../src/usuario.js');

let usuario, estudiante, docente;

describe('Usuario', () => {
    beforeEach(() => {
        usuario = new Usuario('Carlos', 'Usuario de prueba');
    });

    afterEach(() => {
        usuario = null;
    });

    it('debería retornar el nombre correcto', () => {
        assert.strictEqual(usuario.getNombre(), 'Carlos');
    });

    it('debería retornar la descripción correcta', () => {
        assert.strictEqual(usuario.getDescripcion(), 'Usuario de prueba');
    });
});

describe('Estudiante', () => {
    beforeEach(() => {
        estudiante = new Estudiante('Ana', 'Estudiante de matemática', 90);
    });

    afterEach(() => {
        estudiante = null;
    });

    it('debería retornar el tipo "estudiante"', () => {
        assert.strictEqual(estudiante.getTipo(), 'estudiante');
    });

    it('debería retornar el promedio correcto', () => {
        assert.strictEqual(estudiante.getPromedio(), 90);
    });
    
    it('debería heredar el nombre y la descripción de Usuario', () => {
        assert.strictEqual(estudiante.getNombre(), 'Ana');
        assert.strictEqual(estudiante.getDescripcion(), 'Estudiante de matemática');
    });
});

describe('Docente', () => {
    beforeEach(() => {
        docente = new Docente('Luis', 'Docente de física', 85);
    });

    afterEach(() => {
        docente = null;
    });

    it('debería retornar el tipo "docente"', () => {
        assert.strictEqual(docente.getTipo(), 'docente');
    });

    it('debería retornar la calificación correcta', () => {
        assert.strictEqual(docente.getCalificacion(), 85);
    });

    it('debería heredar el nombre y la descripción de Usuario', () => {
        assert.strictEqual(docente.getNombre(), 'Luis');
        assert.strictEqual(docente.getDescripcion(), 'Docente de física');
    });
});
