import { question } from 'readline-sync';

function verificarLetra(letra) {
    letra = letra.toLowerCase();
    
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return "Vogal";
    } else if (letra >= 'a' && letra <= 'z') {
        return "Consoante";
    } else {
        return "Caractere inválido";
    }
}

function main() {
    const letra = question("Digite uma letra: ");

    const resultado = verificarLetra(letra);
    console.log(resultado);
}

main();
