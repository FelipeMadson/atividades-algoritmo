import { question } from 'readline-sync';

// Entrada (inserir o número de horas)
var horasTotal = parseInt(question("Digite o número de horas: "));

// Processamento (calculando a quantidade de semanas)
var semanas = Math.floor(horasTotal / 168);

// (calculando o restante das horas após a conversão para semanas)
var horasRestantes = horasTotal % 168;

// (calculando a quantidade de dias)
var dias = Math.floor(horasRestantes / 24);

// (calculando o restante das horas após a conversão para dias)
var horas = horasRestantes % 24;

// Saída
console.log("O número de " + horasTotal + " horas corresponde a " + semanas + " semanas, " + dias + " dias e " + horas + " horas.");
