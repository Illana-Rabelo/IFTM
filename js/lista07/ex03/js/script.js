window.addEventListener("DOMContentLoaded", function() {
   
    const btnSolicitarNome = document.getElementById('btnSolicitarNome');
    const nome = document.getElementById('nome');
    
    const TAMANHO_INICIAL = 14; // 14 pixels
    const TAMANHO_FINAL = 40;   // 40 pixels
    const INCREMENTO = 2;       // aumento de 2 em 2 pixels
    const INTERVALO_MS = 500;   
    
    let tamanhoAtual = TAMANHO_INICIAL;
    let intervaloID; // variável para armazenar o ID do setInterval
    
    btnSolicitarNome.addEventListener('click', iniciarAnimacao);

    function iniciarAnimacao() {
      
        const nomeUsuario = prompt("Por favor, digite seu nome completo:");

        // estilo inicial do texto
        nome.textContent = nomeUsuario;
        nome.style.fontSize = `${TAMANHO_INICIAL}px`;

        tamanhoAtual = TAMANHO_INICIAL;
         
        btnSolicitarNome.disabled = true;

        // 5. Inicia o temporizador (setInterval)
        intervaloID = setInterval(aumentarTamanho, INTERVALO_MS);
    }
    
    function aumentarTamanho() {
        // verifica se o tamanho máximo foi atingido
        if (tamanhoAtual >= TAMANHO_FINAL) {
            clearInterval(intervaloID);
            btnSolicitarNome.disabled = false;
            return;
        }

        // incrementa o tamanho da fonte
        tamanhoAtual += INCREMENTO;
        
        // aplica o novo tamanho ao estilo do elemento
        nome.style.fontSize = `${tamanhoAtual}px`;
    }
});