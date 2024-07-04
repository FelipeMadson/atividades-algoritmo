import { question } from 'readline-sync';

function calcularMDC(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calcularMMC(a, b) {
    return (a * b) / calcularMDC(a, b);
}

const num1 = parseInt(question("Digite o primeiro número: "));
const num2 = parseInt(question("Digite o segundo número: "));

const mmc = calcularMMC(num1, num2);

console.log(`O MMC de ${num1} e ${num2} é ${mmc}`);
