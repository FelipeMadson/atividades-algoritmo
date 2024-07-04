import { questionInt, questionFloat } from 'readline-sync';

const N = questionInt("Digite o número de funcionários: ");
let i = 1;

while (i <= N) {
    const codigo = questionInt(`Digite o código do funcionário ${i}: `);
    const horas = questionFloat(`Digite as horas trabalhadas: `);
    const dependentes = questionInt(`Digite o número de dependentes: `);
    
    const salarioBruto = horas * 12 + dependentes * 40;
    const inss = salarioBruto * 0.085;
    const ir = salarioBruto * 0.05;
    const salarioLiquido = salarioBruto - inss - ir;
    
    console.log(`Funcionário ${codigo}:`);
    console.log(`INSS: R$ ${inss.toFixed(2)}`);
    console.log(`IR: R$ ${ir.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}\n`);
    i++;
}