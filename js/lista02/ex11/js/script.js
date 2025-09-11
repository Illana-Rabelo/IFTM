let cartas = [];
let min = 5;   
let max = 27;  

while (cartas.length < 12) {
  let c = Math.floor(Math.random() * (max - min + 1)) + min;
  if (!cartas.includes(c)) cartas.push(c);
}

for (let j = 0; j < 4; j++) {
  document.write(`<h3>Jogador ${j+1}:</h3>`);
  for (let i = 0; i < 3; i++) {
    let carta = cartas[j*3 + i];
    document.write(`<img src="img/carta${carta}.png" alt="Carta ${carta}"> `);
  }
  document.write("<br>");
}
