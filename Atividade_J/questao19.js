import { questionInt } from 'readline-sync';

function encontrarBoisExtremos() {
    let boiMaisMagro = { id: 0, peso: Infinity };
    let boiMaisGordo = { id: 0, peso: -Infinity };

    while (true) {
        const id = questionInt('Digite o número de identificação do boi (0 para parar): ');
        if (id === 0) break;

        const peso = questionInt('Digite o peso do boi: ');

        if (peso < boiMaisMagro.peso) {
            boiMaisMagro = { id, peso };
        }

        if (peso > boiMaisGordo.peso) {
            boiMaisGordo = { id, peso };
        }
    }

    return { boiMaisMagro, boiMaisGordo };
}

const { boiMaisMagro, boiMaisGordo } = encontrarBoisExtremos();

console.log(`Boi mais magro - Número de identificação: ${boiMaisMagro.id}, Peso: ${boiMaisMagro.peso}`);
console.log(`Boi mais gordo - Número de identificação: ${boiMaisGordo.id}, Peso: ${boiMaisGordo.peso}`);
