import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

window.addEventListener('load', () => {

document.getElementById('btnEntrar').addEventListener('click', fazerLogin);

async function fazerLogin() {
    const userDigitado = document.getElementById('usuario').value;
    const senhaDigitada = document.getElementById('senha').value;
    
    // URL do arquivo JSON hospedado no GitHub
    const url = "https://raw.githubusercontent.com/Illana-Rabelo/IFTM/refs/heads/main/pjfew/prova01/json/userCript.json";

    try {
        const resposta = await fetch(url);
        
        if (!resposta.ok) throw new Error("Erro ao buscar dados do GitHub");

        const listaUsuarios = await resposta.json();

        // controle do login
        let loginSucesso = false;

        // forEach para percorrer e verficar os dados do usuário
        listaUsuarios.forEach(user => {
            if (user.username === userDigitado) {
                const match = bcrypt.compareSync(senhaDigitada, user.password);
                if (match) {
                    loginSucesso = true;
                }
            }
        });

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
