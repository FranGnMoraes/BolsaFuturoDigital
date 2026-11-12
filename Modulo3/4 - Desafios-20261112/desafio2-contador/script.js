// DESAFIO 2 — Contador
// Cada clique em #mais soma 1 e mostra no #placar.

let total = 0;
const placar = document.getElementById("placar");
const mais = document.getElementById("mais");

// DESAFIO: no clique de "mais", some 1 em total e
// mostre o novo total no placar.
// ______

mais.addEventListener("click", function() {
    total++;
    placar.textContent = total;
});
