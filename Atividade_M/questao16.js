import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N (>= 2): ");
let a = 0, b = 1;
let i = 1;

while (i <= N) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    i++;
}