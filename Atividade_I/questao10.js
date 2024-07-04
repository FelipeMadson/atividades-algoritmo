import { question } from 'readline-sync';

function calcularPesoCombustivel(litros) {
    return litros * 1.5;
}

function verificarDecolagem(pesoTotal) {
    const pesoDecolagem = 500000;
    const combustivelMinimo = 10000 * 1.5;
    return pesoTotal <= pesoDecolagem && combustivelMinimo <= pesoTotal;
}

function main() {
    const numContainers = parseInt(question("Digite o número de containers: "));

    let pesoCarga = 0;
    for (let i = 1; i <= numContainers; i++) {
        const pesoContainer = parseFloat(question(`Digite o peso do container ${i}: `));
        pesoCarga += pesoContainer;
    }

    let numPassageiros = 0;
    let pesoPassageiros = 0;
    let volumeBagagemTotal = 0;
    let bilhete;
    do {
        bilhete = parseInt(question("Digite o número do bilhete do passageiro (ou 0 para encerrar): "));
        if (bilhete !== 0) {
            const numBagagens = parseInt(question("Digite a quantidade de bagagens do passageiro: "));
            numPassageiros++;
            pesoPassageiros += 70;
            volumeBagagemTotal += numBagagens * 10;
        }
    } while (bilhete !== 0);

    const pesoTotal = pesoCarga + pesoPassageiros + volumeBagagemTotal;

    const quantidadeCombustivel = (500000 - pesoTotal) / 1.5;

    const decolagemAutorizada = verificarDecolagem(pesoTotal);

    console.log(`Quantidade de passageiros: ${numPassageiros}`);
    console.log(`Volume total de bagagem: ${volumeBagagemTotal} kg`);
    console.log(`Peso total dos passageiros: ${pesoPassageiros} kg`);
    console.log(`Peso da carga: ${pesoCarga} kg`);
    console.log(`Quantidade possível de combustível: ${quantidadeCombustivel} litros`);
    if (decolagemAutorizada) {
        console.log("Decolagem autorizada.");
    } else {
        console.log("Decolagem não autorizada.");
    }
}

main();
