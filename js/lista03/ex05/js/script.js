const btn = document.getElementById("btnResultado");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");

btn.addEventListener("click", exibeResultadoFinal);

function exibeResultadoFinal() {
    const notaDo1Bimestre = parseFloat(nota1.value);
    const notaDo2Bimestre = parseFloat(nota2.value);

    const somaTotal = notaDo1Bimestre + notaDo2Bimestre;

    if (somaTotal >= 60 && notaDo1Bimestre <= 50 && notaDo2Bimestre <= 50) {
        alert(`Parabéns! Você foi aprovado(a). Sua nota final é ${somaTotal}.`);
    } else {
        alert(`Você foi reprovado(a). Sua nota final é ${somaTotal}.`);
    }
}
}
