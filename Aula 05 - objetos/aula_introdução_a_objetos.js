const pessoa = {
    nome: "Dhyana",
    idade: 23,

    //Metodos
    descrever: function () {
        //this representa o contexto que esta inserido, nesse caso, o objeto pessoa
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    } 
};

pessoa["nome"] = "teste";
pessoa.nome = "teste";

// console.log(pessoa["nome"]);

// const atributo = "idade";
// console.log(pessoa[atributo]);

// pessoa.nome = "Iris";
// pessoa.idade = 24;
// pessoa.descrever = function() {
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();

// pessoa.altura = 1.56;
// delete pessoa.nome;

// console.log(pessoa);