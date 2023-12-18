const altura = 1.70;
const peso = 120;

const IMC = peso / Math.pow(altura, 2);

if (IMC < 18.5) {
    console.log(`IMC: ${IMC.toFixed(2)}. Abaixo do peso.`);
} else if (IMC < 25) {
    console.log(`IMC: ${IMC.toFixed(2)}. Peso Normal.`);
} else if (IMC < 30) {
    console.log(`IMC: ${IMC.toFixed(2)}. Acima do Peso.`);
} else if (IMC < 40) {
    console.log(`IMC: ${IMC.toFixed(2)}. Obeso.`);
} else {
    console.log(`IMC: ${IMC.toFixed(2)}. Obesidade Grave.`);
}