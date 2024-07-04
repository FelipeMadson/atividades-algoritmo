import { questionFloat } from 'readline-sync';

const numero = questionFloat("Digite um número: ");

if (numero % 1 === 0) {
    console.log("O número é inteiro.");
} else {
    console.log("O número é decimal.");
}
