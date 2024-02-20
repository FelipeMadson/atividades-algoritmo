import { question } from 'readline-sync';

// Entrada (inserir os dados necessários)
var anosFumando = parseInt(question("Digite o número de anos que você fuma: "));
var cigarrosPorDia = parseInt(question("Digite o número de cigarros fumados por dia: "));
var precoCarteira = parseFloat(question("Digite o preço de uma carteira de cigarros: "));

// Processamento (calculando o número total de cigarros fumados durante todos os anos)
var totalCigarros = anosFumando * 365 * cigarrosPorDia;

// (calculando o número total de carteiras compradas)
var totalCarteiras = Math.ceil(totalCigarros / 20); // (arredonda para cima, considerando que uma carteira tem 20 cigarros)

// (calculando o custo total)
var custoTotal = totalCarteiras * precoCarteira;

// Saída
console.log("Durante " + anosFumando + " anos de fumo, você gastou um total de R$" + custoTotal.toFixed(2) + ".");
