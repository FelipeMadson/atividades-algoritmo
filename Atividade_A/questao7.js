
import { question } from 'readline-sync';

// Entrada (inserir os três números)
var numero1 = parseFloat(question("Digite o primeiro número: "));
var numero2 = parseFloat(question("Digite o segundo número: "));
var numero3 = parseFloat(question("Digite o terceiro número: "));

// Processamento (calculando a soma dos dois primeiros números)
var somaDosDoisPrimeiros = numero1 + numero2;

// (calculando a diferença entre os dois últimos números)
var diferencaEntreOsDoisUltimos = numero2 - numero3;

// Saída 
console.log("A soma dos dois primeiros números é: " + somaDosDoisPrimeiros);
console.log("A diferença entre os dois últimos números é: " + diferencaEntreOsDoisUltimos);
