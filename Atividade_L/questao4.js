import { questionFloat } from 'readline-sync';

const A0 = questionFloat("Digite o valor inicial A0: ");
const Limite = questionFloat("Digite o Limite: ");
const R = questionFloat("Digite a razão R: ");

let termo = A0;
while (termo < Limite) {
    console.log(termo);
    termo *= R;
}