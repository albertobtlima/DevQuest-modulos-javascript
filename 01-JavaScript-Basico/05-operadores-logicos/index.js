/* 
    SINAIS DE COMPARAÇÃO

    ==    -> igual -> a==b verdadeiro se A for igual a B (não compara a tipagem)
    ===   -> idêntico -> a===b verdadeiro se A for idêntico a B (compara a tipagem)
    !=    -> deferente -> a!=b verdadeiro se A for diferente de B (não compara a tipagem)
    !==   -> não idêntico -> a!==b verdadeiro se o A não for idêntico a B (compara a tipagem)
    <     -> menor que -> verdadeiro se A for menor que B
    <=    -> menor ou igual que -> verdadeiro se A for menor ou igual a B
    >     -> maior que -> verdadeiro se A for maior que B
    >=    -> maior ou igual que -> verdadeiro se A for maior ou igual a B
*/

const a = 3;
const b = 3;

console.log(a >= b);

/*
    TABELA VERDADE

    AND -> &&
    OR -> ||
    NOT -> !
*/

console.log(a === b && a <= b); // V e V = V
console.log(a === b && a < b);  // V e F = F
console.log(a > b && a === b);  // F e V = F
console.log(a > b && a < b);    // F e F = F

console.log(a === b || a <= b); // V e V = V
console.log(a === b || a < b);  // V e F = V
console.log(a > b || a === b);  // F e V = V
console.log(a > b || a < b);    // F e F = F

console.log(!(a === b));        // false
console.log(!(a < b));          // true
