import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let S = 0;
let i = 1;

while (i <= N) {
    let termo = i / (N - i + 1);
    S += i % 2 === 1 ? termo : -termo;
    i++;
}

console.log(`O valor de S é ${S.toFixed(4)}`);