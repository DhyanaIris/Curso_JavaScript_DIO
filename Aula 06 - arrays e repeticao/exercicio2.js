// const numeros = [1, 2, 3, 4, 5];

// numeros.push(6);
// numeros.push(7);
// numeros.push(8);
// numeros.push(9);
// numeros.push(10);

const numeros = [7, 12, 24];

function numPar( num ) {
    console.log("Procurando números pares.");
    for(let i = 0; i < num.length; i++) {
        const numero = num[i];
        if(numero % 2 === 0) {
            console.log(`${num[i]}, é um número par.`);
        }
    }
}

numPar(numeros);