const readlineSync = require('readline-sync');

function obtenerMedida(tipo, indice) {
  return +readlineSync.question(`Ingrese la medida de ${tipo} del paquete ${indice} en cm: `);
}

let cantidadDeEmpaques = +readlineSync.question("¿Cuántos empaques deseas agregar?: ");
let totalDimensiones = 0;
let totalImpuestos = 0;
let totalDelFlete = 0;
let promedioDelCostoDeProductos = 0;
let numeroMayorDimension = 0;
let productoMayorDimensiones=0;
for (let i = 1; i <= cantidadDeEmpaques; i++) {
  let anchoDelPaquete = obtenerMedida('ancho', i);
  let alturaPaquete = obtenerMedida('altura', i);
  let profundidadDelPaquete = obtenerMedida('profundidad', i);

  let calculoDeDimensiones = anchoDelPaquete * alturaPaquete * profundidadDelPaquete * 100;
  totalDelFlete += calculoDeDimensiones;

  let impuestosDelPaquete = 0;

  if (calculoDeDimensiones > 10000) {
    impuestosDelPaquete = calculoDeDimensiones * 0.20;
  } else if (calculoDeDimensiones > 1000) {
    impuestosDelPaquete = calculoDeDimensiones * 0.1;
  }

  totalImpuestos += impuestosDelPaquete;

  if (calculoDeDimensiones > productoMayorDimensiones) {
    productoMayorDimensiones = calculoDeDimensiones;
    numeroMayorDimension = i;
  }
}

totalDimensiones = totalDelFlete + totalImpuestos;
promedioDelCostoDeProductos = totalDimensiones / cantidadDeEmpaques;

console.log(`1. El precio total del flete es: ${totalDimensiones}`);
console.log(`2. El producto de mayores dimensiones es: Paquete ${numeroMayorDimension}`);
console.log(`3. El promedio total del costo de los productos es: ${promedioDelCostoDeProductos}`);
console.log(`4. La empresa debe pagar un total de ${totalImpuestos} en impuestos.`);
