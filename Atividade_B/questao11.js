import { question } from 'readline-sync';

// Entrada (inserir o número inteiro de 3 dígitos)
var numero = question("Digite um número inteiro de 3 dígitos: ");

// Processamento (verificar se o número tem 3 dígitos)
if (numero.length === 3) {
    // Convertendo o número para uma string, invertendo-a e, em seguida, convertendo-a de volta para um número inteiro
    var inverso = parseInt(numero.split('').reverse().join(''));

    // Entrada
    console.log("O inverso do número " + numero + " é: " + inverso);
} else {
    console.log("O número inserido não tem 3 dígitos.");
}
