// Obtém os elementos do HTML
const loginInput = document.getElementById('login');
const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confirmaSenha');
const btnEntrar = document.getElementById('btnEntrar');
const btnLimpar = document.getElementById('btnLimpar');

// Evento para o botão "Entrar"
btnEntrar.addEventListener('click', () => {
    // Primeira validação: verifica se o login está vazio
    if (loginInput.value === '') {
        alert("Por favor, digite o seu login.");
        return;
    }

    // Segunda validação: verifica se as senhas são iguais
    if (senhaInput.value !== confirmaSenhaInput.value) {
        alert("As senhas digitadas não são iguais. Por favor, tente novamente.");
        senhaInput.value = '';
        confirmaSenhaInput.value = '';
        return;
    }

    // Se todas as validações passarem
    alert("Todos os campos foram preenchidos corretamente.");
});

// Evento para o botão "Limpar"
btnLimpar.addEventListener('click', () => {
    loginInput.value = '';
    senhaInput.value = '';
    confirmaSenhaInput.value = '';
});