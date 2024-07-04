import { questionInt, questionFloat } from 'readline-sync';

const N = questionInt("Digite a quantidade de números: ");
let soma = 0;
let i = 1;

while (i <= N) {
    const num = questionFloat(`Digite o ${i}º número: `);
    soma += num;
    i++;
}

const media = soma / N;
console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);