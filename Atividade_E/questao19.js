import { question } from 'readline-sync';

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function main() {
    const altura = parseFloat(question("Digite a altura da pessoa (em metros): "));
    const peso = parseFloat(question("Digite o peso da pessoa (em Kg): "));

    const imc = calcularIMC(peso, altura);

    let categoriaPeso;
    if (imc < 25) {
        categoriaPeso = "Peso normal";
    } else if (imc >= 25 && imc <= 30) {
        categoriaPeso = "Obeso";
    } else {
        categoriaPeso = "Obesidade mórbida";
    }

    console.log(`O IMC da pessoa é: ${imc.toFixed(2)}`);
    console.log(`Categoria de peso: ${categoriaPeso}`);
}

main();
