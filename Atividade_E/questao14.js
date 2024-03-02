import { question } from 'readline-sync';

function lerCincoNumerosInteiros() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(question(`Digite o ${i + 1}º número inteiro: `));
        numeros.push(numero);
    }
    return numeros;
}

function calcularMedia(numeros) {
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
}

function encontrarMaioresQueMedia(numeros, media) {
    return numeros.filter(numero => numero > media);
}

function main() {
    const numeros = lerCincoNumerosInteiros();
    const media = calcularMedia(numeros);
    const maioresQueMedia = encontrarMaioresQueMedia(numeros, media);
    
    console.log(`A média dos números é: ${media}`);
    console.log("Os números maiores que a média são:");
    maioresQueMedia.forEach(numero => console.log(numero));
}

main();
