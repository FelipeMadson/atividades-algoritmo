
import { question } from 'readline-sync';

// Entrada (inserir a massa em quilogramas)
var massaKg = parseFloat(question("Digite a massa em quilogramas (kg): "));

// Processamento (convertendo a massa de quilogramas para gramas)
var massaGramas = massaKg * 1000;

// Saída
console.log("A massa equivalente em gramas (g) é: " + massaGramas);
