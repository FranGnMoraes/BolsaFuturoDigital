// DESAFIO 3 — Espelho do campo
// Ao digitar em #campo, mostre o texto em #eco.

const campo = document.getElementById("campo");
const eco = document.getElementById("eco");

// DESAFIO: no evento "input" do campo, copie campo.value
// para o textContent de eco.
// ______

campo.addEventListener("input", function() {
  eco.textContent = campo.value;
});
