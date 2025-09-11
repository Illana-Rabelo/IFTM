let totalCartas = 52;
let carta = Math.floor(Math.random() * totalCartas) + 1;
// O JS monta o caminho até a pasta das cartas


document.write(`<img src="img/carta${carta}.png" alt="Carta sorteada">`);
