import { questionInt } from 'readline-sync';

function multiplicacaoSemOperador(numero1, numero2) {
    let total = 0;

    for (let i = 0; i < Math.abs(numero2); i++) {
        total += numero1;
    }

    if (numero2 < 0) {
        total = -total;
    }

    return total;
}

const numero1 = questionInt('Digite o primeiro número: ');
const numero2 = questionInt('Digite o segundo número: ');

const resultado = multiplicacaoSemOperador(numero1, numero2);
console.log(`A multiplicação de ${numero1} por ${numero2} é igual a ${resultado}.`);
