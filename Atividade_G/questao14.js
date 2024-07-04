import { question } from 'readline-sync';

const precoGasolina = 2.50;
const precoAlcool = 1.90;

const litros = parseFloat(question("Quantos litros foram vendidos? "));
const tipoCombustivel = question("Qual o tipo de combustível (A - Álcool, G - Gasolina)? ").toUpperCase();

let descontoPorLitro;
if (litros <= 20) {
    descontoPorLitro = (tipoCombustivel === 'A') ? 0.03 : 0.04;
} else {
    descontoPorLitro = (tipoCombustivel === 'A') ? 0.05 : 0.06;
}

let precoPorLitro = (tipoCombustivel === 'A') ? precoAlcool : precoGasolina;
let valorDesconto = litros * descontoPorLitro * precoPorLitro;
let valorTotal = litros * precoPorLitro - valorDesconto;

console.log(`O valor a ser pago pelo cliente é R$ ${valorTotal.toFixed(2)}.`);
