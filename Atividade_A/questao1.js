import { question, questionFloat } from 'readline-sync'

console.log('--------------- Conversor de m/s para km/h ---------------')

// Entrada
var velocidade_ms = questionFloat('Velocidade em m/s:')

// Processamento
var velocidade_kmh = velocidade_ms * 3.6

// Saída
console.log(` ${velocidade_ms}m/s equivale a ${velocidade_kmh}km/h`)