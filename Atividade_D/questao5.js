import { question } from 'readline-sync';

const numero1 = parseFloat(question("Digite o primeiro número: "));
const numero2 = parseFloat(question("Digite o segundo número: "));
const numero3 = parseFloat(question("Digite o terceiro número: "));

const numerosOrdenados = [numero1, numero2, numero3].sort((a, b) => a - b);

console.log("Os números em ordem crescente são: " + numerosOrdenados.join(", "));
