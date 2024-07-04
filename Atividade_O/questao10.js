import { questionInt } from 'readline-sync';

const LimiteInferior = questionInt("Digite o Limite Inferior: ");
const LimiteSuperior = questionInt("Digite o Limite Superior: ");

for (let i = LimiteInferior; i <= LimiteSuperior; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}