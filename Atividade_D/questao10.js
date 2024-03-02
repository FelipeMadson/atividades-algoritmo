import { question } from 'readline-sync';

const dia = parseInt(question("Digite o dia: "));
const mes = parseInt(question("Digite o mês: "));
const ano = parseInt(question("Digite o ano: "));

let dataValida = true;

const ehBissexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));

if (mes < 1 || mes > 12) {
    dataValida = false;
} else if (dia < 1 || dia > 31) {
    dataValida = false;
} else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
    dataValida = false;
} else if (mes === 2) {
    if (ehBissexto && dia > 29) {
        dataValida = false;
    } else if (!ehBissexto && dia > 28) {
        dataValida = false;
    }
}

if (dataValida) {
    console.log("A data é válida.");
} else {
    console.log("A data é inválida.");
}
