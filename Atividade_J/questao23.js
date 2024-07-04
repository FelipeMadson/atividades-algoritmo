import { questionInt } from 'readline-sync';

function termosPG(primeiroTermo, razao, quantidade) {
    const termos = [primeiroTermo];
    let proximoTermo = primeiroTermo;

    for (let i = 1; i < quantidade; i++) {
        proximoTermo *= razao;
        termos.push(proximoTermo);
    }

    return termos;
}

const razao = questionInt('Digite a razão da PG: ');
const primeiroTermo = questionInt('Digite o primeiro termo da PG: ');
const quantidadeTermos = questionInt('Digite a quantidade de termos da PG: ');

const termos = termosPG(primeiroTermo, razao, quantidadeTermos);
console.log(`Os ${quantidadeTermos} termos da PG são: ${termos.join(', ')}`);
