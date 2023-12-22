let frutas = ['banana', 'maçã', 'laranja', 'pêra'];
let frutasTamanho = frutas.length;

/* for (let i = 0; i < frutasTamanho; i++) {
    console.log('Fruta: ' + frutas[i]);
} */

console.log(frutas);

frutas.push('manga');       // Adiciona o item ao final do array
frutas.unshift('morango')   // Adiciona o item no inicio do array

console.log(frutas);

/*
    frutas.pop()    -> Remove o ultimo item do array (pêra)
    frutas.shift()  -> Remove o primeiro item do array (banana)
*/

frutas.forEach(function(item) {
    console.log('Fruta: ' + item);
})

let posicaoFruta = frutas.indexOf('laranja');
console.log(posicaoFruta);
