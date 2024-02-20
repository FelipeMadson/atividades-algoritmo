import { question } from 'readline-sync';

// (função para calcular o determinante de uma matriz 2x2)
function calcularDeterminante(a, b, c, d) {
    return a * d - b * c;
}

// Entrada (inserir os coeficientes do sistema de equações)
var a = parseFloat(question("Digite o coeficiente a: "));
var b = parseFloat(question("Digite o coeficiente b: "));
var c = parseFloat(question("Digite o coeficiente c: "));
var d = parseFloat(question("Digite o coeficiente d: "));
var e = parseFloat(question("Digite o coeficiente e: "));
var f = parseFloat(question("Digite o coeficiente f: "));

// Processamento (calculando o determinante principal)
var determinantePrincipal = calcularDeterminante(a, b, d, e);

// (calculando o determinante x)
var determinanteX = calcularDeterminante(c, b, f, e);

// (calculando o determinante y)
var determinanteY = calcularDeterminante(a, c, d, f);

// (calculando os valores de x e y0
var x = determinanteX / determinantePrincipal;
var y = determinanteY / determinantePrincipal;

// Saída
console.log("O valor de x é: " + x);
console.log("O valor de y é: " + y);

// Entrada (inserir a quantidade de latão em kg)
var quantidadeLatao = parseFloat(question("Digite a quantidade de latão em kg: "));

// Processamento (calculando a quantidade de cobre (70%) e zinco (30%) para obter a quantidade de latão)
var quantidadeCobre = quantidadeLatao * 0.70;
var quantidadeZinco = quantidadeLatao * 0.30;

// Saída
console.log("Para obter " + quantidadeLatao + " kg de latão, são necessários:");
console.log("Quantidade de cobre: " + quantidadeCobre + " kg");
console.log("Quantidade de zinco: " + quantidadeZinco + " kg");
