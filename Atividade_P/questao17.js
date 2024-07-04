import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let S = 0;

for (let i = 1; i <= N; i++) {
    S += 1 / i;
}

console.log(`O valor de S é ${S.toFixed(4)}`);