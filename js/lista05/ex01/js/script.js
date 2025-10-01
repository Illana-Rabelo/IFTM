// elementos e estados do personagem
const personagem = document.getElementById('personagem');
const mensagemP = document.getElementById('mensagem');

// estado inicial do personagem: Pensativo
function setPensativo() {
    personagem.src = 'imgs/Pensativo.png';
    personagem.alt = 'Personagem Pensativo';
    mensagemP.textContent = 'zzzzzzzzz!';
}

setPensativo(); 

// ao posicionar o cursor do mouse sobre a imagem do personagem ele muda para Assustado
personagem.addEventListener('mouseover', () => {
    personagem.src = 'imgs/Assustado.png';
    personagem.alt = 'Personagem Assustado';
    mensagemP.textContent = 'O que você quer?'; // [cite: 31, 32]
});

// ao retirar o cursor do mouse ele volta ao estado inicial
personagem.addEventListener('mouseout', () => {
    setPensativo(); 
});

personagem.addEventListener('click', () => {
    const nomeUsuario = prompt("Por favor, digite o seu nome:");
    
    // cenário 1: Usuário não digitou nada, o personagem muda para nervoso
    if (nomeUsuario === null || nomeUsuario.trim() === '') {
        personagem.src = 'imgs/Nervoso.png';
        personagem.alt = 'Personagem Nervoso';
        mensagemP.textContent = 'Não me faça perder o meu tempo!'; 
    } 
    // cenário 2: Usuário digitou uma informação, o personagem muda para alegre
    else {
        personagemImg.src = 'imgs/alegre.png';
        personagemImg.alt = 'Personagem Alegre';
        mensagemP.textContent = `${nomeUsuario}, seja bem-vindo!`; 
    }
});