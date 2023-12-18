const numero = 0;
const isNumeroPar = (numero % 2) === 0;

if (numero === 0) {
  console.log("O número é inválido")
} else if (isNumeroPar) {
  console.log("Sim");
} else {
  console.log("Não");
}