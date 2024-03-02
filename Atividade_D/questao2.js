import { question } from 'readline-sync';

const numero1 = parseFloat(question("Digite o primeiro número: "));
const numero2 = parseFloat(question("Digite o segundo número: "));


let menor, maior;

if (numero1 < numero2) {
    menor = numero1;
    maior = numero2;
} else {
    menor = numero2;
    maior = numero1;
}

console.log("Menor número: " + menor);
console.log("Maior número: " + maior);