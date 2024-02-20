import { question } from 'readline-sync';

// Entrada (inserir um número inteiro de 3 dígitos)
var numero = parseInt(question("Digite um número inteiro de 3 dígitos: "));

// Processo (calculando o inverso do número)
var inverso = parseInt(numero.toString().split('').reverse().join(''));

// (calculando a soma entre o número e seu inverso)
var soma = numero + inverso;

// Saída
console.log("A soma do número com seu inverso é: " + soma);
