import { question } from 'readline-sync';

function calcularAumento(salarioAtual) {
    if (salarioAtual <= 2999.99) {
        return salarioAtual * 0.25;
    } else if (salarioAtual <= 5999.99) {
        return salarioAtual * 0.20;
    } else if (salarioAtual <= 9999.99) {
        return salarioAtual * 0.15;
    } else {
        return salarioAtual * 0.10;
    }
}

function main() {
    let salarioAtual;
    let somaSalariosAtuais = 0;
    let somaSalariosReajustados = 0;

    do {
        salarioAtual = parseFloat(question("Digite o salário do funcionário (ou 0 para encerrar): R$ "));
        
        if (salarioAtual === 0) {
            break;
        }

        const acrescimo = calcularAumento(salarioAtual);
        const novoSalario = salarioAtual + acrescimo;

        console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);

        somaSalariosAtuais += salarioAtual;
        somaSalariosReajustados += novoSalario;
    } while (true);

    console.log(`Soma dos salários atuais: R$ ${somaSalariosAtuais.toFixed(2)}`);
    console.log(`Soma dos salários reajustados: R$ ${somaSalariosReajustados.toFixed(2)}`);
    console.log(`Diferença entre as duas somas: R$ ${(somaSalariosReajustados - somaSalariosAtuais).toFixed(2)}`);
}

main();
