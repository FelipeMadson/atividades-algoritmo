import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let i = 1;
while (i <= N) {
    console.log(i);
    i++;
}