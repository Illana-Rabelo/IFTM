// Obtendo os elementos do HTML
const btn = document.getElementById("btnResultado");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");

// Adicionando o evento de clique ao botão
btn.addEventListener("click", exibeResultadoFinal);

function exibeResultadoFinal() {
    // Converte os valores dos campos para números
    const notaDo1Bimestre = parseFloat(nota1.value);
    const notaDo2Bimestre = parseFloat(nota2.value);

    // Calcula a soma total
    const somaTotal = notaDo1Bimestre + notaDo2Bimestre;

    // Variável para a mensagem final
    let mensagemFinal;

    // Lógica para verificar a aprovação, garantindo que as notas não ultrapassem 50
    if (somaTotal >= 60 && notaDo1Bimestre <= 50 && notaDo2Bimestre <= 50) {
        // Usa a crase (`) para incluir a variável somaTotal na string
        mensagemFinal = `Parabéns! Você foi aprovado(a). Sua nota final é ${somaTotal}.`;
    } else {
        // Usa a crase (`) para incluir a variável somaTotal na string
        mensagemFinal = `Você foi reprovado(a). Sua nota final é ${somaTotal}.`;
    }

    // Exibe o resultado final com a nota do aluno
    alert(mensagemFinal);
}