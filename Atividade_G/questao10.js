import { questionFloat } from 'readline-sync';

function calcularConceitoEStatus(nota1, nota2) {
    const media = (nota1 + nota2) / 2;

    let conceito = '';

    if (media >= 9.0 && media <= 10.0) {
        conceito = 'A';
    } else if (media >= 7.5 && media < 9.0) {
        conceito = 'B';
    } else if (media >= 6.0 && media < 7.5) {
        conceito = 'C';
    } else if (media >= 4.0 && media < 6.0) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }

    const status = (conceito === 'A' || conceito === 'B' || conceito === 'C') ? 'APROVADO' : 'REPROVADO';

    return {
        nota1: nota1,
        nota2: nota2,
        media: media.toFixed(1),
        conceito: conceito,
        status: status
    };
}

const nota1 = questionFloat("Digite a primeira nota: ");
const nota2 = questionFloat("Digite a segunda nota: ");

const resultado = calcularConceitoEStatus(nota1, nota2);

console.log(`Nota 1: ${resultado.nota1}`);
console.log(`Nota 2: ${resultado.nota2}`);
console.log(`Média: ${resultado.media}`);
console.log(`Conceito: ${resultado.conceito}`);
console.log(`Status: ${resultado.status}`);
