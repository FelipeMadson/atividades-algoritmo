import { question } from 'readline-sync';

// Entrada (inserir o número binário de 4 dígitos)
var numeroBinario = question("Digite um número binário de 4 dígitos: ");

// Processamento (convertendo o número binário para decimal)
var numeroDecimal = parseInt(numeroBinario, 2);

// Saída
console.log("O número binário " + numeroBinario + " corresponde ao número decimal " + numeroDecimal + ".");
