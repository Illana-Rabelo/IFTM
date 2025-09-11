let n = parseInt(prompt("Digite o valor de N:"));
let m = parseInt(prompt("Digite o valor de M:"));
if (n > m) [n, m] = [m, n];
let numero = Math.floor(Math.random() * (m - n + 1)) + n;
document.write(`Número sorteado entre ${n} e ${m}: ` + numero);