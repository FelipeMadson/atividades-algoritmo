import { question } from 'readline-sync';

// Entrada (inserir os três números)
var numero1 = parseFloat(question("Digite o primeiro número: "));
var numero2 = parseFloat(question("Digite o segundo número: "));
var numero3 = parseFloat(question("Digite o terceiro número: "));

// Processamento (calculando a média dos números)
var media = (numero1 + numero2 + numero3) / 3;

// Saída
console.log("A média dos números é: " + media);
