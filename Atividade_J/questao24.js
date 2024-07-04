import { questionInt } from 'readline-sync';

function termosPA(primeiroTermo, razao, quantidade) {
    const termos = [primeiroTermo];
    let termoAtual = primeiroTermo;

    for (let i = 1; i < quantidade; i++) {
        termoAtual += razao;
        termos.push(termoAtual);
    }

    return termos;
}

const razao = questionInt('Digite a razão da PA: ');
const primeiroTermo = questionInt('Digite o primeiro termo da PA: ');
const quantidadeTermos = questionInt('Digite a quantidade de termos da PA: ');

const termos = termosPA(primeiroTermo, razao, quantidadeTermos);
console.log(`Os ${quantidadeTermos} termos da PA são: ${termos.join(', ')}`);
