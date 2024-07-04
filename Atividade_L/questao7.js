import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let soma = 0;
let i = 1;

while (i <= N) {
    soma += i;
    i++;
}

console.log(`A soma dos números de 1 a ${N} é ${soma}`);