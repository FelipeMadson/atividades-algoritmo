import { question } from 'readline-sync';

const numero = parseFloat(question("Digite um número: "));

let resultado = numero;

while (resultado >= 1) {
    resultado /= 2;
}

console.log(`O resultado da última divisão é: ${resultado}`);
