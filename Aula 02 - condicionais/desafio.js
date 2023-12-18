const precoGasolina = 5.79;
const precoEtanol = 3.64;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const isGasolina = true;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if(isGasolina) {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} 

