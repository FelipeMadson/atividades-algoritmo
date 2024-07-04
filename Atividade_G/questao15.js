import { questionFloat } from 'readline-sync';

const precoMorangoAte5Kg = 2.50;
const precoMorangoMais5Kg = 2.20;
const precoMacaAte5Kg = 1.80;
const precoMacaMais5Kg = 1.50;

const kgMorango = questionFloat("Quantos quilos de morango você comprou? ");
const kgMaca = questionFloat("Quantos quilos de maçã você comprou? ");

let precoMorangoTotal;
if (kgMorango <= 5) {
    precoMorangoTotal = kgMorango * precoMorangoAte5Kg;
} else {
    precoMorangoTotal = kgMorango * precoMorangoMais5Kg;
}

let precoMacaTotal;
if (kgMaca <= 5) {
    precoMacaTotal = kgMaca * precoMacaAte5Kg;
} else {
    precoMacaTotal = kgMaca * precoMacaMais5Kg;
}

let precoTotal = precoMorangoTotal + precoMacaTotal;

if (kgMorango + kgMaca > 8 || precoTotal > 25) {
    precoTotal *= 0.9; 
}

console.log(`O valor a ser pago é R$ ${precoTotal.toFixed(2)}.`);
