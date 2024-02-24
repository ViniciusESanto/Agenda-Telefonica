const form = document.getElementById('form-agenda');
const nomes = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha() {
    const inputNomes = document.getElementById('nomes');
    const inputTelefones = document.getElementById('telefones');

    if (nomes.includes(inputNomes.value)) {
        alert(`O nome: ${inputNomes.value} ja foi adicionado!`)
    } else {
        nomes.push(inputNomes.value);
        tel.push (parseFloat(inputTelefones.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomes.value}</td>`;
        linha += `<td>${inputTelefones.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    
    inputNomes.value = '';
    inputTelefones.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}



