class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularViagem(km, precoCombustivel) {
        return (km * this.gastoMedioPorKm) * precoCombustivel;
    }
}

const onix = new Carro("Chevro", "Vermelho", 1/10);
console.log(onix.calcularViagem(100, 4.75).toFixed(2));