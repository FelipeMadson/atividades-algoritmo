import { question } from 'readline-sync';

const numero = parseInt(question("Digite um número entre 0 e 100: "));

if (numero < 0 || numero > 100 || isNaN(numero)) {
    console.log("Número inválido. Por favor, insira um número entre 0 e 100.");
} else {
    let ehPrimo = true;

    if (numero === 0 || numero === 1) {
        ehPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }
    if (ehPrimo) {
        console.log(`${numero} é um número primo.`);
    } else {
        console.log(`${numero} não é um número primo.`);
    }
}
