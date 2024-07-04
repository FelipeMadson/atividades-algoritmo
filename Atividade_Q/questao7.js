import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let soma = 0;

for (let i = 1; i <= N; i++) {
    soma += i;
}

console.log(`A soma dos números de 1 a ${N} é ${soma}`);