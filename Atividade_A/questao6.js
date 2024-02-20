import { question } from 'readline-sync';

// Entrada (calcular a velocidade em m/s)
var calcularVelocidadeMS = (velocidadeKMH) => velocidadeKMH / 3.6;

// Processamento  (inserir a velocidade em km/h)
var velocidadeKMH = parseFloat(question("Digite a velocidade em km/h: "));

// (calcular a velocidade em m/s)
var velocidadeMS = calcularVelocidadeMS(velocidadeKMH);

// Saída
console.log("A velocidade em m/s é: " + velocidadeMS.toFixed(2));