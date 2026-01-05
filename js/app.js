var quantidadeGetID = document.getElementById("quantidade");
var produtoGetID = document.getElementById("produto");
var listaGetID = document.getElementById("lista-produtos")
var valorDoCarrinho = [];

function adicionar() {
    let quantidade = quantidadeGetID.value
    let valor = parseInt(produtoGetID.value.match(/\d+/g));
    let produto = produtoGetID.value.replace(` - R$${valor}`, "")
    let subtotal = valor*quantidade;

    valorDoCarrinho.push(subtotal);

    let total = somaTotal(valorDoCarrinho);

    alterarListaProduto(quantidade, produto, valor);

}

function somaTotal (arrayDeNumeros) {
    let ValorFinal = arrayDeNumeros.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    }, 0);
    return ValorFinal;
}

function alterarListaProduto (Q, P, V) {
    listaGetID.innerHTML += `<section class="carrinho__produtos__produto"> <span class="texto-azul">${Q}x</span> ${P} <span class="texto-azul">${V}</span> </section>`;
}

