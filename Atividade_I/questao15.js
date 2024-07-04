import { questionInt } from 'readline-sync';

function decimalParaBinario(decimal) {
    return decimal.toString(2);
}

function decimalParaHexadecimal(decimal) {
    return decimal.toString(16).toUpperCase();
}

function main() {
    const numeroDecimal = questionInt("Digite um número decimal entre 0 e 255: ");

    if (numeroDecimal < 0 || numeroDecimal > 255) {
        console.log("Número fora do intervalo válido.");
        return;
    }

    const numeroBinario = decimalParaBinario(numeroDecimal);
    const numeroHexadecimal = decimalParaHexadecimal(numeroDecimal);

    console.log(`Número em binário: ${numeroBinario}`);
    console.log(`Número em hexadecimal: ${numeroHexadecimal}`);
}

main();
