import { question } from 'readline-sync';

// Processamento (calcular o máximo divisor comum (MDC) de dois números)
function calcularMDC(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMDC(b, a % b);
    }
}

// Entrada (numerador e denominador)
var numerador1 = parseInt(question("Digite o numerador da primeira fração: "));
var denominador1 = parseInt(question("Digite o denominador da primeira fração: "));
var numerador2 = parseInt(question("Digite o numerador da segunda fração: "));
var denominador2 = parseInt(question("Digite o denominador da segunda fração: "));

// Processamento (calculando o denominador comum (MMC))
var denominadorComum = denominador1 * denominador2;

// (calculando a soma dos numeradores)
var numeradorSoma = numerador1 * denominador2 + numerador2 * denominador1;

// (calculando o máximo divisor comum (MDC) entre o numerador e o denominador)
var mdc = calcularMDC(numeradorSoma, denominadorComum);

// (simplificando a fração resultante)
numeradorSoma /= mdc;
denominadorComum /= mdc;

// Saída
console.log("A soma das frações é: " + numeradorSoma + "/" + denominadorComum);
