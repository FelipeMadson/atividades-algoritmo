import { questionInt } from 'readline-sync';

function calcularDiasUteisParaPagamento(emprestimo, pagamentoDiario) {
    const taxaJurosDiaria = 0.0085; 

    let saldoRestante = emprestimo;
    let diasUteis = 0;

    while (saldoRestante > 0) {
        if (ehDiaUtil()) {
            saldoRestante -= pagamentoDiario;
            saldoRestante *= (1 + taxaJurosDiaria);
            diasUteis++;
        }
    }

    return diasUteis;
}

function ehDiaUtil() {
    return true;
}

const emprestimo = questionInt("Informe o valor do empréstimo: ");
const pagamentoDiario = questionInt("Informe o valor do pagamento diário: ");

const diasNecessarios = calcularDiasUteisParaPagamento(emprestimo, pagamentoDiario);
console.log(`Dias úteis necessários para concluir o pagamento do empréstimo: ${diasNecessarios}`);
