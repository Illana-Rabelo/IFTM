window.addEventListener("DOMContentLoaded", function(){
    const qtdadeFalas = document.getElementById("qtdadeFalas");
    const btnFalas = document.getElementById("btnFalas"); // Usa const ou let
    const falasNoel = document.getElementById("falasNoel"); // Usa const ou let

    btnFalas.addEventListener("click", Falas);

    function Falas(){
        // converte o valor do input para um número inteiro
        let hoho = parseInt(qtdadeFalas.value); 

        // válidação do número inserido
        if(isNaN(hoho) || hoho <= 0)
        {
            alert("Número de falas inválido! Favor insira um número inteiro positivo.");
            qtdadeFalas.value = ""; // limpa a caixa de texto
            falasNoel.innerHTML = "";
            return;
        }
        
        // limpa o conteúdo anterior antes de gerar o novo 
        falasNoel.innerHTML = "";

        // loop de geração
        for(let i = 0; i < hoho; i++)
        {
            let paragrafo = document.createElement("p");
            paragrafo.innerHTML = `Ho Ho Ho Feliz Natal!`;
            falasNoel.appendChild(paragrafo);
        }

    }
});