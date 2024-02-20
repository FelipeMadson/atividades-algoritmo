import { question } from 'readline-sync';

// Entrada (inserir o custo de fábrica do carro)
var custoFabrica = parseFloat(question("Digite o custo de fábrica do carro: "));

// Processamento (calculando a porcentagem do distribuidor (28%))
var porcentagemDistribuidor = 0.28;

// (calculando os impostos (45%))
var porcentagemImpostos = 0.45;

// (calculando o custo ao consumidor)
var custoConsumidor = custoFabrica + (custoFabrica * porcentagemDistribuidor) + (custoFabrica * porcentagemImpostos);

// Saída
console.log("O custo ao consumidor do carro é: R$" + custoConsumidor.toFixed(2));
