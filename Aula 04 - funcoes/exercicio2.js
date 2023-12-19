function verifyAge(age) {
    if(age >= 18) {
        return "É de maior";
    } else {
        return "Não é de maior";
    }
}

function main() {
    console.log(verifyAge(10));
    console.log(verifyAge(18));
    console.log(verifyAge(20));
}

main();