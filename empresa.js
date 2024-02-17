const readlineSync = require('readline-sync');

function obtenerMedida(medida, tipo, indice) {
  return +readlineSync.question(`Ingrese la medida de ${tipo} del paquete ${indice + 1}: `);
}

const numeroDePaquetes = +readlineSync.question('Ingrese el número de paquetes que desea enviar: ');

const paquetes = [];

for (let i = 0; i < numeroDePaquetes; i++) {
  const ancho = Number(obtenerMedida('ancho', 'ancho', i));
  const alto = Number(obtenerMedida('alto', 'alto', i));
  const profundidad = Number(obtenerMedida('profundidad', 'profundidad', i));

  const dimensiones = ancho * alto * profundidad;
  const costo = dimensiones * 100;
  let impuesto = 0;

  if (dimensiones > 10000) {
    impuesto = 0.2 * costo;
  } else if (dimensiones > 1000) {
    impuesto = 0.1 * costo;
  }

  paquetes.push({
    dimensiones,
    costo,
    impuesto,
    costoTotal: costo + impuesto,
  });
}

console.log('');

let costoTotalFlete = paquetes.reduce((total, paquete) => total + paquete.costoTotal, 0);
console.log(`1. El costo total del flete es de $${costoTotalFlete}`);

let mayorDimensiones = 0;
let productoMayorDimensiones = 0;

for (let i = 0; i < paquetes.length; i++) {
  if (paquetes[i].dimensiones > mayorDimensiones) {
    mayorDimensiones = paquetes[i].dimensiones;
    productoMayorDimensiones = i + 1;
  }
}

console.log(`2. El producto que tiene mayor dimensiones es: ${productoMayorDimensiones}`);

let costosTotales = paquetes.reduce((total, paquete) => total + paquete.costoTotal, 0);
let costoPromedio = costosTotales / paquetes.length;
console.log(`3. El costo promedio de los productos del flete es de: $${costoPromedio.toFixed(2)}`);

let impuestosTotales = paquetes.reduce((total, paquete) => total + paquete.impuesto, 0);
console.log(`4. La empresa necesita saber cuánto debe pagar de impuestos por el flete: $${impuestosTotales.toFixed(2)}`);
