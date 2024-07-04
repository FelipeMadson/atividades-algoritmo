import { question } from 'readline-sync';   
function lerSexo() {
  const sexo = question('Por favor, insira o sexo (F ou M): ');

  if (sexo === 'F') {
    console.log('F - Feminino');
  } else if (sexo === 'M') {
    console.log('M - Masculino');
  } else {
    console.log('Sexo Inválido.');
  }
}

lerSexo();

