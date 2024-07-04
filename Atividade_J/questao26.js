import { questionInt } from 'readline-sync';

let totalIdadeOtimo = 0;
let totalPessoasOtimo = 0;
let totalPessoasRegular = 0;
let totalPessoas = 0;
let totalPessoasBom = 0;

while (true) {
    const idade = questionInt('Digite a idade da pessoa (ou -1 para encerrar): ');

    if (idade === -1) {
        break;
    }

    const opiniao = questionInt('Digite a opinião da pessoa (1=ótimo, 2=bom, 3=regular, 4=péssimo): ');

    if (opiniao === 1) {
        totalIdadeOtimo += idade;
        totalPessoasOtimo++;
    } else if (opiniao === 3) {
        totalPessoasRegular++;
    } else if (opiniao === 2) {
        totalPessoasBom++;
    }

    totalPessoas++;
}

const mediaIdadeOtimo = totalIdadeOtimo / totalPessoasOtimo;
const percentualBom = (totalPessoasBom / totalPessoas) * 100;

console.log(`\nMédia das idades das pessoas que responderam ótimo: ${mediaIdadeOtimo.toFixed(2)}`);
console.log(`Quantidade de pessoas que responderam regular: ${totalPessoasRegular}`);
console.log(`Percentual de pessoas que responderam bom: ${percentualBom.toFixed(2)}%`);
