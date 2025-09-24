const loginInput = document.getElementById('login');
const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confirmaSenha');
const btnEntrar = document.getElementById('btnEntrar');
const btnLimpar = document.getElementById('btnLimpar');

btnEntrar.addEventListener('click', () => {
    // verifica se o login está vazio
    if (loginInput.value === '') {
        alert("Por favor, digite o seu login.");
        return;
    }

    // verifica se as senhas são iguais
    if (senhaInput.value !== confirmaSenhaInput.value) {
        alert("As senhas digitadas não são iguais. Por favor, tente novamente.");
        senhaInput.value = '';
        confirmaSenhaInput.value = '';
        return;
    }

    alert("Todos os campos foram preenchidos corretamente.");
});

btnLimpar.addEventListener('click', () => {
    loginInput.value = '';
    senhaInput.value = '';
    confirmaSenhaInput.value = '';

});
