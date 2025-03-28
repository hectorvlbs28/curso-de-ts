let variableAny: any;

//variableAny = 10;
// variableAny = 'Hola Mundo';
// variableAny = true;
variableAny = [1, 2, 3];
// variableAny = { nombre: 'Juan', edad: 30 };

console.log(`Valor -> ${variableAny}`);

let variableUnknown: unknown;
//variableUnknown = 10;
variableUnknown = 'Hola Mundo';
// variableUnknown = true;

if (typeof variableUnknown === 'number') {
  console.log(`Valor -> ${variableUnknown}`);
}

function throwError(message: string): never {
  throw new Error(message);
}

//throwError('Error de prueba');

function logMessage(message: string): void {
  console.log(`Mensaje: ${message}`);
}

logMessage('Hola Mundo');