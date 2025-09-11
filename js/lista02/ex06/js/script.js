let numeros = [];
while (numeros.length < 6) {
  let n = Math.floor(Math.random() * 60) + 1;
  if (!numeros.includes(n)) {
    numeros.push(n);
  }
}
document.write("Números da Mega Sena: " + numeros.join(" - "));