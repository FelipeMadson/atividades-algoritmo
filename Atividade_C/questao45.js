import { question } from 'readline-sync';

// Função 
function distribuicaoNotas(quantia) {
    const notasDisponiveis = [50, 10, 5, 1];
    let distribuicao = {};

    let valorRestante = quantia;
    for (let nota of notasDisponiveis) {
        let quantidadeNotas = Math.floor(valorRestante / nota);
        if (quantidadeNotas > 0) {
            distribuicao[nota] = quantidadeNotas;
            valorRestante -= quantidadeNotas * nota;
        }
    }

    return distribuicao;
}

// Entrada
let quantia = parseInt(question("Digite o valor da quantia solicitada: "));

// Processamento
let distribuicao = distribuicaoNotas(quantia);

// Saída
console.log("Distribuição ótima de notas:");
for (let nota in distribuicao) {
    console.log(`${distribuicao[nota]} nota(s) de R$ ${nota}`);
}
