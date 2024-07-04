import { questionInt, questionFloat } from 'readline-sync';

const N = questionInt("Digite o número de habitantes: ");
let somaSalario = 0, somaFilhos = 0, pessoasAte1000 = 0;
let i = 1;

while (i <= N) {
    const salario = questionFloat(`Digite o salário do habitante ${i}: `);
    const filhos = questionInt(`Digite o número de filhos do habitante ${i}: `);
    
    somaSalario += salario;
    somaFilhos += filhos;
    if (salario <= 1000) pessoasAte1000++;
    i++;
}

console.log(`Média de salário: R$ ${(somaSalario / N).toFixed(2)}`);
console.log(`Média de filhos: ${(somaFilhos / N).toFixed(2)}`);
console.log(`Percentual com salário até R$ 1000: ${(pessoasAte1000 / N * 100).toFixed(2)}%`);