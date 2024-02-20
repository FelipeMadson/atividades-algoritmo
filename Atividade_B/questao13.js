import { question } from 'readline-sync';

// Entrada (inserir o valor em real (R$))
var valorReal = parseFloat(question("Digite o valor em real (R$): "));

// Processamento (calculando 70% do valor)
var setentaPorcento = valorReal * 0.70;

// Entrada
console.log("70% do valor é: " + setentaPorcento);
