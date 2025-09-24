// Obtém os elementos do HTML
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const resultado = document.getElementById('resultado');
const botoesOperador = document.querySelectorAll('.operador');

// Adiciona um evento de clique a cada botão de operador
botoesOperador.forEach(botao => {
    botao.addEventListener('click', () => {
        // Converte os valores para números
        const v1 = parseFloat(valor1.value);
        const v2 = parseFloat(valor2.value);
        const operador = botao.getAttribute('data-op');

        // Validação: verifica se os campos não estão vazios
        if (isNaN(v1) || isNaN(v2)) {
            alert("Por favor, digite números em ambos os campos.");
            return;
        }

        let calculo;

        // Executa a operação com base no operador clicado
        switch (operador) {
            case '+':
                calculo = v1 + v2;
                break;
            case '-':
                calculo = v1 - v2;
                break;
            case '*':
                calculo = v1 * v2;
                break;
            case '/':
                // Trata a divisão por zero
                if (v2 === 0) {
                    alert("Erro: Divisão por zero não é permitida.");
                    return;
                }
                calculo = v1 / v2;
                break;
        }

        // Exibe o resultado no campo de texto
        resultado.value = calculo;
    });
});