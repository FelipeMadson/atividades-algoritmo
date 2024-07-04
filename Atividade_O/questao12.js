import { questionInt, questionFloat } from 'readline-sync';

const N = questionInt("Digite a quantidade de números: ");
let soma = 0;

for (let i = 1; i <= N; i++) {
    const num = questionFloat(`Digite o ${i}º número: `);
    soma += num;
}

const media = soma / N;
console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);