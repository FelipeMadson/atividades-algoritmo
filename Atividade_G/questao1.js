import { question } from 'readline-sync';

function verificarSinal() {
  const numero = parseInt(question('Por favor, insira um número: '));

  if (numero > 0) {
    console.log('O número é positivo.');
  } else if (numero < 0) {
    console.log('O número é negativo.');
  } else {
    console.log('O número é zero.');
  }
}

verificarSinal();