var quantidadeGetID = document.getElementById("quantidade");
var produtoGetID = document.getElementById("produto");
var listaGetID = document.getElementById("lista-produtos");
var totalGetid = document.getElementById("valor-total")
var valorDoCarrinho = [];

function adicionar() {
    let quantidade = quantidadeGetID.value;
    let valor = parseInt(produtoGetID.value.match(/\d+/g));
    let produto = produtoGetID.value.replace(` - R$${valor}`, "");
    let subtotal = valor*quantidade;

    valorDoCarrinho.push(subtotal);
    
    let total = somaTotal(valorDoCarrinho);

    alterarListaProduto(quantidade + "x", produto, valor, false);

    alterarTotal(total);
    
};


function limpar() {

    valorDoCarrinho = [];

    alterarTotal("");

    alterarListaProduto(null, null, null, true);

};


function somaTotal (arrayDeNumeros) {
    let ValorFinal = arrayDeNumeros.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    }, 0);
    return ValorFinal;
}

function alterarListaProduto (Q, P, V, limpar = false) {
    if (limpar) {
        listaGetID.innerHTML =`<section class="carrinho__produtos__produto"> <span class="texto-azul"></span>  <span class="texto-azul"></span> </section>`;
    } else {
        listaGetID.innerHTML +=`<section class="carrinho__produtos__produto"> <span class="texto-azul">${Q}</span> ${P} <span class="texto-azul">${V}</span> </section>`;
    };
};

function alterarTotal (VT) {
    totalGetid.innerHTML = `<span class="texto-azul" id="valor-total">${VT}</span>`;
};


