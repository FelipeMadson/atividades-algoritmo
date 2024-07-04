import { question } from 'readline-sync';

function determinarSaudacao(turno) {
    turno = turno.toLowerCase();
    
    if (turno === 'm') {
        return "Bom Dia!";
    } else if (turno === 'v') {
        return "Boa Tarde!";
    } else if (turno === 'n') {
        return "Boa Noite!";
    } else {
        return "Valor Inválido!";
    }
}

function main() {
    const turno = question("Digite o turno (M para matutino, V para vespertino ou N para noturno): ");

    const saudacao = determinarSaudacao(turno);
    console.log(saudacao);
}

main();
