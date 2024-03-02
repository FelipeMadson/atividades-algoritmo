import { question } from 'readline-sync';

let numero1 = parseFloat(question("Digite o primeiro número: "));
let numero2 = parseFloat(question("Digite o segundo número: "));
let numero3 = parseFloat(question("Digite o terceiro número: "));


let quantidadeIguais = 0;

if (numero1 === numero2 && numero2 === numero3) {
    quantidadeIguais = 3;
} else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
    quantidadeIguais = 2;
}

console.log("Quantidade de números iguais encontrados: " + quantidadeIguais);