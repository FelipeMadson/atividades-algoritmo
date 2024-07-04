import { questionInt } from 'readline-sync';

const N = questionInt("Digite o número de eleitores: ");
let votos = { 1: 0, 2: 0, 3: 0, 9: 0, 0: 0 };

for (let i = 1; i <= N; i++) {
    const voto = questionInt(`Digite o voto do eleitor ${i} (1, 2, 3, 9 ou 0): `);
    if (voto in votos) votos[voto]++;
}

console.log("Resultados:");
console.log(`Candidato 1: ${votos[1]} votos`);
console.log(`Candidato 2: ${votos[2]} votos`);
console.log(`Candidato 3: ${votos[3]} votos`);
console.log(`Votos nulos: ${votos[9]} votos`);
console.log(`Votos em branco: ${votos[0]} votos`);

const vencedor = Object.keys(votos).reduce((a, b) => votos[a] > votos[b] ? a : b);
console.log(`O vencedor foi o candidato ${vencedor}`);