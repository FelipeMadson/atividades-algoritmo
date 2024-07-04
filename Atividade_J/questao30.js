import { questionFloat, question } from 'readline-sync';

function calcularDesconto(quantidade) {
    if (quantidade <= 10) {
        return 0;
    } else if (quantidade <= 20) {
        return 0.1;
    } else if (quantidade <= 50) {
        return 0.2;
    } else {
        return 0.25;
    }
}

function calcularValorTotal(preco, quantidade) {
    const desconto = calcularDesconto(quantidade);
    const valorDesconto = preco * desconto;
    return (preco * quantidade - valorDesconto).toFixed(2);
}

function main() {
    console.log("Bem-vindo ao sistema de cálculo de valor total de compras!");

    let nomeProduto;
    do {
        nomeProduto = question("Informe o nome do produto (ou digite 'FIM' para sair): ");
        if (nomeProduto.toUpperCase() === 'FIM') {
            break;
        }
        const precoProduto = questionFloat("Informe o preço do produto: ");
        const quantidadeComprada = questionInt("Informe a quantidade comprada: ");

        const valorTotal = calcularValorTotal(precoProduto, quantidadeComprada);
        console.log(`Produto: ${nomeProduto}`);
        console.log(`Valor total a ser pago: R$ ${valorTotal}`);
    } while (true);

    console.log("Obrigado por utilizar nosso serviço!");
}

main();
