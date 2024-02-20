import { question } from 'readline-sync';

// Entrada(inserir a distância em quilômetros)
var distanciaKm = parseFloat(question("Digite a distância em quilômetros (km): "));

// Processamento (convertendo a distância de quilômetros para metros)
var distanciaMetros = distanciaKm * 1000;

// Saída
console.log("A distância equivalente em metros (m) é: " + distanciaMetros);
