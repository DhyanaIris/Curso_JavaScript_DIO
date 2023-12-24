const { gets, print } = require('./funcoes-auxiliares');

// const numerosSorteados = [];

// for(let i = 0; i < 5; i++) {
//     // const numero = gets();
//     // numerosSorteados.push(numero);
//     numerosSorteados[i] = gets();
// }

// let maiorValor = 0;

// for(let i = 0; i < numerosSorteados.length; i++) {
//     // const numero = numerosSorteados[i];
//     if(numerosSorteados[i] > maiorValor) {
//         maiorValor = numerosSorteados[i];
//     }
// }

const quantidadeDeAlunos = gets();
let maiorValor = 0;

for(let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets()
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);