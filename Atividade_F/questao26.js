import { question } from 'readline-sync';

function verificarTrianguloRetangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2) {
            return true;
        }
    }
    return false;
}

function identificarHipotenusaCatetos(a, b, c) {
    if (verificarTrianguloRetangulo(a, b, c)) {
        const ladosOrdenados = [a, b, c].sort((x, y) => x - y);
        const cateto1 = ladosOrdenados[0];
        const cateto2 = ladosOrdenados[1];
        const hipotenusa = ladosOrdenados[2];
        return `Catetos: ${cateto1} e ${cateto2}, Hipotenusa: ${hipotenusa}`;
    } else {
        return "Os lados fornecidos não formam um triângulo retângulo.";
    }
}


function main() {
    const a = parseFloat(question("Digite o comprimento do primeiro lado do triângulo: "));
    const b = parseFloat(question("Digite o comprimento do segundo lado do triângulo: "));
    const c = parseFloat(question("Digite o comprimento do terceiro lado do triângulo: "));

    console.log(identificarHipotenusaCatetos(a, b, c));
}

main();
