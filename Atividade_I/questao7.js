import { question } from 'readline-sync';
const primeiroNumero = parseInt(question("Digite o primeiro número: "));
let numero;
do {
    numero = parseInt(question("Digite um número da lista (ou o mesmo número para encerrar): "));
} while (numero !== primeiroNumero);

console.log("Número igual ao primeiro número foi encontrado. O programa será encerrado.");
