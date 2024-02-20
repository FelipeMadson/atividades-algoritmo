import { question } from 'readline-sync';

// Entrada (inserir os dois números inteiros)
var numero1 = parseInt(question("Digite o primeiro número inteiro: "));
var numero2 = parseInt(question("Digite o segundo número inteiro: "));

// Processamento (calculando o quociente da divisão)
var quociente = Math.floor(numero1 / numero2);

// (calculando o resto da divisão)
var resto = numero1 % numero2;

// Entrada (quociente e o resto da divisão)
console.log("O quociente da divisão é: " + quociente);
console.log("O resto da divisão é: " + resto);
