import { getStorage } from "./storage.js";
import { getWordAt, getWordsStartsWith, countWords } from "./util.js";

window.addEventListener("DOMContentLoaded", function(){

    //declaração dos eventos
    const txtInformado = document.getElementById("txtInformado");
    const btnAnalisar = document.getElementById("btnAnalisar");
    const select = document.getElementById ("select");
    const qtdPalavra = document.getElementById("qtdPalavra");
    const inicialPalavra = document.getElementById("inicialPalavra");
    const primeiraPalavra = document.getElementById("primeiraPalavra");
    const segundaPalavra = document.getElementById("segundaPalavra");
    const ultimaPalavra = document.getElementById("ultimaPalavra");
    const novoTexto = document.getElementById ("novoTxt");
    const papaiNoel = document.getElementById ("papaiNoel");

    // recupera o texto da página anterior
    const textoIndex = getStorage("texto");

    // Verifica se o texto existe
    if(!textoIndex || textoIndex === "")
        window.location.href = "index.html";

    txtInformado.innerHTML = textoIndex;

    btnAnalisar.addEventListener("click", Analisar);
    papaiNoel.addEventListener("click", abrirPagina);

    function abrirPagina(){
        window.location.href= "../papaiNoel/index.html";
    }

    function analisarTexto(texto){
        // remove espaços extras no início e fim para contagem correta
        const textoLimpo = texto.trim(); 

        // quantidade de palavras
        qtdPalavra.innerHTML = countWords(textoLimpo);

        // palavras iniciadas com a letra M
        inicialPalavra.value = getWordsStartsWith(textoLimpo, "M");

        // primeira palavra
        primeiraPalavra.value = getWordAt(textoLimpo, 0); // Índice 0

        // segunda palavra
        segundaPalavra.value = getWordAt(textoLimpo, 1); // Índice 1 (CORRIGIDO AQUI)
        
        // última palavra 
        ultimaPalavra.value = getWordAt(textoLimpo, 0, true);
    }
    
    function Analisar(){
        let textoAnalise = "";

        // Se for "Sim", usa o texto original.
        if(select.value === "1") {
            textoAnalise = textoIndex;
        } 
        // Se for "Não", usa o novo texto.
        else {
            textoAnalise = novoTexto.value;
        }

        // verificação para garantir que existe um texto válido para análise
        if(!textoAnalise || textoAnalise.trim() === "") {
            alert("Por favor, informe um texto válido para análise.");
            // limpa os resultados anteriores
            qtdPalavra.innerHTML = "0";
            inicialPalavra.value = "";
            primeiraPalavra.value = "";
            segundaPalavra.value = "";
            ultimaPalavra.value = "";
            return; 
        }
        
        analisarTexto(textoAnalise);
    }
});