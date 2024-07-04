import { question } from 'readline-sync';

let pontosClubeA = 0;
let pontosClubeB = 0;

function determinarPontos(classificacao) {
    switch (classificacao) {
        case 1:
            return 9;
        case 2:
            return 6;
        case 3:
            return 4;
        case 4:
            return 3;
        default:
            return 0;
    }
}

let numeroProva;
do {
    numeroProva = parseInt(question("Digite o número da prova (ou 0 para encerrar): "));
    if (numeroProva !== 0) {
        const quantidadeNadadores = parseInt(question("Digite a quantidade de nadadores: "));
        
        for (let i = 0; i < quantidadeNadadores; i++) {
            const nome = question("Digite o nome do nadador: ");
            const classificacao = parseInt(question("Digite a classificação do nadador: "));
            const tempo = parseFloat(question("Digite o tempo do nadador: "));
            const clube = question("Digite o clube do nadador (a ou b): ").toLowerCase();
            
            const pontos = determinarPontos(classificacao);
            
            if (clube === 'a') {
                pontosClubeA += pontos;
            } else if (clube === 'b') {
                pontosClubeB += pontos;
            }
        }
    }
} while (numeroProva !== 0);

let clubeVencedor;
if (pontosClubeA > pontosClubeB) {
    clubeVencedor = 'A';
} else if (pontosClubeB > pontosClubeA) {
    clubeVencedor = 'B';
} else {
    clubeVencedor = 'Empate';
}

console.log(`Total de pontos do Clube A: ${pontosClubeA}`);
console.log(`Total de pontos do Clube B: ${pontosClubeB}`);
console.log(`O clube vencedor é o Clube ${clubeVencedor}.`);
