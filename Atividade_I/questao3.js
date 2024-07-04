import { question } from 'readline-sync';

function calcularMDC(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = parseInt(question("Digite o primeiro número: "));
const num2 = parseInt(question("Digite o segundo número: "));

const mdc = calcularMDC(num1, num2);

console.log(`O MDC de ${num1} e ${num2} é ${mdc}`);
