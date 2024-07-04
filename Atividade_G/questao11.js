import { questionInt } from 'readline-sync';

function obterCentenasDezenasUnidades(numero) {
    const centenas = Math.floor(numero / 100);
    const dezenas = Math.floor((numero % 100) / 10);
    const unidades = numero % 10;

    const partes = [];

    if (centenas > 0) {
        partes.push(`${centenas} centena${centenas > 1 ? 's' : ''}`);
    }
    if (dezenas > 0) {
        partes.push(`${dezenas} dezena${dezenas > 1 ? 's' : ''}`);
    }
    if (unidades > 0) {
        partes.push(`${unidades} unidade${unidades > 1 ? 's' : ''}`);
    }

    const resultado = partes.join(', ').replace(/,([^,]*)$/, ' e$1');

    return resultado;
}

const numero = questionInt("Digite um número inteiro menor que 1000: ");

if (numero >= 0 && numero < 1000) {
    const resultado = obterCentenasDezenasUnidades(numero);

    console.log(resultado);
} else {
    console.log("Número fora do intervalo permitido.");
}
