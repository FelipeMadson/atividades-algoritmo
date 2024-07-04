import { questionFloat, question } from 'readline-sync';

function calcularSaldoInvestimento(investimentoMensal, taxaJurosMensal) {
    let saldo = 0;
    for (let i = 1; i <= 12; i++) {
        saldo += investimentoMensal;
        saldo *= (1 + taxaJurosMensal);
    }
    return saldo.toFixed(2);
}

function main() {
    console.log("Bem-vindo ao calculador de retorno de investimento!");

    do {
        const investimentoMensal = questionFloat("Informe o valor a ser investido por mês: ");
        const taxaJurosMensal = questionFloat("Informe a taxa de juros mensal (em decimal): ");

        const saldoFinal = calcularSaldoInvestimento(investimentoMensal, taxaJurosMensal);
        console.log(`Saldo do investimento após 1 ano: R$ ${saldoFinal}`);

        const continuar = question("Deseja processar mais um ano (S/N) ? ");
        if (continuar.toUpperCase() !== 'S') {
            break;
        }
    } while (true);

    console.log("Obrigado por utilizar nosso serviço!");
}

main();
