import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

window.addEventListener('load', () => {

// Selecionamos o botão e adicionamos o evento
document.getElementById('btnEntrar').addEventListener('click', fazerLogin);

// 'async' indica que usaremos o 'await' dentro da função
async function fazerLogin() {
    const userDigitado = document.getElementById('usuario').value;
    const senhaDigitada = document.getElementById('senha').value;
    
    // Substitua pelo seu link RAW real do GitHub
    const url = "https://raw.githubusercontent.com/Illana-Rabelo/IFTM/refs/heads/main/pjfew/prova01/json/userCript.json";

    try {
        // 'fetch' substitui o XMLHttpRequest. 'await' faz o JS esperar a resposta chegar
        const resposta = await fetch(url);
        
        if (!resposta.ok) throw new Error("Erro ao buscar dados do GitHub");

        const listaUsuarios = await resposta.json();

        // Variável para controle do login
        let loginSucesso = false;

        // Usando forEach conforme você pediu (percorre todos os usuários)
        listaUsuarios.forEach(user => {
            if (user.username === userDigitado) {
                // Compara a senha usando bcrypt
                const match = bcrypt.compareSync(senhaDigitada, user.password);
                if (match) {
                    loginSucesso = true;
                }
            }
        });

        // Verificação final
        if (loginSucesso) {
            alert("Login realizado com sucesso!");
        } else {
            alert("Usuário ou senha inválidos.");
        }

    } catch (erro) {
        console.error("Ops! Algo deu errado:", erro);
        alert("Erro na conexão com o banco de dados.");
    }
}

});
