// DESAFIO 2 — Calculadora de compra
// Objetivo: usar OPERADORES ARITMÉTICOS para calcular o total com desconto.

const precoUnitario = 25;   // R$ por item
const quantidade = 3;       // itens
const descontoPercent = 10; // % de desconto

// PASSO 1 — DESAFIO: subtotal = preço × quantidade
// const subtotal = ______;

const subtotal = precoUnitario * quantidade;

// PASSO 2 — DESAFIO: valorDesconto = subtotal × (descontoPercent / 100)
// const valorDesconto = ______;

const valorDesconto = subtotal * (descontoPercent / 100);

// PASSO 3 — DESAFIO: total = subtotal − valorDesconto
// const total = ______;

const total = subtotal - valorDesconto;

console.log("Subtotal: R$", subtotal);
console.log("Desconto: R$", valorDesconto);
console.log("Total:    R$", total);
