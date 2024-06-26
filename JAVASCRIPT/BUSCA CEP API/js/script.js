function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}
const meu_callback = (conteudo) => {
    console.log(conteudo);
    if (!('erro' in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('complemento').value = conteudo.complemento;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert('CEP não encontrado.');
    }
};

function pesquisaCEP(valor) {

    let cep = valor.replace(/\D/g, '');
    if (cep != '') {
        let validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            document.getElementById('rua').value = '...';
            document.getElementById('complemento').value = '...';
            document.getElementById('bairro').value = '...';
            document.getElementById('cidade').value = '...';
            document.getElementById('uf').value = '...';
            let script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        }
        else {
            limpa_formulário_cep();
            alert('Formato de CEP inválido.');
        }
    }
    else {
        limpa_formulário_cep();
    }
}