
console.log(`       - - - / / / - - -`)
console.log(`      NÚMEROS, do 1 ao 50.`)
console.log(`       - - - / / / - - -`)

let contador = 1;
while (contador <= 50) {
    console.log(`Número ${contador}`);
    contador++;
}

console.log(`       - - - / / / - - -`)
console.log(`CONTAGEM REGRESSIVA, de 10 a 0.`)
console.log(`       - - - / / / - - -`)

let i = 0,
    text = '';
do {
    text += `Número ${i}\n`;
    i++;
} while (i < 11);
console.log(text);

console.log(`       - - - / / / - - -`)
console.log(`       PARES, de 1 a 100.`)
console.log(`       - - - / / / - - -`)

function pares() {
    for (var i = 0; i < 101; i++) {
        if ((i % 2) == 0) {
                        console.log('Número ' + i);
        }
    }
}
pares();