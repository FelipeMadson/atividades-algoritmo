import { question } from 'readline-sync';

function lerNumeroInteiro() {
    return parseInt(question("Digite um número inteiro: "));
}

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

function main() {
    const numero = lerNumeroInteiro();
    verificarParOuImpar(numero);
}

main();
