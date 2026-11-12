// DESAFIO 5 — Ficha do aluno
// Objetivo: acessar propriedades e adicionar uma nova.

const aluno = { nome: "Bruno", nota: 7 };

// PASSO 1 — DESAFIO: monte "resumo" como "Bruno tirou 7"
// usando template literal com aluno.nome e aluno.nota.
// const resumo = ______;

const resumo = `${aluno.nome} tirou ${aluno.nota}`;

// PASSO 2 — DESAFIO: adicione a propriedade "aprovado" ao objeto
// (true se a nota for 6 ou mais).
// aluno.aprovado = ______;

aluno.aprovado = aluno.nota >= 6;

console.log(resumo);
console.log("Aprovado?", aluno.aprovado);
