import { question } from 'readline-sync';

function verificarQuadradoPerfeito(numero) {
    const dezenasIniciais = parseInt(numero / 100);
    const dezenasFinais = numero % 100;
    
    const raizQuadrada = Math.sqrt(numero);
    
    return raizQuadrada === (dezenasIniciais + dezenasFinais);
}

function main() {
    const numero = parseInt(question("Digite um número de 4 dígitos: "));
    if (verificarQuadradoPerfeito(numero)) {
        console.log(`${numero} é um quadrado perfeito.`);
    } else {
        console.log(`${numero} não é um quadrado perfeito.`);
    }
}

main();
