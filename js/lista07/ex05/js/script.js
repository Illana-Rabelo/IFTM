window.addEventListener("DOMContentLoaded", function() {
    
    const btnSolicitar = document.getElementById('btnSolicitar');
    const nomesContainer = document.getElementById('nomesContainer');
    
    btnSolicitar.addEventListener('click', iniciarProcesso);

    function iniciarProcesso() {
        
        // solicita e armazena N nomes
        const nomes = solicitarNomes();
        
        // inicia a exibição sequencial se houver nomes
        if (nomes.length > 0) {
            nomesContainer.textContent = `Iniciando exibição de ${nomes.length} nomes... \n\n`;
            
            // chama a função para exibir os nomes
            exibirNomesSequencialmente(nomes, 0);
            
        } else {
            nomesContainer.textContent = 'Nenhum nome foi inserido ou a operação foi cancelada.';
        }
    }

    // função que coleta nomes 
    function solicitarNomes() {
        const nomes = [];
        let nome;
        let contador = 1;
        
        while (true) {
            nome = prompt(`Digite o ${contador}º nome (ou clique em Cancelar/OK sem texto para terminar):`);
            
            if (!nome || nome.trim() === "") {
                break; 
            }
            
            nomes.push(nome.trim());
            contador++;
        }
        return nomes;
    }

    // função que exibe o nome com atraso
    function exibirNomesSequencialmente(nomes, index) {
        
        // verifica se ainda há nomes para exibir
        if (index < nomes.length) {
            
            const nomeAtual = nomes[index];
            
            // atualiza o textContent, mantendo o conteúdo anterior e adicionando o novo nome com uma quebra de linha (\n) no final.
            nomesContainer.textContent += nomeAtual + '\n';
            
            setTimeout(function() {
                // chama a função novamente para o próximo índice
                exibirNomesSequencialmente(nomes, index + 1);
            }, 1000); 
            
        } 
    }
});