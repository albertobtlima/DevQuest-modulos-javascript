let ordens = [
    {cliente: 'Roberto', tipo: 'Compra', quantidade: 56, ativo: 'NFLX34'},
    {cliente: 'Ricardo', tipo: 'Compra', quantidade: 76, ativo: 'AAPL34'},
    {cliente: 'Raphael', tipo: 'Venda', quantidade: 21, ativo: 'GOGl34'}
];

/* let quantidadeDeOrdens = 0;
for (let i = 0; i < ordens.length; i++) {
    quantidadeDeOrdens += ordens[i].quantidade;
};

console.log(quantidadeDeOrdens); */

/* let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem) {
    console.log("Ordem", somaOrdens, ordem);
    return somaOrdens + ordem.quantidade;
}, 0);

console.log(quantidadeDeOrdens); */


let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0);

console.log(quantidadeDeOrdens);
