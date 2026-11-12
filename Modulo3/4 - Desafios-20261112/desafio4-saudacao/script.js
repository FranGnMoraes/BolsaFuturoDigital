// DESAFIO 4 — Saudação por formulário
// Ao enviar, mostre "Olá, NOME!" sem recarregar.

const form = document.getElementById("form");
const nome = document.getElementById("nome");
const saida = document.getElementById("saida");

// DESAFIO: no "submit", use preventDefault e monte a
// saudação em saida com o value do campo.
// ______

form.addEventListener("submit", function(event) {
    event.preventDefault();
    saida.textContent = `Olá, ${nome.value}!`;
});

// Adicione um listener de "submit" ao #form.
// Chame event.preventDefault() na primeira linha.
// Coloque em #saida o texto "Olá, NOME!" usando o value do campo.
// 💡 Dica: A função do submit recebe event. Primeiro event.preventDefault(), depois saida.textContent = "Olá, " + nome.value + "!".
