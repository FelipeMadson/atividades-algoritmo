import { question } from 'readline-sync';

const precos = {
    fileAte5Kg: 4.90,
    fileMais5Kg: 5.80,
    alcatraAte5Kg: 5.90,
    alcatraMais5Kg: 6.80,
    picanhaAte5Kg: 6.90,
    picanhaMais5Kg: 7.80
};

const tipoCarne = question("Qual tipo de carne você deseja comprar (File, Alcatra ou Picanha)? ");
const quantidadeKg = parseFloat(question("Quantos quilogramas você deseja comprar? "));

let precoTotal;
if (quantidadeKg <= 5) {
    precoTotal = precos[`${tipoCarne.toLowerCase()}Ate5Kg`] * quantidadeKg;
} else {
    precoTotal = precos[`${tipoCarne.toLowerCase()}Mais5Kg`] * quantidadeKg;
}

let tipoPagamento = "dinheiro";
let desconto = 0;
const usarCartao = question("A compra será feita com o cartão Tabajara (sim/não)? ");
if (usarCartao.toLowerCase() === "sim") {
    tipoPagamento = "cartão Tabajara";
    desconto = precoTotal * 0.05; 
    precoTotal -= desconto;
}

console.log("Cupom Fiscal:");
console.log(`Tipo de carne: ${tipoCarne}`);
console.log(`Quantidade: ${quantidadeKg.toFixed(2)} Kg`);
console.log(`Preço total: R$ ${precoTotal.toFixed(2)}`);
console.log(`Tipo de pagamento: ${tipoPagamento}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Valor a pagar: R$ ${(precoTotal - desconto).toFixed(2)}`);
