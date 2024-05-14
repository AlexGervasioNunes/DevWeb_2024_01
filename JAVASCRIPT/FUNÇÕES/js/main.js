function addNums(n1 = 1, n2 = 2, n3 = 3){
    return n1 + n2 + n3;
}

let x = addNums(60, 70, 80);
console.log(x);

let z = myFunc(6, 7, 8);
console.log(z);

function myFunc(n1, n2, n3){
    return n1 * n2 * n3;
}

console.clear();

const Hello = () => {
    return `Hello Arrow Function`
};

const addNums2 = (n1 = 1, n2 = 1) => {
    return n1 + n2
}