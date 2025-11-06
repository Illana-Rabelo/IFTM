window.addEventListener("DOMContentLoaded", function() {
    
    const mensagem = document.getElementById('mensagemTempo');
    let intervaloID; 
    let tempoRestante; // aariável para armazenar o contador 

    const tempoInicialStr = prompt("Por favor, digite o número de segundos para a contagem regressiva:");

    const tempoInicial = parseInt(tempoInicialStr, 10);

    if (isNaN(tempoInicial) || tempoInicial <= 0) {
        mensagem.textContent = "Tempo inválido ou contagem cancelada.";
        return;
    }

    tempoRestante = tempoInicial;
    
    function atualizarContagem() {
        
        // verifica se a contagem chegou a zero
        if (tempoRestante <= 0) {
            clearInterval(intervaloID);
            
            // abre a página do Google na mesma aba
            window.location.href = "https://www.google.com";
            
            return;
        }

        // atualiza o texto na tela
        mensagem.textContent = `Por favor, aguarde ${tempoRestante} segundos para carregar a página do Google`;
        
        tempoRestante--;
    }

    atualizarContagem();

    // inicia o temporizador (roda a cada 1 segundo)
    intervaloID = setInterval(atualizarContagem, 1000); 
});