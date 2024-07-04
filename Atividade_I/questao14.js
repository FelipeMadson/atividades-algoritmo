import { questionInt } from 'readline-sync';

function main() {
    let votosSerra = 0;
    let votosDilma = 0;
    let votosCiroGomes = 0;
    let votosIndecisos = 0;
    let votosOutros = 0;
    let votosNulosBranco = 0;
    let totalEntrevistados = 0;

    while (true) {
        const voto = questionInt("Digite o número correspondente ao candidato (ou -1 para encerrar): ");

        if (voto === -1) {
            break;
        }

        switch (voto) {
            case 45:
                votosSerra++;
                break;
            case 13:
                votosDilma++;
                break;
            case 23:
                votosCiroGomes++;
                break;
            case 99:
                votosIndecisos++;
                break;
            case 98:
                votosOutros++;
                break;
            case 0:
                votosNulosBranco++;
                break;
            default:
                console.log("Opção inválida.");
                break;
        }

        totalEntrevistados++;
    }

    const porcentagemSerra = (votosSerra / totalEntrevistados) * 100;
    const porcentagemDilma = (votosDilma / totalEntrevistados) * 100;
    const porcentagemCiroGomes = (votosCiroGomes / totalEntrevistados) * 100;
    const porcentagemIndecisos = (votosIndecisos / totalEntrevistados) * 100;
    const porcentagemOutros = (votosOutros / totalEntrevistados) * 100;
    const porcentagemNulosBranco = (votosNulosBranco / totalEntrevistados) * 100;

    console.log(`Porcentagem de votos para Serra: ${porcentagemSerra.toFixed(2)}%`);
    console.log(`Porcentagem de votos para Dilma: ${porcentagemDilma.toFixed(2)}%`);
    console.log(`Porcentagem de votos para Ciro Gomes: ${porcentagemCiroGomes.toFixed(2)}%`);
    console.log(`Porcentagem de eleitores indecisos: ${porcentagemIndecisos.toFixed(2)}%`);
    console.log(`Porcentagem de votos para outros candidatos: ${porcentagemOutros.toFixed(2)}%`);
    console.log(`Porcentagem de votos nulos/brancos: ${porcentagemNulosBranco.toFixed(2)}%`);
    console.log(`Total de entrevistados: ${totalEntrevistados}`);

    if (porcentagemSerra < 50 && porcentagemDilma < 50 && porcentagemCiroGomes < 50) {
        console.log("Pode haver segundo turno.");
    } else {
        console.log("Não há possibilidade de segundo turno.");
    }
}

main();
