import { question, questionInt } from 'readline-sync';

console.log('--------------- Equivalência em Minutos ---------------')

// Entrada (calcular o equivalente em minutos)
var calcularMinutos = (horas, minutos) => horas * 60 + minutos;

// Processamento (inserir as horas e os minutos)
var horas = questionInt("Digite o valor em horas: ");
var minutos = questionInt("Digite o valor em minutos: ");

// (equivalente em minutos)
var equivalenteMinutos = calcularMinutos(horas, minutos);

// Saída
console.log("O equivalente em minutos é: " + equivalenteMinutos);