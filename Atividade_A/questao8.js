
import { question } from 'readline-sync';

// Entrada (inserir os dois números)
var numero1 = parseFloat(question("Digite o primeiro número: "));
var numero2 = parseFloat(question("Digite o segundo número: "));

// Processamento (divisão da soma pela subtração dos números)
var resultado = (numero1 + numero2) / (numero1 - numero2);

// Saída
console.log("O resultado da divisão da soma pela subtração dos números é: " + resultado);
