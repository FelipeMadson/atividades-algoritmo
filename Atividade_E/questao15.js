import { question } from 'readline-sync';

function lerDadosProfessores() {
    const professor1 = {};
    professor1.horasAula = parseFloat(question("Digite a quantidade de horas aula do primeiro professor: "));
    professor1.valorHora = parseFloat(question("Digite o valor por hora do primeiro professor: "));

    const professor2 = {};
    professor2.horasAula = parseFloat(question("Digite a quantidade de horas aula do segundo professor: "));
    professor2.valorHora = parseFloat(question("Digite o valor por hora do segundo professor: "));

    return { professor1, professor2 };
}

function calcularSalarioTotal(horasAula, valorHora) {
    return horasAula * valorHora;
}

function main() {
    const { professor1, professor2 } = lerDadosProfessores();

    const salarioTotalProfessor1 = calcularSalarioTotal(professor1.horasAula, professor1.valorHora);
    const salarioTotalProfessor2 = calcularSalarioTotal(professor2.horasAula, professor2.valorHora);

    if (salarioTotalProfessor1 > salarioTotalProfessor2) {
        console.log("O primeiro professor tem um salário total maior.");
    } else if (salarioTotalProfessor2 > salarioTotalProfessor1) {
        console.log("O segundo professor tem um salário total maior.");
    } else {
        console.log("Os dois professores têm o mesmo salário total.");
    }
}

main();
