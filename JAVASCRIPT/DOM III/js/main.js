let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'Mudei o texto aqui');
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#000';
    document.querySelector('#my-span').style.color = '#fff';
    document.querySelector('#my-span').style.fontWeight = '1000';
};
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px dashed #c0c0c0';
    listaLi[i].style.padding = '5px';
}
console.log(listaLi);
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'));
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#f0f0f0'));