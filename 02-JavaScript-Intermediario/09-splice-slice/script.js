// Slice
let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva'];
let frutasExtraidas = frutas.slice(1, 3);

console.log(frutas);
console.log(frutasExtraidas);

//---------------------------------------------------------

// Splice
//let frutasExtraidas2 = frutas.splice(1, 2);

//console.log(frutasExtraidas2);

let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pêra');
console.log(frutas);
