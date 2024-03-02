import { question } from 'readline-sync';

function lerCincoNumerosInteiros() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(question(`Digite o ${i + 1}º número inteiro: `));
        numeros.push(numero);
    }
    return numeros;
}

function encontrarMaiorEMenor(numeros) {
    let maior = numeros[0];
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return { maior, menor };
}

function main() {
    const numeros = lerCincoNumerosInteiros();
    const { maior, menor } = encontrarMaiorEMenor(numeros);
    console.log(`O maior número é: ${maior}`);
    console.log(`O menor número é: ${menor}`);
}

main();
