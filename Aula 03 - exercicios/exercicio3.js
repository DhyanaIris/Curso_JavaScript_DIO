/*
    Debito = 1
    Dinheiro ou Pix = 2
    creito = 3
*/

const precoProduto = 10;
const formaDePagamento = 1;
const qtdParcelas = 2;

if (formaDePagamento === 1) {
    const valorAPagar = precoProduto - (precoProduto * 0.1);
    console.log(valorAPagar.toFixed(2));
} else if (formaDePagamento === 2) {
    const valorAPagar = precoProduto - (precoProduto * 0.15);
    console.log(valorAPagar.toFixed(2));
} else if (formaDePagamento === 3) {
    if (qtdParcelas <= 2) {
        console.log(precoProduto); 
    } else {
        const valorAPagar = precoProduto + (precoProduto * 0.1);
        console.log(valorAPagar.toFixed(2)); 
    }
} else {
    console.log("Método de pagamento inválido!");
}

