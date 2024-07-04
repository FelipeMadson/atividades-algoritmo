import { questionFloat } from 'readline-sync';

function determinarProdutoMaisBarato(preco1, preco2, preco3) {
    if (preco1 < preco2 && preco1 < preco3) {
        return "Produto 1";
    } else if (preco2 < preco1 && preco2 < preco3) {
        return "Produto 2";
    } else {
        return "Produto 3";
    }
}

function main() {
    const preco1 = questionFloat("Digite o preço do Produto 1: ");
    const preco2 = questionFloat("Digite o preço do Produto 2: ");
    const preco3 = questionFloat("Digite o preço do Produto 3: ");

    const produtoMaisBarato = determinarProdutoMaisBarato(preco1, preco2, preco3);

    console.log(`O produto mais barato é: ${produtoMaisBarato}`);
}

main();
