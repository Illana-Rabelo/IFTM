let n = parseInt(prompt("Digite o valor de N:"));
let numero = Math.floor(Math.random() * n) + 1;

document.write(`Número sorteado entre 1 e ${n}: ` + numero);
