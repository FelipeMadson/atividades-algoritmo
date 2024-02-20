import { question } from 'readline-sync';

// Entrada (inserir o número de dias)
var dias = parseInt(question("Digite o número de dias: "));

// Processamento (calculando a quantidade de semanas e dias)
var semanas = Math.floor(dias / 7);
var diasRestantes = dias % 7;

// Saída
console.log("O número de " + dias + " dias corresponde a " + semanas + " semanas e " + diasRestantes + " dias.");
