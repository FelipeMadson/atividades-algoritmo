import { question } from 'readline-sync';

// Processo (função para converter horas em minutos)
function converterHorasEmMinutos(horas) {
  // (multiplica o número de horas por 60 minutos)
  const minutos = horas * 60;
  // (retorna o número de minutos)
  return minutos;
}

// Função principal, Entrada  
function main() {
  // lendo o valor em horas
  const horas = parseInt(question('Digite o valor em horas: '));

  // Lendo o valor em minutos
  const minutos = parseInt(question('Digite o valor em minutos: '));

  // Convertendo as horas em minutos
  const minutosTotais = converterHorasEmMinutos(horas) + minutos;

  // Saída
  console.log(`O equivalente em minutos é: ${minutosTotais}`);
}

// Chamando a função principal
main();
