let matrix1 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
]
console.log(`Before`);
console.log(matrix1);
matrix1[0][4] = 9.5;
console.log(`After`);
console.log(matrix1);

console.clear();

let numArray = [1, 2, 3, 4, 5];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

console.clear();

let jabuticaba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let guaraná = jabuticaba.join(` . . . `);

console.log(guaraná);
console.log(typeof guaraná);

console.clear();

let array = [1, 10, 100, 1000, 10000];
console.log(array.length);

console.clear();

const frutas1 = [`Jabuticaba`, `Guaraná`, `Pitaia`, `Mamão`];
let x = frutas1.pop();
console.log(frutas1);
console.log(x);

console.clear();

const frutas2 = [`Jabuticaba`, `Guaraná`, `Pitaia`, `Mamão`];
let y = frutas2.push(`Caqui`);
console.log(frutas2);
console.log(y);

console.clear();

const frutas3 = [`Jabuticaba`, `Guaraná`, `Pitaia`, `Mamão`];
let z = frutas3.shift(); //z=Jabuticaba
console.log(frutas3);
console.log(z);

console.clear();

const frutas4 = [`Jabuticaba`, `Guaraná`, `Pitaia`, `Mamão`];
let w = frutas4.unshift(`Caqui`); //w=2
console.log(frutas4);
console.log(w);

console.clear();

const frutas5 = [`你好`, `こんにちは`, `مرحبًا`, `Bonjour`, `안녕하세요`, `नमस्ते`, `привет`];
delete frutas5[3];
console.log(frutas5);