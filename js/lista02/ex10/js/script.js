let totalCartas = 52;
let carta = Math.floor(Math.random() * totalCartas) + 1;

document.write(`<img src="img/carta${carta}.png" alt="Carta sorteada">`);
