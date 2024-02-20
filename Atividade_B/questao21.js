import { question } from 'readline-sync';

// Entrada (inserir a temperatura em °F)
var temperaturaFahrenheit = parseFloat(question("Digite a temperatura em °F: "));

// Processamento (convertendo a temperatura de Fahrenheit para Celsius)
var temperaturaCelsius = (5 * temperaturaFahrenheit - 160) / 9;

// Saída
console.log("A temperatura equivalente em °C é: " + temperaturaCelsius.toFixed(2));
