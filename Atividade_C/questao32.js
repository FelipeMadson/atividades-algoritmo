import { question } from 'readline-sync';

// Entrada (inserir um número inteiro de 3 dígitos)
var numero = parseInt(question("Digite um número inteiro de 3 dígitos: "));

// Processamento (calculando o inverso do número)
var inverso = parseInt(numero.toString().split('').reverse().join(''));

// (calculando a diferença entre o número e seu inverso)
var diferenca = numero - inverso;

// Saída
console.log("A diferença entre o número e seu inverso é: " + diferenca);
