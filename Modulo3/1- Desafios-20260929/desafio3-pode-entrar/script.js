// DESAFIO 3 — Pode entrar?
// Objetivo: usar COMPARAÇÃO (>=) e o operador lógico && (E).
// Regra: pode entrar quem tem 12 anos OU MAIS **E** 1,40m OU MAIS de altura.

// Cenário A:
const idadeA = 14;
const alturaA = 1.35;

// Cenário B:
const idadeB = 16;
const alturaB = 1.50;

// DESAFIO: escreva a expressão que é true só quando AS DUAS condições
// (idade >= 12) E (altura >= 1.40) forem verdadeiras. Use >= e &&.
// const aptoA = ______;   // deve dar false (altura menor que 1.40)
// const aptoB = ______;   // deve dar true

if (idadeA >= 12 && alturaA >= 1.40) {
    aptoA = true;
} else {
    aptoA = false;
}

if (idadeB >= 12 && alturaB >= 1.40) {
    aptoB = true;
} else {
    aptoB = false;
} 

console.log("Cenário A pode entrar?", aptoA);
console.log("Cenário B pode entrar?", aptoB);
