import { question } from 'readline-sync';

const numero = parseInt(question("Digite um número de dois dígitos: "));

const dezena = Math.floor(numero / 10);
const unidade = numero % 10;

if (dezena === unidade) {
    console.log("O algarismo da dezena é igual ao algarismo da unidade.");
} else {
    console.log("O algarismo da dezena é diferente do algarismo da unidade.");
}
