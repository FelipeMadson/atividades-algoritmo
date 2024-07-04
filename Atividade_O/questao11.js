import { questionInt } from 'readline-sync';

const LimiteInferior = questionInt("Digite o Limite Inferior: ");
const LimiteSuperior = questionInt("Digite o Limite Superior: ");

function ehPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = LimiteInferior; i <= LimiteSuperior; i++) {
    if (ehPrimo(i)) {
        console.log(i);
    }
}