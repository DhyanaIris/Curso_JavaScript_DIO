const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`Média: ${media.toFixed(2)}. Reprovação`)
} else if (media <= 7) {
    console.log(`Média ${media.toFixed(2)}. Recuperação.`)
} else {
    console.log(`Média ${media.toFixed(2)}. Passou de semestre.`)
}