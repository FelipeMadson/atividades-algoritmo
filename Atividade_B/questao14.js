import { question } from 'readline-sync';

// Entrada (inserir as 3 notas e os pesos)
var nota1 = parseFloat(question("Digite a primeira nota: "));
var peso1 = parseFloat(question("Digite o peso da primeira nota: "));
var nota2 = parseFloat(question("Digite a segunda nota: "));
var peso2 = parseFloat(question("Digite o peso da segunda nota: "));
var nota3 = parseFloat(question("Digite a terceira nota: "));
var peso3 = parseFloat(question("Digite o peso da terceira nota: "));

// Processamento (calculando a média ponderada)
var somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
var somaPesos = peso1 + peso2 + peso3;
var mediaPonderada = somaNotas / somaPesos;

// Saída
console.log("A média ponderada das notas é: " + mediaPonderada.toFixed(2));
