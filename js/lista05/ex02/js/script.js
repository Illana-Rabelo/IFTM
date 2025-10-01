// Array para armazenar a contagem de votos 
const contadores = [
    { id: 1, votos: 0, elemento: document.getElementById('votos-1') },
    { id: 2, votos: 0, elemento: document.getElementById('votos-2') },
    { id: 3, votos: 0, elemento: document.getElementById('votos-3') },
    { id: 4, votos: 0, elemento: document.getElementById('votos-4') }
];

const paineisCandidato = document.querySelectorAll('.candidato');
const fotosCandidato = document.querySelectorAll('.foto-candidato');

// função para atualizar a cor de fundo do líder 
function atualizarLider() {
    let maiorVoto = -1;
    
    // remove a classe 'lider' de todos os painéis
    paineisCandidato.forEach(painel => {
        painel.classList.remove('lider');
    });

    // encontra o maior número de votos
    contadores.forEach(c => {
        if (c.votos > maiorVoto) {
            maiorVoto = c.votos;
        }
    });

    // aplica a classe 'lider' a todos os painéis que têm o maior voto e trata empates
    if (maiorVoto > 0) { // Garante que só destaque se houver votos
        contadores.forEach((c, index) => {
            if (c.votos === maiorVoto) {
                paineisCandidato[index].classList.add('lider');
            }
        });
    }
}

// ao clicar sobre a imagem, o número de votos deve ser incrementado
fotosCandidato.forEach(foto => {
    foto.addEventListener('click', (evento) => {
        const painelCandidato = evento.target.closest('.candidato');
        const candidatoId = parseInt(painelCandidato.getAttribute('data-id'));

        const candidatoVoto = contadores.find(c => c.id === candidatoId);
        
        if (candidatoVoto) {
            candidatoVoto.votos++;
            candidatoVoto.elemento.textContent = candidatoVoto.votos;
            
            // atualiza o líder após cada voto
            atualizarLider();
        }
    });
});

atualizarLider();