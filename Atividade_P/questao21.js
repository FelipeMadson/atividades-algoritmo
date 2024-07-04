import { questionInt } from 'readline-sync';

const N = 50;  // Fixo conforme o enunciado
let S = 0;

for (let i = 1; i <= N; i++) {
    S += (2 * i - 1) / i;
}

console.log(`O valor de S é ${S.toFixed(4)}`);