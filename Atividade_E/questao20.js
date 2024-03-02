import { question } from 'readline-sync';

function determinarQuadrante(angulo) {
    if (angulo >= 0 && angulo < 90) {
        return "primeiro quadrante";
    } else if (angulo >= 90 && angulo < 180) {
        return "segundo quadrante";
    } else if (angulo >= 180 && angulo < 270) {
        return "terceiro quadrante";
    } else if (angulo >= 270 && angulo < 360) {
        return "quarto quadrante";
    } else {
        return "inválido";
    }
}

function main() {
    const angulo = parseFloat(question("Digite a medida do ângulo (entre 0 e 360 graus): "));

    const quadrante = determinarQuadrante(angulo);

    if (quadrante !== "inválido") {
        console.log(`O ângulo de ${angulo} graus está localizado no ${quadrante}.`);
    } else {
        console.log("O ângulo inserido é inválido. Por favor, insira um ângulo entre 0 e 360 graus.");
    }
}

main();
