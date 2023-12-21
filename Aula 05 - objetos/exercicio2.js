class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    Imc() {
        return this.peso/Math.pow(this.altura, 2).toFixed(2);
    }

    classificarImc() {
        const imc = this.Imc();
        if (imc < 18.5) {
           return `Meu IMC é: ${imc}. Estou abaixo do peso.`;
        } else if (imc < 25) {
            return `Meu IMC é: ${imc}. Estou com o peso normal.`;
        } else if (imc < 30) {
            return `Meu IMC é: ${imc}. Estou acima do peso.`;
        } else if (imc < 40) {
            return `Meu IMC é: ${imc}. Estou obeso.`;
        } else {
            return `Meu IMC é: ${imc}. Estou em obesidade grave.`;
        }
    }
}  

const jose = new Pessoa("José", 70, 1.75);

console.log(jose.classificarImc());