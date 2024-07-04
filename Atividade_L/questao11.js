import { questionInt } from 'readline-sync';

const LimiteInferior = questionInt("Digite o Limite Inferior: ");
const LimiteSuperior = questionInt("Digite o Limite Superior: ");

function ehPrimo(num) {
    if (num <= 1) return false;
    let i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) return false;
        i++;
    }
    return true;
}

let i = LimiteInferior;
while (i <= LimiteSuperior) {
    if (ehPrimo(i)) {
        console.log(i);
    }
    i++;
}