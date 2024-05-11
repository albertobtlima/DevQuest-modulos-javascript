const dataAtual = new Date();

const umDiaDepois = new Date(dataAtual);
const umMesAtras = new Date(dataAtual);

const opcoes1 = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const dataFormatada1 = dataAtual.toLocaleDateString('pt-BR', opcoes1);

const opcoes2 = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const formatador = new Intl.DateTimeFormat('pt-BR', opcoes2);
const dataFormatada2 = formatador.format(dataAtual);

umDiaDepois.setDate(dataAtual.getDate() + 1);
umMesAtras.setMonth(dataAtual.getMonth() - 1);

console.log(dataAtual);
console.log(umDiaDepois);
console.log(umMesAtras);
console.log(dataFormatada1);
console.log(dataFormatada2);
