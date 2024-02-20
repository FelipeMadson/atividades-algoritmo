import { question } from 'readline-sync';

console.log('--------------- Cálculo CDU ---------------')

// Entrada (calcular a soma dos elementos [centena, dezena e unidade])
var calcularSomaElementos = (numero) => {
    // obter cada dígito separadamente
    var centena = Math.floor(numero / 100);
    var dezena = Math.floor((numero % 100) / 10);
    var unidade = numero % 10;
    // retornar a soma dos elementos
    return centena + dezena + unidade;
};

// Processamento (inserir o número inteiro de 3 dígitos)
var numero = parseInt(question("Digite um número inteiro de 3 dígitos: "));

// (verificar se o número tem 3 dígitos)
if (numero >= 100 && numero <= 999) {
    // função para calcular a soma dos elementos
    var somaElementos = calcularSomaElementos(numero);

// Saída
    console.log("A soma dos elementos é: " + somaElementos);
} else {
    console.log("O número inserido não tem 3 dígitos.");
}