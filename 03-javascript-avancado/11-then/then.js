let ferverAgua = (chaleiraEstaNoFogao, FogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && FogaoEstaLigado) {
      console.log("Passo 1 finalizado: Água foi fervida.");
      resolve();
    } else {
      console.log('é necessario colocar a chaleira com água no fogão.')
      reject();
    }
  })
};

let passarCafe = (aguaFervida) => {
  return new Promise((resolve) => {
    console.log("Passo 2 finalizando: Café foi passado.")
    resolve(true)
  })
};

let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
    console.log("Passo 3 finalizado: Terminei de tomar o café.")
    resolve(true)
  })
};

let lavarXicara = (cafeTomado) => {
  return new Promise((resolve) => {
    console.log("Passo 4 finalizado: Terminei de lavar a xícara.")
    resolve(true)
  })
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(() => {
    return passarCafe();
  })
  .then(() => {
    return tomarCafe();
  })
  .then(() => {
    lavarXicara();
  })
  .then(() => {
    console.log("Finalizado ritual do café, bora trabalhar.")
  });
