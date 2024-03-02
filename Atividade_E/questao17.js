import { question } from 'readline-sync';

function lerValores() {
    const valor1 = parseInt(question("Digite o primeiro valor inteiro: "));
    const valor2 = parseInt(question("Digite o segundo valor inteiro: "));
    return { valor1, valor2 };
}

function main() {
    const { valor1, valor2 } = lerValores();
    const resto = valor1 % valor2;

    switch (resto) {
        case 1:
            console.log(`A soma dos valores é: ${valor1 + valor2 + resto}`);
            break;
        case 2:
            if (valor1 % 2 === 0) {
                console.log("O primeiro valor é par.");
            } else {
                console.log("O primeiro valor é ímpar.");
            }
            if (valor2 % 2 === 0) {
                console.log("O segundo valor é par.");
            } else {
                console.log("O segundo valor é ímpar.");
            }
            break;
        case 3:
            console.log(`A multiplicação da soma dos valores pelo primeiro é: ${(valor1 + valor2) * valor1}`);
            break;
        case 4:
            if (valor2 !== 0) {
                console.log(`A divisão da soma dos valores pelo segundo é: ${(valor1 + valor2) / valor2}`);
            } else {
                console.log("Impossível dividir por zero.");
            }
            break;
        default:
            console.log(`O quadrado do primeiro valor é: ${valor1 * valor1}`);
            console.log(`O quadrado do segundo valor é: ${valor2 * valor2}`);
            break;
    }
}

main();
