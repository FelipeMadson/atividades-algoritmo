function calcularAnosParaUltrapassar(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;
    while (populacaoA <= populacaoB) {
        populacaoA *= (1 + taxaCrescimentoA / 100);
        populacaoB *= (1 + taxaCrescimentoB / 100);
        anos++;
    }
    return anos;
}

const populacaoA = 200000;
const taxaCrescimentoA = 3.5;
const populacaoB = 800000;
const taxaCrescimentoB = 1.35;

const anosNecessarios = calcularAnosParaUltrapassar(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);

console.log(`Serão necessários ${anosNecessarios} anos para que a população da cidade A ultrapasse a população da cidade B.`);
