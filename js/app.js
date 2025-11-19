var quantidadeGetID = document.getElementById("quantidade");
var produtoGetID = document.getElementById("produto");
var carrinhoGetID = document.getElementById("lista-produtos")
var valorDoCarrinho = [];

function adicionar() {
    let quantidade = quantidadeGetID.value
    let valor = parseInt(produtoGetID.value.match(/\d+/g));
    let produto = produtoGetID.value.replace(` - R$${valor}`, "")
    let subtotal = valor*quantidade;

    valorDoCarrinho.push(subtotal);

    let total = somaTotal(valorDoCarrinho)


    
    console.log(produto)
    console.log(quantidade)
    console.log(valor)
    console.log(subtotal)
    console.log(valorDoCarrinho)
    console.log(total)
    console.log("******************")
    

}

function somaTotal (arrayDeNumeros) {
    let ValorFinal = arrayDeNumeros.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    }, 0);
    return ValorFinal;
}


