// DESAFIO 6 — Boletim da turma
// Objetivo: juntar array de objetos + loop + condicional.

const turma = [
  { nome: "Ana", nota: 9 },
  { nome: "Léo", nota: 5 },
  { nome: "Duda", nota: 6 }
];

const boletim = [];

// DESAFIO: percorra a turma com forEach e, para cada aluno,
// adicione ao "boletim" uma frase "Nome: aprovado" ou
// "Nome: recuperação" (6 ou mais = aprovado).
// ______

turma.forEach((aluno) => {
  if (aluno.nota >= 6) {
    boletim.push(`${aluno.nome}: aprovado`);
  } else {
    boletim.push(`${aluno.nome}: recuperação`);
  }
});

console.log(boletim);
