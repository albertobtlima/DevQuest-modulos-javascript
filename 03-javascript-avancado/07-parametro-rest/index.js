// function(a, b, ...args) {
//     //...
// }

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem}, ${nomeQuester}`))
};

incentivarQuester('Parabén por chegarem até aqui', 'Ambrozio', 'Bozo', 'Clotilde', 1, true);
