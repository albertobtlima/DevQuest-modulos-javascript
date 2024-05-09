/*
    Estados da Promise:

    Pendente
    Realizada -> Resolve
    Recusada  -> Reject
    Estabelecida
*/



let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('começando a ferver água')
            resolve();
        } else {
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão')
        }
    });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = false;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log('fazendo café');
