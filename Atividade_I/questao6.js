import { question } from 'readline-sync';
const numero = question("Digite um número: ");
const numeroDeDigitos = numero.toString().length;
console.log(`O número ${numero} tem ${numeroDeDigitos} dígitos.`);
