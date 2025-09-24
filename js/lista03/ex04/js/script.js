// Obtendo os elementos do HTML
const btn = document.getElementById("btnResultado");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");

// Adicionando o evento de clique ao botão
btn.addEventListener("click", exibeResultadoFinal);

function exibeResultadoFinal() {
    // 1. Converte os valores dos campos para números
    const notaDo1Bimestre = parseFloat(nota1.value);
    const notaDo2Bimestre = parseFloat(nota2.value);

    // 2. Calcula a soma total
    const somaTotal = notaDo1Bimestre + notaDo2Bimestre;
    
    // Variável para a mensagem final
    let mensagemFinal;

    // 3. Lógica para verificar a aprovação
    // A soma deve ser >= 60 e as notas de cada bimestre não podem passar de 50
    if (somaTotal >= 60 && notaDo1Bimestre <= 50 && notaDo2Bimestre <= 50) {
        mensagemFinal = "Parabéns! Você foi aprovado(a).";
    } else {
        mensagemFinal = "Você foi reprovado(a).";
    }

    // 4. Exibe o resultado final com a mensagem correta
    alert(mensagemFinal);
}
