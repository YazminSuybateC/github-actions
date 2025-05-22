const { multiplicar } = require('./index.js');

test('La multiplicacion de 2 * 3 es igual a 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
})