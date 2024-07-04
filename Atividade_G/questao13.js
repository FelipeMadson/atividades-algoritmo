import { question } from 'readline-sync';

let respostasPositivas = 0;

console.log("Responda 'sim' ou 'nao' para as seguintes perguntas:");

const respostaA = question("Telefonou para a vítima? ");
if (respostaA.toLowerCase() === "sim") {
    respostasPositivas++;
}

const respostaB = question("Esteve no local do crime? ");
if (respostaB.toLowerCase() === "sim") {
    respostasPositivas++;
}

const respostaC = question("Mora perto da vítima? ");
if (respostaC.toLowerCase() === "sim") {
    respostasPositivas++;
}

const respostaD = question("Devia para a vítima? ");
if (respostaD.toLowerCase() === "sim") {
    respostasPositivas++;
}

const respostaE = question("Já trabalhou com a vítima? ");
if (respostaE.toLowerCase() === "sim") {
    respostasPositivas++;
}

if (respostasPositivas === 2) {
    console.log("Você é suspeito(a)!");
} else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
    console.log("Você é cúmplice!");
} else if (respostasPositivas === 5) {
    console.log("Você é o assassino!");
} else {
    console.log("Você é inocente.");
}
