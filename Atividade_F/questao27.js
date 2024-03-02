import { question } from 'readline-sync';

function calcularIdade(diaNascimento, mesNascimento, anoNascimento, diaAtual, mesAtual, anoAtual) {
    let idadeAnos = anoAtual - anoNascimento;
    let idadeMeses = mesAtual - mesNascimento;
    let idadeDias = diaAtual - diaNascimento;

    if (idadeDias < 0) {
        idadeMeses--;
        const diasMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
        idadeDias += diasMesAnterior;
    }

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idadeAnos--; 
        idadeMeses += 12; 
    }

    return `Idade: ${idadeAnos} anos, ${idadeMeses} meses e ${idadeDias} dias`;
}

function main() {
    const diaNascimento = parseInt(question("Digite o dia de nascimento: "));
    const mesNascimento = parseInt(question("Digite o mês de nascimento: "));
    const anoNascimento = parseInt(question("Digite o ano de nascimento: "));

    const diaAtual = parseInt(question("Digite o dia atual: "));
    const mesAtual = parseInt(question("Digite o mês atual: "));
    const anoAtual = parseInt(question("Digite o ano atual: "));

    console.log(calcularIdade(diaNascimento, mesNascimento, anoNascimento, diaAtual, mesAtual, anoAtual));
}

main();
