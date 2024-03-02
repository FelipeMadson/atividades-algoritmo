import { question } from 'readline-sync';

function lerNotas() {
    const nota1 = parseFloat(question("Digite a primeira nota do aluno: "));
    const nota2 = parseFloat(question("Digite a segunda nota do aluno: "));
    return { nota1, nota2 };
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function verificarAprovacao(media) {
    if (media >= 7.0) {
        console.log("Aprovado");
    } else {
        const notaExame = parseFloat(question("Digite a nota do exame: "));
        const mediaFinal = (media + notaExame) / 2;
        if (mediaFinal >= 5.0) {
            console.log("Aprovado");
        } else {
            console.log("Reprovado");
        }
    }
}

function main() {
    const { nota1, nota2 } = lerNotas();
    const media = calcularMedia(nota1, nota2);
    verificarAprovacao(media);
}

main();
