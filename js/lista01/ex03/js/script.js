// 1. Solicita o nome completo do usuário
let nome = prompt("Digite seu nome completo:");

// 2. Solicita a idade e converte para um número inteiro
let idade = parseInt(prompt("Digite sua idade:"));

// 3. Verifica se a idade é suficiente para tirar a carteira
if (idade >= 18) {
  // Se a idade for 18 ou mais, exibe a mensagem de posse de carteira
  alert(`${nome}, você já POSSUI idade para tirar carteira`);
} else {
  // Se a idade for menor que 18, calcula os anos que faltam
  let anosFaltantes = 18 - idade;
  // Exibe a mensagem de que a pessoa ainda não tem idade
  alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${anosFaltantes} anos`);
}