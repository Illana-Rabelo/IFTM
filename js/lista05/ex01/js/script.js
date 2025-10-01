const personagem = document.getElementById('personagem');
const mensagem = document.getElementById('mensagem');

function setEstado(estado, texto, animacaoClasse = null) {
    // remove todas as classes de animação antes de aplicar a nova
    personagem.classList.remove('imagem-nervoso', 'imagem-alegre');
    personagem.src = `img/${estado}.png`;

    mensagem.textContent = texto;

    if (animacaoClasse) {
        personagem.classList.add(animacaoClasse);
    }
}


function estadoPensativo() {
    setEstado('pensativo', 'zzzzzzzzz!');
}


function estadoAssustado() {
    setEstado('assustado', 'O que você quer?');
}


function estadoAposClique() {

    const nomeUsuario = prompt("Por favor, digite seu nome:");

    if (nomeUsuario === null || nomeUsuario.trim() === "") {
        setEstado('nervoso', 'Não me faça perder o meu tempo!', 'imagem-nervoso');
    }

    else {
        setEstado('alegre', `${nomeUsuario}, seja bem-vindo!`, 'imagem-alegre');
    }
} -

    estadoPensativo();

personagem.addEventListener('mouseover', estadoAssustado);
personagem.addEventListener('click', estadoAposClique);
personagem.addEventListener('mouseout', estadoPensativo);
