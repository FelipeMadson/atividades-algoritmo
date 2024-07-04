import { questionInt } from 'readline-sync';

function calcularAudiencia(totalPessoas, totalCasas) {
    return (totalPessoas / totalCasas) * 100;
}

const audienciaCanal = {
    2: 0,
    4: 0,
    5: 0,
    7: 0,
    10: 0
};

let totalCasas = 0;

while (true) {
    const canal = questionInt('Digite o número do canal (ou zero para encerrar): ');

    if (canal === 0) {
        break;
    }

    const pessoasAssistindo = questionInt('Digite o número de pessoas assistindo TV: ');

    audienciaCanal[canal] += pessoasAssistindo;
    totalCasas++;
}

console.log('\nAudiência por canal:');
for (const [canal, audiencia] of Object.entries(audienciaCanal)) {
    const percentual = calcularAudiencia(audiencia, totalCasas);
    console.log(`Canal ${canal}: ${percentual.toFixed(2)}%`);
}
