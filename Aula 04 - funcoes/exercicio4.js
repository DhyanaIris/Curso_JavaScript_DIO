/*
    Debito = 1
    Dinheiro ou Pix = 2
    creito = 3
*/
function applyDiscont(value, discont) {
    return (value - (value * (discont / 100)));
}

function applyFees(value, fee) {
    return (value + (value * (fee / 100)));
}

function calcPrice(price, paymentType, parcelas) {
    if (paymentType === 1) {
        const valorAPagar = applyDiscont(price, 10);
        console.log(valorAPagar.toFixed(2));
    } else if (paymentType === 2) {
        const valorAPagar = applyDiscont(price, 15);
        console.log(valorAPagar.toFixed(2));
    } else if (paymentType === 3) {
        if (parcelas <= 2) {
            console.log(price); 
        } else {
            const valorAPagar = applyFees(price, 10);
            console.log(valorAPagar.toFixed(2)); 
        }
    } else {
        console.log("Método de pagamento inválido!");
    }
}

function main() {
    const precoProduto = 10;
    const formaDePagamento = 1;
    const qtdParcelas = 2;

    calcPrice(precoProduto, formaDePagamento, qtdParcelas);
}

main();
