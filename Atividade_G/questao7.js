import { questionFloat } from 'readline-sync';

function calcularReajusteSalario(salario) {
    let percentualAumento;
    let valorAumento;

    if (salario <= 280) {
        percentualAumento = 20;
    } else if (salario <= 700) {
        percentualAumento = 15;
    } else if (salario <= 1500) {
        percentualAumento = 10;
    } else {
        percentualAumento = 5;
    }

    valorAumento = salario * (percentualAumento / 100);

    const novoSalario = salario + valorAumento;

    return {
        salarioAntesReajuste: salario,
        percentualAumento: percentualAumento,
        valorAumento: valorAumento,
        novoSalario: novoSalario
    };
}

function main() {
    const salario = questionFloat("Digite o salário do colaborador: ");

    const resultadoReajuste = calcularReajusteSalario(salario);

    console.log(`Salário antes do reajuste: R$ ${resultadoReajuste.salarioAntesReajuste.toFixed(2)}`);
    console.log(`Percentual de aumento aplicado: ${resultadoReajuste.percentualAumento}%`);
    console.log(`Valor do aumento: R$ ${resultadoReajuste.valorAumento.toFixed(2)}`);
    console.log(`Novo salário após o aumento: R$ ${resultadoReajuste.novoSalario.toFixed(2)}`);
}

main();
