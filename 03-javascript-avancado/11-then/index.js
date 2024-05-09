let ferverAgua = (chaleiraEstaNoFogao, FogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && FogaoEstaLigado) {
      console.log('começando o processo de ferver água...');
      resolve();
    } else {
      console.log('é necessario colocar a chaleira com água no fogão.')
      reject();
    }
  })
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let passarCafe = () => console.log("passando café...")

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe);
//console.log("fazendo café!");
