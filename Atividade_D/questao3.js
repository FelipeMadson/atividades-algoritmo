import { question } from 'readline-sync';

const numero1 = parseFloat(question("Digite o primeiro número: "));
const numero2 = parseFloat(question("Digite o segundo número: "));
const numero3 = parseFloat(question("Digite o terceiro número: "));

let maior = numero1;

if (numero2 > maior) {
    maior = numero2;
}

if (numero3 > maior) {
    maior = numero3;
}

console.log("O maior número é: " + maior);