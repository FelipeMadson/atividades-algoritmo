import { question } from 'readline-sync';

const X = parseInt(question("Digite o valor de X: "));

const lista = [];

let numero;
do {
    numero = parseInt(question("Digite um número da lista (ou 0 para encerrar): "));
    lista.push(numero);
} while (numero !== 0 && !somaConsecutivaIgual(lista, X));

function somaConsecutivaIgual(lista, X) {
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] + lista[i + 1] === X) {
            console.log(`A soma de ${lista[i]} e ${lista[i + 1]} é igual a ${X}.`);
            return true;
        }
    }
    return false;
}
