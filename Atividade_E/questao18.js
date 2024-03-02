import { question } from 'readline-sync';

function lerValores() {
    const valor1 = parseFloat(question("Digite o primeiro valor: "));
    const valor2 = parseFloat(question("Digite o segundo valor: "));
    return { valor1, valor2 };
}

function realizarOperacao(valor1, valor2, operacao) {
    switch (operacao) {
        case 1:
            return valor1 + valor2;
        case 2:
            return valor1 - valor2;
        case 3:
            return valor1 * valor2;
        case 4:
            if (valor2 !== 0) {
                return valor1 / valor2;
            } else {
                console.log("Impossível dividir por zero.");
                return null;
            }
        default:
            console.log("Código de operação inválido.");
            return null;
    }
}

function main() {
    const { valor1, valor2 } = lerValores();
    const operacao = parseInt(question("Digite o código da operação (1 - Adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão): "));
    const resultado = realizarOperacao(valor1, valor2, operacao);
    if (resultado !== null) {
        console.log("O resultado da operação é:", resultado);
    }
}

main();
