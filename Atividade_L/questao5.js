import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número para calcular o fatorial: ");
let fatorial = 1;
let i = 2;

while (i <= N) {
    fatorial *= i;
    i++;
}

console.log(`O fatorial de ${N} é ${fatorial}`);