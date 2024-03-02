import { question } from 'readline-sync';

function arredondar(numero) {
    const parteInteira = Math.floor(numero);
    const parteFracionaria = numero - parteInteira;

    if (parteFracionaria >= 0.5) {
        return parteInteira + 1;
    } else {
        return parteInteira;
    }
}

function main() {
    const numero = parseFloat(question("Digite um número para arredondar: "));

    console.log(`O número arredondado é: ${arredondar(numero)}`);
}

main();
