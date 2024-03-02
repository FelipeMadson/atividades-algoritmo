import { question } from 'readline-sync';

const lado1 = parseFloat(question("Digite o primeiro lado do triângulo: "));
const lado2 = parseFloat(question("Digite o segundo lado do triângulo: "));
const lado3 = parseFloat(question("Digite o terceiro lado do triângulo: "));

const soma12 = lado1 + lado2;
const soma23 = lado2 + lado3;
const soma13 = lado1 + lado3;

if (soma12 > lado3 && soma23 > lado1 && soma13 > lado2) {
    console.log("Os lados fornecidos formam um triângulo.");

    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero, pois todos os lados são iguais.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles, pois possui dois lados iguais.");
    } else {
        console.log("O triângulo é escaleno, pois todos os lados são diferentes.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}
