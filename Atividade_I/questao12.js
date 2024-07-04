import { question } from 'readline-sync';

function determinarVencedor(pontosJogador1, pontosJogador2) {
    if ((pontosJogador1 >= 21 && pontosJogador1 - pontosJogador2 >= 2) || (pontosJogador2 >= 21 && pontosJogador2 - pontosJogador1 >= 2)) {
        return pontosJogador1 > pontosJogador2 ? 1 : 2;
    } else if (pontosJogador1 > 21 || pontosJogador2 > 21) {
        if (Math.abs(pontosJogador1 - pontosJogador2) >= 2) {
            return pontosJogador1 > pontosJogador2 ? 1 : 2;
        }
    }
    return 0;
}

function main() {
    let pontosJogador1 = 0;
    let pontosJogador2 = 0;
    
    do {
        const jogadorGanhouPonto = parseInt(question("Digite o código do jogador que ganhou o ponto (1 ou 2), ou 0 para encerrar: "));
        
        if (jogadorGanhouPonto === 1) {
            pontosJogador1++;
        } else if (jogadorGanhouPonto === 2) {
            pontosJogador2++;
        } else if (jogadorGanhouPonto === 0) {
            break; 
        } else {
            console.log("Código de jogador inválido. Digite 1, 2 ou 0 para encerrar.");
        }
        
        const vencedor = determinarVencedor(pontosJogador1, pontosJogador2);
        if (vencedor !== 0) {
            console.log(`O jogador ${vencedor} venceu a partida!`);
            return;
        }
    } while (true);
    
    console.log("A partida foi encerrada sem um vencedor.");
}

main();
