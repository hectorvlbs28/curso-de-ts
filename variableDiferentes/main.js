var variableAny;
//variableAny = 10;
// variableAny = 'Hola Mundo';
// variableAny = true;
variableAny = [1, 2, 3];
// variableAny = { nombre: 'Juan', edad: 30 };
console.log("Valor -> ".concat(variableAny));
var variableUnknown;
//variableUnknown = 10;
variableUnknown = 'Hola Mundo';
// variableUnknown = true;
if (typeof variableUnknown === 'number') {
    console.log("Valor -> ".concat(variableUnknown));
}
function throwError(message) {
    throw new Error(message);
}
//throwError('Error de prueba');
function logMessage(message) {
    console.log("Mensaje: ".concat(message));
}
logMessage('Hola Mundo');
