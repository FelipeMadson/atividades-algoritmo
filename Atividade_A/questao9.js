import { question } from 'readline-sync';

// Entrada (inserir os dois números)
var numeroA = parseFloat(question("Digite o primeiro número (A): "));
var numeroB = parseFloat(question("Digite o segundo número (B): "));

// Saída
console.log("Os números em ordem inversa são: " + numeroB + ", " + numeroA);
