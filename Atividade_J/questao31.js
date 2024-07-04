import { questionInt } from 'readline-sync';

function obterDigito(numero, posicao) {
    const digito = Math.floor(numero / Math.pow(10, posicao)) % 10;
    return digito;
}

function converterDigitoParaRomano(digito, unidade, cinco, dez) {
    let romano = "";
    if (digito === 9) {
        romano += unidade + dez;
    } else if (digito >= 5) {
        romano += cinco;
        for (let i = 0; i < digito - 5; i++) {
            romano += unidade;
        }
    } else if (digito === 4) {
        romano += unidade + cinco;
    } else {
        for (let i = 0; i < digito; i++) {
            romano += unidade;
        }
    }
    return romano;
}

function converterParaRomano(numero) {
    const unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const dezenas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const centenas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    
    const centena = obterDigito(numero, 2);
    const dezena = obterDigito(numero, 1);
    const unidade = obterDigito(numero, 0);

    const romanoCentena = converterDigitoParaRomano(centena, centenas[1], centenas[5], centenas[10]);
    const romanoDezena = converterDigitoParaRomano(dezena, dezenas[1], dezenas[5], dezenas[10]);
    const romanoUnidade = unidades[unidade];

    return romanoCentena + romanoDezena + romanoUnidade;
}

function main() {
    console.log("Conversor de números decimais para numeração romana");

    const numeroDecimal = questionInt("Digite um número decimal de até 3 dígitos: ");
    if (numeroDecimal < 1 || numeroDecimal > 999) {
        console.log("Número inválido. Por favor, digite um número decimal entre 1 e 999.");
        return;
    }

    const numeroRomano = converterParaRomano(numeroDecimal);
    console.log(`O número decimal ${numeroDecimal} é equivalente a ${numeroRomano} em numeração romana.`);
}

main();
