import { questionInt } from 'readline-sync';

const LimiteInferior = questionInt("Digite o Limite Inferior: ");
const LimiteSuperior = questionInt("Digite o Limite Superior: ");

let i = LimiteInferior;
while (i <= LimiteSuperior) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}