import { question } from 'readline-sync';

const angulo1 = parseFloat(question("Digite o primeiro ângulo interno do triângulo: "));
const angulo2 = parseFloat(question("Digite o segundo ângulo interno do triângulo: "));
const angulo3 = parseFloat(question("Digite o terceiro ângulo interno do triângulo: "));

const somaAngulos = angulo1 + angulo2 + angulo3;
if (somaAngulos !== 180) {
    console.log("Os ângulos fornecidos não formam um triângulo, pois a soma dos ângulos internos não é igual a 180 graus.");
} else {
    if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
        console.log("Os ângulos fornecidos formam um triângulo acutângulo.");
    } else if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90) {
        console.log("Os ângulos fornecidos formam um triângulo retângulo.");
    } else {
        console.log("Os ângulos fornecidos formam um triângulo obtusângulo.");
    }
}
