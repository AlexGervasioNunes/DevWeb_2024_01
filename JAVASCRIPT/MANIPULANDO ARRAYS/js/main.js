const Nomes = [
    {
        id: 1,
        nome: 'Wally - 4800',
        isCompleted: true,
    },
    {
        id: 2,
        nome: 'Wallace - 4700',
        isCompleted: true,
    },
    {
        id: 3,
        nome: 'Wesley - 6100',
        isCompleted: false,
    },
    {
        id: 4,
        nome: 'William - 5150',
        isCompleted: false,
    },
    {
        id: 5,
        nome: 'Winderson - 5300',
        isCompleted: false,
    },
];
const meuArray = [
    { nome: 'Wally', salário: 4800 },
    { nome: 'Wallace', salário: 4700 },
    { nome: 'Wesley', salário: 6100 },
    { nome: 'William', salário: 5150 },
    { nome: 'Winderson', salário: 5300 },
];

const mapText = Nomes.map((valor) => {
    return valor.nome;
});

const salarios = [4700, 4800, 5150, 5300, 6100];

const newArray = salarios.map(Math.sqrt);

const salario = [4700, 4800, 5150, 5300, 6100];

console.clear();

console.log(` `);
console.log(`        - - - / / / - - -`);
console.log(`          Método forEach`);
console.log(`        - - - / / / - - -`);
console.log(` `);
console.log(`//Nomes dos funcionários e seus salários`);
console.log(` `);

Nomes.forEach((test) => console.log(test.nome));

console.log(` `);
console.log(`        - - - / / / - - -`);
console.log(`           Método map`);
console.log(`        - - - / / / - - -`);
console.log(` `);

console.log('Salários:');
console.log(salarios);
console.log('Reajustar 5%');
console.log(newArray);

console.log(` `);
console.log(`        - - - / / / - - -`);
console.log(`           Método filter`);
console.log(`        - - - / / / - - -`);
console.log(` `);
console.log(`//Mostre somente salários mais que 5000!`);
console.log(` `);

let filtroslr = salario.filter((slr) => {
    return slr >= 5000;
});
console.log(filtroslr);

console.log(` `);
console.log(`        - - - / / / - - -`);
console.log(`           Método find`);
console.log(`        - - - / / / - - -`);
console.log(` `);
console.log(`//Encontre o Wally!`);
console.log(` `);

console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'Wally';
    })
);