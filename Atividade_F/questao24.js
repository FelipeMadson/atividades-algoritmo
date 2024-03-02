import { question } from 'readline-sync';

function calcularRaizes(a, b, c) {
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "A equação não possui raízes reais.";
    } else if (delta === 0) {
        const raiz = -b / (2 * a);
        return `A equação possui uma raiz real: ${raiz.toFixed(2)}`;
    } else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `A equação possui duas raízes reais: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`;
    }
}

function main() {
    const a = parseFloat(question("Digite o coeficiente 'a' da equação: "));
    const b = parseFloat(question("Digite o coeficiente 'b' da equação: "));
    const c = parseFloat(question("Digite o coeficiente 'c' da equação: "));

    if (a === 0) {
        console.log("O coeficiente 'a' deve ser diferente de zero.");
        return;
    }

    console.log(calcularRaizes(a, b, c));
}

main();
