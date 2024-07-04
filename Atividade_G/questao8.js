import { questionFloat } from 'readline-sync';

function calcularDescontoIR(salarioBruto) {
    let descontoIR = 0;

    if (salarioBruto <= 900) {
        descontoIR = 0;
    } else if (salarioBruto <= 1500) {
        descontoIR = salarioBruto * 0.05;
    } else if (salarioBruto <= 2500) {
        descontoIR = salarioBruto * 0.1;
    } else {
        descontoIR = salarioBruto * 0.2;
    }

    return descontoIR;
}

function calcularDescontoINSS(salarioBruto) {
    return salarioBruto * 0.1;
}

function main() {
    const valorHora = questionFloat("Digite o valor da sua hora de trabalho: ");
    const horasTrabalhadas = questionFloat("Digite a quantidade de horas trabalhadas no mês: ");

    const salarioBruto = valorHora * horasTrabalhadas;

    const descontoIR = calcularDescontoIR(salarioBruto);
    const descontoINSS = calcularDescontoINSS(salarioBruto);
    const totalDescontos = descontoIR + descontoINSS;
    const fgts = salarioBruto * 0.11;

    const salarioLiquido = salarioBruto - totalDescontos;

    console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`(-) IR (${(descontoIR / salarioBruto * 100).toFixed(0)}%): R$ ${descontoIR.toFixed(2)}`);
    console.log(`(-) INSS (10%): R$ ${descontoINSS.toFixed(2)}`);
    console.log(`FGTS (11%): R$ ${fgts.toFixed(2)}`);
    console.log(`Total de descontos: R$ ${totalDescontos.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
}

main();
