// DESAFIO 1 — Botão que responde
// Ao clicar em #btn, troque o texto de #saida.

const btn = document.getElementById("btn");
const saida = document.getElementById("saida");

btn.addEventListener("click", function() {
  saida.textContent = "Você apertou o botão!";
});

// DESAFIO: adicione um listener de "click" ao btn que
// coloque "Você apertou o botão!" no textContent de saida.
// ______
