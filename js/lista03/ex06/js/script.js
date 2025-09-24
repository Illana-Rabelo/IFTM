const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const resultado = document.getElementById('resultado');
const botoesOperador = document.querySelectorAll('.operador');

// adiciona um evento de clique a cada botão de operador
botoesOperador.forEach(botao => {
    botao.addEventListener('click', () => {
        
        const v1 = parseFloat(valor1.value);
        const v2 = parseFloat(valor2.value);
        const operador = botao.getAttribute('data-op');

        // verifica se os campos não estão vazios
        if (isNaN(v1) || isNaN(v2)) {
            alert("Por favor, digite números em ambos os campos.");
            return;
        }

        let calculo;

        // executa a operação com base no operador clicado
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
        
        resultado.value = calculo;
    });

});
