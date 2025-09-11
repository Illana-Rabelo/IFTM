let qtd = parseInt(prompt("Quantas pessoas estão no ônibus?"));
let nomes = [];
let soma = 0;

for (let i = 0; i < qtd; i++) {
  let nome = prompt(`Nome da pessoa ${i+1}:`);
  let idade = parseInt(prompt(`Idade de ${nome}:`));
  nomes.push(nome);
  soma += idade;
}

let media = soma / qtd;
let sorteado = nomes[Math.floor(Math.random() * qtd)];
document.write("Idade média: " + media.toFixed(1) + "<br>");
document.write("Pessoa sorteada para ganhar o almoço: " + sorteado);