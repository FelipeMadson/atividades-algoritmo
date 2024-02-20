import { question } from 'readline-sync';

// Entrada (inserir o número inteiro de 4 dígitos)
var numero = question("Digite um número inteiro de 4 dígitos: ");

// Processamento (convertendo o número para uma string para facilitar a manipulação dos dígitos)
var numeroString = numero.toString();

// (inicializando uma variável para armazenar a soma dos dígitos)
var soma = 0;

// (repetindo sobre os dígitos do número e somando-os)
for (var i = 0; i < numeroString.length; i++) {
    // (convertendo cada dígito de volta para um número e somando-o à soma total)
    soma += parseInt(numeroString[i]);
}

// Saída
console.log("A soma dos elementos que compõem o número é: " + soma);
