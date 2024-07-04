import { question } from 'readline-sync';

function encontrarCandidatasExtremas() {
    let nomeMaisAlta = '';
    let alturaMaisAlta = 0;
    let nomeMaisBaixa = '';
    let alturaMaisBaixa = Infinity;

    let nomeMaisMagra = '';
    let pesoMaisMagro = Infinity;
    let nomeMaisGorda = '';
    let pesoMaisGordo = 0;

    let nomeCandidata;

    while (true) {
        nomeCandidata = question("Digite o nome da candidata ('FIM' para encerrar): ");
        if (nomeCandidata === 'FIM') {
            break;
        }
        
        const altura = parseFloat(question("Digite a altura da candidata (em metros): "));
        const peso = parseFloat(question("Digite o peso da candidata (em kg): "));

        if (altura > alturaMaisAlta) {
            nomeMaisAlta = nomeCandidata;
            alturaMaisAlta = altura;
        }

        if (altura < alturaMaisBaixa) {
            nomeMaisBaixa = nomeCandidata;
            alturaMaisBaixa = altura;
        }

        if (peso < pesoMaisMagro) {
            nomeMaisMagra = nomeCandidata;
            pesoMaisMagro = peso;
        }

        if (peso > pesoMaisGordo) {
            nomeMaisGorda = nomeCandidata;
            pesoMaisGordo = peso;
        }
    }

    console.log(`Candidata mais alta: ${nomeMaisAlta}, altura: ${alturaMaisAlta}m`);
    console.log(`Candidata mais baixa: ${nomeMaisBaixa}, altura: ${alturaMaisBaixa}m`);
    console.log(`Candidata mais magra: ${nomeMaisMagra}, peso: ${pesoMaisMagro}kg`);
    console.log(`Candidata mais gorda: ${nomeMaisGorda}, peso: ${pesoMaisGordo}kg`);
}

encontrarCandidatasExtremas();
