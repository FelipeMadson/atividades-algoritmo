import { question } from 'readline-sync';

// Entrada (inserir a idade em anos, meses e dias)
var anos = parseInt(question("Digite a idade em anos: "));
var meses = parseInt(question("Digite a idade em meses: "));
var dias = parseInt(question("Digite a idade em dias: "));

// Processamento
var idadeEmDias = anos * 365 + meses * 30.44 + dias;

// Saída
console.log("A idade expressa apenas em dias é: " + idadeEmDias + " dias.");
