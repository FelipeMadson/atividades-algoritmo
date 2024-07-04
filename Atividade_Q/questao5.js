import { questionFloat } from 'readline-sync';

const A0 = questionFloat("Digite o valor inicial A0: ");
const Limite = questionFloat("Digite o Limite: ");
const R = questionFloat("Digite a razão R: ");

for (let termo = A0; termo < Limite; termo *= R) {
    console.log(termo);
}