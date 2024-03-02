import { question } from 'readline-sync';

// Entrada (inserir a medida em metros)
var metros = parseInt(question("Digite a medida em metros: "));

// Processamento (calculando a quantidade de quilômetros e metros)
var quilometros = Math.floor(metros / 1000);
var metrosRestantes = metros % 1000;

// Saída
console.log("A medida de " + metros + " metros corresponde a " + quilometros + " quilômetros e " + metrosRestantes + " metros.");
