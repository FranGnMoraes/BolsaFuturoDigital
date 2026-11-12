// DESAFIO 1 — Cartão de visita
// Objetivo: montar uma frase de apresentação com VARIÁVEIS e TEMPLATE LITERAL.

// Estas variáveis já vêm prontas — não precisa mudar:
const nome = "Bruno";
const profissao = "estudante de front-end";
const idade = 17;

// PASSO 1 — DESAFIO: crie a constante `cidade` com o valor "Rio Grande".
// const cidade = ______;

const cidade = "Rio Grande";

// PASSO 2 — DESAFIO: monte `apresentacao` com TEMPLATE LITERAL para produzir
// EXATAMENTE esta frase:
// Olá! Eu sou Bruno, estudante de front-end, tenho 17 anos e moro em Rio Grande.
// const apresentacao = ______;

const apresentacao = `Olá! Eu sou ${nome}, ${profissao}, tenho ${idade} anos e moro em ${cidade}.`;
// Não altere a linha abaixo — ela mostra o resultado:
console.log(apresentacao);
