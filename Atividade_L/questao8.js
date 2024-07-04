import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
const LimiteInferior = questionInt("Digite o Limite Inferior: ");
const LimiteSuperior = questionInt("Digite o Limite Superior: ");

let i = LimiteInferior;
while (i <= LimiteSuperior) {
    if (i % N === 0) {
        console.log(i);
    }
    i++;
}