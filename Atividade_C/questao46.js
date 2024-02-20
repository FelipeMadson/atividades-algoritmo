import { question } from 'readline-sync';

// Função
function calcularPagamento(valorTotal) {
    let entrada = Math.ceil(valorTotal / 3);
    let prestacao = Math.floor((valorTotal - entrada) / 2);
    return { entrada, prestacao };
}

// Entrada (inserir o valor da mercadoria)
let valorMercadoria = parseFloat(question("Digite o valor da mercadoria: "));

// Processamento alculando o pagamento (entrada e duas prestações)
let pagamento = calcularPagamento(valorMercadoria);

// Saída
console.log(`Para uma mercadoria no valor de R$ ${valorMercadoria.toFixed(2)}, o pagamento seria:`);
console.log(`Entrada: R$ ${pagamento.entrada.toFixed(2)}`);
console.log(`Prestações: R$ ${pagamento.prestacao.toFixed(2)} (cada)`);