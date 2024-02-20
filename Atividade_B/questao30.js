import { question } from 'readline-sync';

// Entrada (inserir o número de minutos)
var minutosTotal = parseInt(question("Digite o número de minutos: "));

// Processamento (calculando a quantidade de dias)
var dias = Math.floor(minutosTotal / 1440);

// (calculando o restante dos minutos após a conversão para dias)
var minutosRestantes = minutosTotal % 1440;

// (calculando a quantidade de horas)
var horas = Math.floor(minutosRestantes / 60);

// (calculando o restante dos minutos após a conversão para horas)
var minutos = minutosRestantes % 60;

// Saída
console.log("O número de " + minutosTotal + " minutos corresponde a " + dias + " dias, " + horas + " horas e " + minutos + " minutos.");
