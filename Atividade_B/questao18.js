import { question } from 'readline-sync';

// Definindo o valor de π
const PI = 3.14159;

// Entrada (inserir o valor do raio da circunferência)
var raio = parseFloat(question("Digite o valor do raio da circunferência: "));

// Processamento (calculando o comprimento da circunferência)
var comprimento = 2 * PI * raio;

// Saída
console.log("O comprimento da circunferência é: " + comprimento.toFixed(2));
