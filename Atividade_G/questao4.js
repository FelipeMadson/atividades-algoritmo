import { question } from 'readline-sync';

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function main() {
    const nota1 = parseFloat(question("Digite a primeira nota: "));
    const nota2 = parseFloat(question("Digite a segunda nota: "));

    const media = calcularMedia(nota1, nota2);

    if (media === 10) {
        console.log("Aprovado com Distinção");
    } else if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

main();
