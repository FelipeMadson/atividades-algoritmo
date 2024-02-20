import { question } from 'readline-sync';

// Definindo o valor de π
const PI = 3.14;

// Entrada (inserir o valor do raio da esfera)
var raio = parseFloat(question("Digite o valor do raio da esfera: "));

// Processamento (calculando o volume da esfera)
var volume = (4 * PI * Math.pow(raio, 3)) / 3;

// Saída
console.log("O volume da esfera é: " + volume.toFixed(2));
