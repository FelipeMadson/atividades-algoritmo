import { question } from 'readline-sync';

function lerOpcaoENumeros() {
    const opcao = parseInt(question("Digite a opção (1, 2 ou 3): "));
    const num1 = parseFloat(question("Digite o primeiro número: "));
    const num2 = parseFloat(question("Digite o segundo número: "));
    const num3 = parseFloat(question("Digite o terceiro número: "));
    return { opcao, num1, num2, num3 };
}

function imprimirNumero({ opcao, num1, num2, num3 }) {
    let resultado = 0;
    if (opcao === 1) {
        resultado = num1;
    } else if (opcao === 2) {
        resultado = num2;
    } else if (opcao === 3) {
        resultado = num3;
    } else {
        console.log("Opção inválida. Por favor, insira 1, 2 ou 3.");
        return;
    }
    console.log(`O valor correspondente à opção ${opcao} é: ${resultado}`);
}

function main() {
    const entrada = lerOpcaoENumeros();
    imprimirNumero(entrada);
}

main();
