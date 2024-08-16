import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let termo = 1;

for (let i = 1; i <= N; i++) {
    console.log(termo);
    termo += i + 1;
}