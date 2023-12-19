// IMC Com Funções

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return `IMC: ${imc.toFixed(2)}. Abaixo do peso.`;
    } else if (imc < 25) {
        return `IMC: ${imc.toFixed(2)}. Peso Normal.`;
    } else if (imc < 30) {
        return `IMC: ${imc.toFixed(2)}. Acima do Peso.`;
    } else if (imc < 40) {
        return `IMC: ${imc.toFixed(2)}. Obeso.`;
    } else {
        return `IMC: ${imc.toFixed(2)}. Obesidade Grave.`;
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();


