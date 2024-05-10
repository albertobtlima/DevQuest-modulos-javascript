let ferverAgua = (chaleiraEstaNoFogao, FogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

    if (typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito."

    if (chaleiraEstaNoFogao && FogaoEstaLigado) {
      console.log("Passo 1 finalizado: Água foi fervida.");
      resolve();
    } else {
      const mensagemDeErro = "é necessario colocar a chaleira com água no fogão."
      reject(mensagemDeErro);
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

let chaleiraEstaNoFogao = 'teste'
let fogaoEstaLigado = false;

async function iniciarProcessoDeFazerCafe() {
  try {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
  }catch (err) {
    console.log(err);
  }finally {
    console.log("Finalizado o ritual de tomar café!");
  }
};

iniciarProcessoDeFazerCafe();
