// Invocando função dentro de outra função

function writeMyName(name) {
    return `Meu nome é ${name}`;
}

function verifyAge(age) {
    if(age >= 18) {
        console.log(`${writeMyName("Dhyana")} e sou de maior`)
    } else {
        console.log("Não é de maior");
    }
}

function main() {
    verifyAge(23);
}

main();