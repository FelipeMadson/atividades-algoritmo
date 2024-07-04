import { question } from 'readline-sync';

function calcularDivisores(numero) {
    const divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

while (true) {
    const numero = parseInt(question("Digite um número (ou 0 para sair): "));
    if (numero === 0) {
        break;
    }
    const divisores = calcularDivisores(numero);
    console.log(`Número: ${numero}`);
    console.log(`Divisores: ${divisores.join(', ')}`);
}
