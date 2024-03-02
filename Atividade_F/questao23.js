import { question } from 'readline-sync';

function dataMaisRecente(dia1, mes1, ano1, dia2, mes2, ano2) {
    if (ano1 > ano2) {
        return "A primeira data é mais recente.";
    } else if (ano1 < ano2) {
        return "A segunda data é mais recente.";
    } else {
        if (mes1 > mes2) {
            return "A primeira data é mais recente.";
        } else if (mes1 < mes2) {
            return "A segunda data é mais recente.";
        } else {
            if (dia1 > dia2) {
                return "A primeira data é mais recente.";
            } else if (dia1 < dia2) {
                return "A segunda data é mais recente.";
            } else {
                return "As datas são iguais.";
            }
        }
    }
}

function main() {
    const dia1 = parseInt(question("Digite o dia da primeira data: "));
    const mes1 = parseInt(question("Digite o mês da primeira data: "));
    const ano1 = parseInt(question("Digite o ano da primeira data: "));

    const dia2 = parseInt(question("Digite o dia da segunda data: "));
    const mes2 = parseInt(question("Digite o mês da segunda data: "));
    const ano2 = parseInt(question("Digite o ano da segunda data: "));

    console.log(dataMaisRecente(dia1, mes1, ano1, dia2, mes2, ano2));
}

main();
