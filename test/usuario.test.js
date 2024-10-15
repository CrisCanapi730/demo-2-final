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