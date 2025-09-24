btn = document.getElementById("btnDobrar");
valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");

btn.addEventListener("click", dobrarValor);

function dobrarValor(){
    if (valor1.value.trim() == 0)
        alert("Não foi informando nenhum número. Insira um número válido.");
    else if (isNaN(valor1.value))
        alert("O valor informado não é um número. Insira um número válido.");
    else 
        valor2.value = valor1.value * 2;
}