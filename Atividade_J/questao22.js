import { questionInt } from 'readline-sync';

function divisaoSemOperador(dividendo, divisor) {
    let quociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        quociente++;
    }

    return { quociente, resto };
}

const dividendo = questionInt('Digite o dividendo: ');
const divisor = questionInt('Digite o divisor: ');

const { quociente, resto } = divisaoSemOperador(dividendo, divisor);
console.log(`Quociente: ${quociente}`);
console.log(`Resto: ${resto}`);
