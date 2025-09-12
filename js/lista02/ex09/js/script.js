let qtd = parseInt(prompt("Quantas pessoas irão apresentar?"));
let nomes = [];

for (let i = 0; i < qtd; i++) {
  nomes.push(prompt("Nome da pessoa " + (i+1) + ":"));
}

nomes.sort(() => Math.random() - 0.5);
document.write("<h3>Ordem de apresentação:</h3>");

for (let i = 0; i < nomes.length; i++) {
  document.write((i+1) + "º - " + nomes[i] + "<br>");
}
