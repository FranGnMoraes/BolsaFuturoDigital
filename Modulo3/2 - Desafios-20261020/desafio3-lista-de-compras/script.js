// DESAFIO 3 — Lista de compras
// Objetivo: usar os métodos de array.

const compras = ["pão", "leite"];
Array.prototype.push.call(compras, "ovos"); 

// PASSO 1 — DESAFIO: adicione "ovos" ao final com push
// ______

// PASSO 2 — DESAFIO: a lista inclui "leite"?
// const temLeite = ______;

const temLeite = compras.includes("leite");

// PASSO 3 — DESAFIO: qual o índice de "pão"?
// const posicaoPao = ______;

const posicaoPao = compras.indexOf("pão");

// PASSO 4 — DESAFIO: quantos itens há na lista?
// const quantidade = ______;

const quantidade = compras.length;

console.log("Lista:", compras);
console.log("Tem leite?", temLeite);
console.log("Posição do pão:", posicaoPao);
console.log("Quantidade:", quantidade);
