import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
let i = 2;
while (i <= N) {
    console.log(i);
    i += 2;
}