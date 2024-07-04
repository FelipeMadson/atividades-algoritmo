import { questionInt, questionFloat } from 'readline-sync';

const N = questionInt("Digite a quantidade de números: ");
let maior = -Infinity;
let i = 1;

while (i <= N) {
    const num = questionFloat(`Digite o ${i}º número: `);
    if (num > maior) {
        maior = num;
    }
    i++;
}

console.log(`O maior número da lista é: ${maior}`);