import { question } from 'readline-sync';

// Entrada (inserir o número de segundos)
var segundosTotal = parseInt(question("Digite o número de segundos: "));

// Processamento (calculando a quantidade de horas)
var horas = Math.floor(segundosTotal / 3600);

// (calculando o restante dos segundos após a conversão para horas)
var segundosRestantes = segundosTotal % 3600;

// (calculando a quantidade de minutos)
var minutos = Math.floor(segundosRestantes / 60);

// (calculando o restante dos segundos após a conversão para minutos)
var segundos = segundosRestantes % 60;

// Saída
console.log("O número de " + segundosTotal + " segundos corresponde a " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos.");
