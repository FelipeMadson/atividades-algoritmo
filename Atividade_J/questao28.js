import { questionInt } from 'readline-sync';

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let numeroUsuario;

console.log('Bem-vindo ao jogo de adivinhação!');

do {
    numeroUsuario = questionInt('Digite um número entre 1 e 100: ');
    tentativas++;

    if (numeroUsuario < numeroAleatorio) {
        console.log('Maior');
    } else if (numeroUsuario > numeroAleatorio) {
        console.log('Menor');
    } else {
        console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
    }
} while (numeroUsuario !== numeroAleatorio);
