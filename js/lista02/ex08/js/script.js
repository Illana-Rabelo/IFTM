let opcoes = ["Pedra", "Papel", "Tesoura"];
let j1 = Math.floor(Math.random() * 3);
let j2 = Math.floor(Math.random() * 3);

document.write("Jogador 1: " + opcoes[j1] + "<br>");
document.write("Jogador 2: " + opcoes[j2] + "<br>");

if (j1 === j2) {
  document.write("Empate!");
} else if (
  (j1 === 0 && j2 === 2) ||
  (j1 === 1 && j2 === 0) ||
  (j1 === 2 && j2 === 1)
) {
  document.write("Jogador 1 venceu!");
} else {
  document.write("Jogador 2 venceu!");
}