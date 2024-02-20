import { question } from 'readline-sync';

console.log('--------------- Conversor de real para dólar ---------------')

// Entrada (calcular o equivalente em reais)
var calcularEquivalenteReal = (valorDolar, valorEmDolar) => valorDolar * valorEmDolar;

// Processamento (inserir o valor do dólar e o valor em dólar)
var valorDolar = parseFloat(question("Digite o valor do dólar: $"));
var valorEmDolar = parseFloat(question("Digite o valor a ser convertido: R$"));

// Processamento (função para calcular o equivalente em reais)
var equivalenteReal = calcularEquivalenteReal(valorDolar, valorEmDolar);

// Saída
console.log("O valor em reais é: R$" + equivalenteReal.toFixed(2));