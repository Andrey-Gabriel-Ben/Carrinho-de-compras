var quantidadeGetID = document.getElementById("quantidade");
var produtoGetID = document.getElementById("produto");
var carrinhoGetID = document.getElementById("lista-produtos")


function adicionar() {
    let quantidade = quantidadeGetID.value
    let valor = produtoGetID.value.match(/\d+/g);
    let produto = produtoGetID.value.replace(` - R$${valor}`, "")



}