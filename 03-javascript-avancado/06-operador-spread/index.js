const pessoas = ['Roberto', 'Ricardo', 'Raphael'];
console.log(...pessoas);

/* Concatenar dois Arrays */

//let pessoas1 = ['Roberto', 'Ricardo', 'Raphael'];
//let pessoas2 = ['Pedro', 'João', 'Paulo'];

//pessoas1 = pessoas1.concat(pessoas2);

//pessoas1 = [...pessoas1, ...pessoas2];
//console.log(pessoas1);

/* Clonar Objeto */

const pessoa1 = {nome: 'Roberto', idade: 33};

const objetoCLonado = {...pessoa1};

console.log(objetoCLonado);
console.log(pessoa1);
