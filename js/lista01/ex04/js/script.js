let nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
let nota2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));
let somaNotas = nota1 + nota2;


if (somaNotas >= 60) {
  alert("APROVADO! A soma das suas notas foi: " + somaNotas);
} else {
  let pontosFaltantes = 60 - somaNotas;
  alert("REPROVADO! Faltaram " + pontosFaltantes + " pontos para a aprovação.");

}
