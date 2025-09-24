const btn = document.getElementById("btnResultado");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");

btn.addEventListener("click", exibeResultadoFinal);

function exibeResultadoFinal() {
    // converte os valores dos campos para números
    const notaDo1Bimestre = parseFloat(nota1.value);
    const notaDo2Bimestre = parseFloat(nota2.value);

    // calcula a soma total
    const somaTotal = notaDo1Bimestre + notaDo2Bimestre;
    
    if (somaTotal >= 60 && notaDo1Bimestre <= 50 && notaDo2Bimestre <= 50) {
       alert("Parabéns! Você foi aprovado(a).");
    } else {
       alert("Você foi reprovado(a).");
    }
}
