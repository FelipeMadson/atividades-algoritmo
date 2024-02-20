import { question } from 'readline-sync';

// Entrada (inserir o valor da base e altura do retângulo)
var base = parseFloat(question("Digite o valor da base do retângulo: "));
var altura = parseFloat(question("Digite o valor da altura do retângulo: "));

// Processamento (calculando a área do retângulo)
var area = base * altura;

// Saída
console.log("A área do retângulo é: " + area);
