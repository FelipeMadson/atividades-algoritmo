c

let totalIdadeMulheres = 0;
let totalMulheres = 0;
let totalIdadeHomens = 0;
let totalHomens = 0;
let totalHomensSolteiros = 0;
let totalMulheresSolteiras = 0;
let totalMulheresDivorciadasAcima30 = 0;

for (let i = 0; i < 100; i++) {
    const sexo = questionInt('Digite o sexo da pessoa (1=Masculino, 2=Feminino): ');
    const idade = questionInt('Digite a idade da pessoa: ');
    const estadoCivil = questionInt('Digite o estado civil da pessoa (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo): ');

    if (sexo === 1) {
        totalIdadeHomens += idade;
        totalHomens++;

        if (estadoCivil === 2) {
            totalHomensSolteiros++;
        }
    } else if (sexo === 2) {
        totalIdadeMulheres += idade;
        totalMulheres++;

        if (estadoCivil === 2) {
            totalMulheresSolteiras++;
        }

        if (estadoCivil === 3 && idade > 30) {
            totalMulheresDivorciadasAcima30++;
        }
    }
}

const mediaIdadeMulheres = totalIdadeMulheres / totalMulheres;
const mediaIdadeHomens = totalIdadeHomens / totalHomens;
const percentualHomensSolteiros = (totalHomensSolteiros / totalHomens) * 100;
const percentualMulheresSolteiras = (totalMulheresSolteiras / totalMulheres) * 100;

console.log(`\nMédia de idade das mulheres: ${mediaIdadeMulheres.toFixed(2)}`);
console.log(`Média de idade dos homens: ${mediaIdadeHomens.toFixed(2)}`);
console.log(`Percentual de homens solteiros: ${percentualHomensSolteiros.toFixed(2)}%`);
console.log(`Percentual de mulheres solteiras: ${percentualMulheresSolteiras.toFixed(2)}%`);
console.log(`Quantidade de mulheres divorciadas acima de 30 anos: ${totalMulheresDivorciadasAcima30}`);
