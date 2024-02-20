import { question } from 'readline-sync';

// Entrada (inserir o número de meses)
var mesesTotal = parseInt(question("Digite o número de meses: "));

// Processamento (calculando a quantidade de anos)
var anos = Math.floor(mesesTotal / 12);

// (calculando o restante dos meses após a conversão para anos)
var meses = mesesTotal % 12;

// Saída
console.log("O número de " + mesesTotal + " meses corresponde a " + anos + " anos e " + meses + " meses.");
