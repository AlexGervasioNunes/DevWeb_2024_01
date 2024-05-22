const Clique = () => {
    document.querySelector('#paragraph').style.backgroundColor = '#000';
    document.querySelector('#paragraph').style.color = '#fff';
};

const Click = () => {
    let listaLi = document.querySelectorAll('#li');
    for (i = 0; i < listaLi.length; i++) {
        listaLi[i].style.border = '3px solid #0000FF';
        listaLi[i].style.paddingLeft = '150px';
        listaLi[i].style.paddingRight = '150px';
    }
};