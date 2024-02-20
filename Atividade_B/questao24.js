import { question } from 'readline-sync';

// Entrada (inserir a medida em metros)
var medidaMetros = parseFloat(question("Digite a medida em metros (m): "));

// Processamento (convertendo a medida de metros para centímetros)
var medidaCentimetros = medidaMetros * 100;

// Saída
console.log("A medida equivalente em centímetros (cm) é: " + medidaCentimetros);
