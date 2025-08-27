// Solicita a nota do 1º bimestre e a converte para um número de ponto flutuante
let nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));

// Solicita a nota do 2º bimestre e a converte para um número de ponto flutuante
let nota2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));

// Calcula a soma das duas notas
let somaNotas = nota1 + nota2;

// Verifica se a soma é maior ou igual a 60,0 para determinar a aprovação
if (somaNotas >= 60) {
  // Se a condição for verdadeira, o aluno está aprovado
  alert("APROVADO! A soma das suas notas foi: " + somaNotas);
} else {
  // Se a condição for falsa, o aluno está reprovado.
  // Calcula quantos pontos faltaram
  let pontosFaltantes = 60 - somaNotas;
  // Exibe a mensagem com a informação de reprovação e os pontos faltantes
  alert("REPROVADO! Faltaram " + pontosFaltantes + " pontos para a aprovação.");
}