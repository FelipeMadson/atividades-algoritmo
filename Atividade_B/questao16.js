import { question } from 'readline-sync';

// Entrada(inserir o valor do lado do quadrado)
var lado = parseFloat(question("Digite o valor do lado do quadrado: "));

// Processamento(calculando a área do quadrado)
var area = lado * lado;

// Saída
console.log("A área do quadrado é: " + area);
