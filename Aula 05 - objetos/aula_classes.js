class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    //Metodo
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
}

function compararPessoa(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}


const dhyana = new Pessoa("Dhyana", 23);
// dhyana.nome = "Dhyana";
// dhyana.idade = 23;

const iris = new Pessoa("Iris", 24);
// iris.nome = "Iris";
// iris.idade = 24;

// console.log(dhyana);
// console.log(iris);

// dhyana.descrever();
// iris.descrever();

compararPessoa(dhyana, iris);
