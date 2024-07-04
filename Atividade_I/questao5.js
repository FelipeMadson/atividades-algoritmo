import { question } from 'readline-sync';

const X = parseFloat(question("Digite o valor de X: "));
let N = parseInt(question("Digite o valor de N: "));

let resultado = X;

while (N >= 2) {
    resultado = resultado / N;
    N--;
    console.log(`Resultado da divisão: ${resultado}`);
}
