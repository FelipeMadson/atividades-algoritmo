import { question } from 'readline-sync';

function calcularDuracaoJogo(horaInicio, minutoInicio, horaFim, minutoFim) {
    const minutosInicio = horaInicio * 60 + minutoInicio;
    const minutosFim = horaFim * 60 + minutoFim;

    let diferencaMinutos = minutosFim - minutosInicio;

    if (diferencaMinutos < 0) {
        diferencaMinutos += 24 * 60;
    }

    const horas = Math.floor(diferencaMinutos / 60);
    const minutos = diferencaMinutos % 60;

    return { horas, minutos };
}

function main() {
    const horaInicio = parseInt(question("Digite a hora de início do jogo: "));
    const minutoInicio = parseInt(question("Digite os minutos de início do jogo: "));

    const horaFim = parseInt(question("Digite a hora de término do jogo: "));
    const minutoFim = parseInt(question("Digite os minutos de término do jogo: "));

    const duracao = calcularDuracaoJogo(horaInicio, minutoInicio, horaFim, minutoFim);

    console.log(`A duração do jogo foi de ${duracao.horas} horas e ${duracao.minutos} minutos.`);
}

main();
