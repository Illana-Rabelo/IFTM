let nome = prompt("Digite seu nome completo:");
let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 18) {
  alert(`${nome}, você já POSSUI idade para tirar carteira`);

} else {
  let anosFaltantes = 18 - idade;
  alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${anosFaltantes} anos`);

}
