import { questionInt } from 'readline-sync';

const N = questionInt("Digite o número de eleitores: ");
let votos = { 1: 0, 2: 0, 3: 0, 9: 0, 0: 0 };
let i = 1;

while (i <= N) {
    const voto = questionInt(`Digite o voto do eleitor ${i} (1, 2, 3, 9 ou 0): `);
    if (voto in votos) {
        votos[voto]++;
    } else {
        console.log("Voto inválido. Por favor, vote novamente.");
        continue;
    }
    i++;
}

console.log("Resultados:");
console.log(`Candidato 1: ${votos[1]} votos`);
console.log(`Candidato 2: ${votos[2]} votos`);
console.log(`Candidato 3: ${votos[3]} votos`);
console.log(`Votos nulos: ${votos[9]} votos`);
console.log(`Votos em branco: ${votos[0]} votos`);

let vencedor = 0;
let maiorVotos = 0;
let j = 1;

while (j <= 3) {
    if (votos[j] > maiorVotos) {
        maiorVotos = votos[j];
        vencedor = j;
    }
    j++;
}

if (vencedor === 0) {
    console.log("Não houve vencedor. A eleição terminou em empate.");
} else {
    console.log(`O vencedor foi o candidato ${vencedor} com ${maiorVotos} votos.`);
}