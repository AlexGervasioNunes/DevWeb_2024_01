function getImage(e) {
    let url_api = document.getElementById('url_api').innerText;
    console.log(url_api);
    fetch(url_api, {
        method: 'GET',
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('id').innerText = data[0].id;
            let imagem = `
    <img class="rounded img-fluid" src="${data[0].url}" />
    `;
            document.querySelector('#imagem_aqui').innerHTML = imagem;
        });
}