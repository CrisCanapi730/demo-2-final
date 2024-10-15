const assert = require('assert');
const { Usuario, Estudiante, Docente } = require('../src/usuario.js');


describe('Usuario', () => {
    it('debería retornar el nombre correcto', () => {
        const usuario = new Usuario('Carlos', 'Usuario de prueba');
        assert.strictEqual(usuario.getNombre(), 'Carlos');
    });
    it('debería retornar la descripción correcta', () => {
        const usuario = new Usuario('Carlos', 'Usuario de prueba');
        assert.strictEqual(usuario.getDescripcion(), 'Usuario de prueba');
    });
});

describe('Estudiante', () => {
    it('debería retornar el tipo "estudiante"', () => {
        const estudiante = new Estudiante('Ana', 'Estudiante de matemática', 90);
        assert.strictEqual(estudiante.getTipo(), 'estudiante');
    });
    
    it('debería retornar el promedio correcto', () => {
        const estudiante = new Estudiante('Ana', 'Estudiante de matemática', 90);
        assert.strictEqual(estudiante.getPromedio(), 90);
    });
});
