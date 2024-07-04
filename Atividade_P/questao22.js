import { questionInt, question, questionFloat } from 'readline-sync';

const N = questionInt("Digite o número de bois: ");
let maismagro = { id: '', peso: Infinity };
let maisgordo = { id: '', peso: -Infinity };

for (let i = 1; i <= N; i++) {
    const id = question(`Digite o ID do boi ${i}: `);
    const peso = questionFloat(`Digite o peso do boi ${i}: `);
    
    if (peso < maismagro.peso) {
        maismagro = { id, peso };
    }
    if (peso > maisgordo.peso) {
        maisgordo = { id, peso };
    }
}

console.log(`Boi mais magro: ID ${maismagro.id}, Peso ${maismagro.peso}`);
console.log(`Boi mais gordo: ID ${maisgordo.id}, Peso ${maisgordo.peso}`);