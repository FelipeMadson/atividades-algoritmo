import { questionInt } from 'readline-sync';

function calcularConsumo() {
    let distanciaTotal = 0;
    let litrosConsumidosTotal = 0;

    while (distanciaTotal < 600 && litrosConsumidosTotal < 50) {
        const distanciaPercorrida = questionInt('Digite a distância percorrida desde a última medição (em km): ');
        const litrosConsumidos = questionInt('Digite a quantidade de litros consumidos para percorrer a distância indicada: ');

        distanciaTotal += distanciaPercorrida;
        litrosConsumidosTotal += litrosConsumidos;
    }

    const consumo = distanciaTotal / litrosConsumidosTotal;

    if (distanciaTotal >= 600) {
        console.log('O carro chegou ao seu destino.');
    } else if (litrosConsumidosTotal >= 50) {
        console.log('O carro parou antes de chegar por falta de combustível.');
    }

    console.log(`Consumo do carro: ${consumo.toFixed(2)} km/l`);
}

calcularConsumo();
