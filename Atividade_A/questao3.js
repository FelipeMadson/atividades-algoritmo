import { question } from 'readline-sync';

console.log('--------------- Equivalência em Horas ---------------')

// Entrada (calcular o equivalente em minutos)
var calcularHorasMinutos = (minutos) => {
    // (Calcular as hrs)
    var horas = Math.floor(minutos / 60);
    // (Calcular os min restantes)
    var minutosRestantes = minutos % 60;
    // (Retornar um objt com as horas e minutos)
    return { horas, minutosRestantes };
};

// Processamento (inserir os minutos)
var minutos = parseInt(question("Digite o valor em minutos: "));

// (função para calcular as horas e minutos equivalentes)
var resultado = calcularHorasMinutos(minutos);

// Saída
console.log(`Equivalente a ${resultado.horas} horas e ${resultado.minutosRestantes} minutos.`);
