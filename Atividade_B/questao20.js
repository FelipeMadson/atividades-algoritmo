import { question } from 'readline-sync';

// Entrada (inserir a temperatura em °C)
var temperaturaCelsius = parseFloat(question("Digite a temperatura em °C: "));

// Processamento (convertendo a temperatura de Celsius para Fahrenheit)
var temperaturaFahrenheit = (9 * temperaturaCelsius + 160) / 5;

// Saída
console.log("A temperatura equivalente em °F é: " + temperaturaFahrenheit.toFixed(2));
