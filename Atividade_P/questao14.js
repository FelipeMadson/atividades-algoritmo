import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let maiorQuadrado = 1;

for (let i = 1; i * i <= N; i++) {
    maiorQuadrado = i * i;
}

console.log(`O maior quadrado menor ou igual a ${N} é ${maiorQuadrado}`);