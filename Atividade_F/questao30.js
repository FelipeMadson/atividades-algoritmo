import { question } from 'readline-sync';
function verificarCaracteristica(numero) {
    const dezenasUnidades = parseInt(numero / 100);
    const milharesCentenas = numero % 100;
    
    const soma = dezenasUnidades + milharesCentenas;
    
    return soma * soma === numero;
}

function encontrarNumeros() {
    for (let i = 1000; i <= 9999; i++) {
        if (verificarCaracteristica(i)) {
            console.log(`${i} atende à característica.`);
        }
    }
}
encontrarNumeros();
