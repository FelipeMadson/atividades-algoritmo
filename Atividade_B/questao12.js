
import { question } from 'readline-sync';

// Entrada (inserir o salário do trabalhador)
var salarioAtual = parseFloat(question("Digite o salário do trabalhador: "));

// Processamento (calculando o novo salário com um aumento de 25%)
var novoSalario = salarioAtual * 1.25;

// Saída
console.log("O novo salário com um aumento de 25% é: " + novoSalario);
