import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let maiorQuadrado = 1;
let i = 1;

while (i * i <= N) {
    maiorQuadrado = i * i;
    i++;
}

console.log(`O maior quadrado menor ou igual a ${N} é ${maiorQuadrado}`);