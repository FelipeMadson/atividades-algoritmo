import { question } from 'readline-sync';

function calcularAreaRetangulo(x1, y1, x2, y2) {
    const largura = Math.abs(x2 - x1);
    const altura = Math.abs(y2 - y1);

    const area = largura * altura;

    return area;
}

function main() {
    const x1 = parseFloat(question("Digite a coordenada x do primeiro ponto: "));
    const y1 = parseFloat(question("Digite a coordenada y do primeiro ponto: "));
    const x2 = parseFloat(question("Digite a coordenada x do segundo ponto: "));
    const y2 = parseFloat(question("Digite a coordenada y do segundo ponto: "));

    console.log(`A área do retângulo é: ${calcularAreaRetangulo(x1, y1, x2, y2)}`);
}

main();
