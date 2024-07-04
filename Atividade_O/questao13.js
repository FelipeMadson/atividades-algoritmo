import { questionInt, questionFloat } from 'readline-sync';

const N = questionInt("Digite a quantidade de números: ");
let maior = -Infinity;

for (let i = 1; i <= N; i++) {
    const num = questionFloat(`Digite o ${i}º número: `);
    if (num > maior) {
        maior = num;
    }
}

console.log(`O maior número da lista é: ${maior}`);