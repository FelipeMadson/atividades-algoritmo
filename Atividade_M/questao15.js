import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let termo = 1;
let i = 1;

while (i <= N) {
    console.log(termo);
    i++;
    termo += i;
}