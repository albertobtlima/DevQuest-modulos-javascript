let resultadoDaSoma1 = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log(resultadoDaSoma1(12, 5));

//--------------------------------------------------------------------------------------------

let resultadoDaSoma2 = (numero1, numero2) => numero1 + numero2;
console.log(resultadoDaSoma2(4, 6));

//--------------------------------------------------------------------------------------------

const incentivarQuester1 = nomeQuester => {
    console.log('Parabéns ' + nomeQuester + ', você chegou ao módulo de JS intermediário.');
}

incentivarQuester1('Roberto');

//--------------------------------------------------------------------------------------------

const incentivarQuester2 = nomeQuester => console.log('Parabéns ' + nomeQuester + ', você chegou ao módulo de JS intermediário.')

incentivarQuester2('Alberto');
