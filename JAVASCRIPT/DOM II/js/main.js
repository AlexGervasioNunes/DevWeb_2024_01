let titulo = document.getElementById('titulo');
titulo.innerHTML = 'Olá meus caros alunos!';
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';
let items = document.getElementsByClassName('item');
console.log(items);
items[1].textContent = '你好';
items[3].textContent = 'こんにちは';
items[5].textContent = '안녕하세요';
items[7].textContent = 'नमस्ते';
items[9].textContent = 'مرحبًا';
items[11].textContent = 'привет';
let li = document.getElementsByTagName('li');
console.log(li);
for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#e5e5e5';
    else li[i].style.backgroundColor = '#fff';
}
let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[3].textContent = 'अलविदा';
nome[3].style.backgroundColor = '#fbb';
nome[5].textContent = 'مع السلامة';
nome[5].style.backgroundColor = '#bfb';
let item3 = document.getElementById('item3');
item3.remove();