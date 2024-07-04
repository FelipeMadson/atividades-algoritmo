import { question } from 'readline-sync';

function calcularMediaFinal(nota1, nota2, nota3) {
    return ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10;
}

function main() {
    let matricula;
    let nota1, nota2, nota3;
    let totalAprovados = 0;
    let totalReprovados = 0;
    let totalAlunos = 0;
    
    do {
        matricula = parseInt(question("Digite a matrícula do aluno (ou 0 para encerrar): "));
        if (matricula !== 0) {
            nota1 = parseFloat(question("Digite a nota 1 do aluno: "));
            nota2 = parseFloat(question("Digite a nota 2 do aluno: "));
            nota3 = parseFloat(question("Digite a nota 3 do aluno: "));
            
            const mediaFinal = calcularMediaFinal(nota1, nota2, nota3);
            
            if (mediaFinal >= 7) {
                totalAprovados++;
            } else {
                totalReprovados++;
            }
            
            totalAlunos++;
        }
    } while (matricula !== 0);
    
    console.log(`Total de alunos aprovados: ${totalAprovados}`);
    console.log(`Total de alunos reprovados: ${totalReprovados}`);
    console.log(`Total de alunos da turma: ${totalAlunos}`);
}

main();
