function tabuada( num ) {
    console.log(`Tabuada de ${num}`);
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

const num = 7;
tabuada(num);
