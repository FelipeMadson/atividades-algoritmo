import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let S = 0;
let i = 1;

while (i <= N) {
    S += 1 / i;
    i++;
}

console.log(`O valor de S é ${S.toFixed(4)}`);