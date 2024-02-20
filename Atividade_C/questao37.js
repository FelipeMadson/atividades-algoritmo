import { question } from 'readline-sync';

// Entrada (inserir a idade em dias)
var idadeEmDias = parseInt(question("Digite a idade em dias: "));

// Processamento (calculando a idade em anos)
var anos = Math.floor(idadeEmDias / 365.25);

// (calculando o número de dias restantes após remover os anos)
var diasRestantes = idadeEmDias % 365.25;

// (calculando a idade em meses)
var meses = Math.floor(diasRestantes / 30.44);

// (calculando o número de dias restantes após remover os meses)
var diasFinais = Math.round(diasRestantes % 30.44);

// Saída
console.log("A idade expressa em anos, meses e dias é: " + anos + " anos, " + meses + " meses e " + diasFinais + " dias.");
