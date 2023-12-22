// Array comandos básicos
// const alunos = [1, 2, 3, 4];

// alunos.push("teste");

// alunos.push(10);
// console.log(alunos);

// alunos.pop();
// console.log(alunos);

// alunos.shift();
// console.log(alunos);

// Com Strings
// const nome = "Dhyana Iris Peruchi Bardini";

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

const media = soma / notas.length;
console.log(media);

