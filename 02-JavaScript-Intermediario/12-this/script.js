'use strict'

/* console.log(window);
console.log(window === this);

this.name = 'Ricardo'

function saudar() {
    console.log('this no contexto da função', this);
    console.log('Olá, ' + this.name);
}

saudar() */

/* let usuario = {
    nome: 'Ricardo',
    saudar: function() {
        console.log('this no contexto do metodo', this);
        console.log('this.nome no contexto do metodo', this.nome);
    }
}

usuario.saudar(); */

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
    cozinhar: function(TemperaturaDeCozimento) {
        console.log('this no contexto do objeto comida', this);
        this.temperatura = TemperaturaDeCozimento;
    }    
}

console.log(comida);

comida.cozinhar(100);
console.log(comida);
