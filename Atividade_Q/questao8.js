import { questionInt } from 'readline-sync';

const N = questionInt("Digite um número N: ");
const LimiteInferior = questionInt("Digite o Limite Inferior: ");
const LimiteSuperior = questionInt("Digite o Limite Superior: ");

for (let i = LimiteInferior; i <= LimiteSuperior; i++) {
    if (i % N === 0) {
        console.log(i);
    }
}