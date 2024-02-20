import { question } from 'readline-sync';

// Entrada (inserir o valor da base e altura do triângulo)
var base = parseFloat(question("Digite o valor da base do triângulo: "));
var altura = parseFloat(question("Digite o valor da altura do triângulo: "));

// Processamento (calculando a área do triângulo)
var area = (base * altura) / 2;

// Saída
console.log("A área do triângulo é: " + area.toFixed(2));
