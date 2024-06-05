const ratings = {
    tpom: 4.9,
    ww: 4.8,
    madagascar: 4.8,
    dm3: 4.8,
    dm2: 4.5,
    tslop: 4.5,
    e: 4.5,
    fd: 4.5,
    fn: 4.2,
    dm: 4.2,
};
const starsTotal = 5;
let product;
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');
document.addEventListener('DOMContentLoaded', getRatings);
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;
    if (rating > 5) {
        alert('Por favor, classifique APENAS entre 0 e 5!');
        return;
    }
    if (rating == '') {
        alert('Você precisa colocar algo na caixa em branco para continuar!               Use o teclado do seu computador para digitar um número específico entre zero e cinco.');
        return;
    }
    if (rating < 0) {
        alert('Classificações negativas não podem ser colocadas neste campo!');
        return;
    }
    ratings[product] = rating;
    getRatings();
});

function getRatings() {
    for (let rating in ratings) {
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10
            }%`;
        document.querySelector(`.${rating} .stars-inner`).style.width =
            starPercentageRounded;
        document.querySelector(`.${rating} .number-rating`).innerHTML =
            ratings[rating];
    }
}