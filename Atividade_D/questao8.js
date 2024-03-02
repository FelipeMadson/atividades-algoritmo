import { question } from 'readline-sync';

const diaAtual = parseInt(question("Digite o dia atual: "));
const mesAtual = parseInt(question("Digite o mês atual: "));
const anoAtual = parseInt(question("Digite o ano atual: "));

const diaNascimento = parseInt(question("Digite o dia do seu nascimento: "));
const mesNascimento = parseInt(question("Digite o mês do seu nascimento: "));
const anoNascimento = parseInt(question("Digite o ano do seu nascimento: "));

let idade = anoAtual - anoNascimento;

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
}

console.log("Sua idade exata é: " + idade + " anos.");
