document.addEventListener('DOMContentLoaded', () => {
    
    // Função para exibir o resultado em um pop-up
    function exibirResultado(resultado, valor) {
        let mensagem = `O valor "${valor}" é ${resultado.valido ? 'VÁLIDO.' : 'INVÁLIDO.'}\n`;
        
        if (!resultado.valido) {
            mensagem += `\nFormato esperado:\n${resultado.formato}`;
        }
        
        if (resultado.mensagemExtra) {
            mensagem += `\nDetalhes: ${resultado.mensagemExtra}`;
        }

        const titulo = resultado.valido;
        
        // Exibe o pop-up com a mensagem
        alert(titulo + '\n\n' + mensagem);
    }

    // --- Funções de Validação ---

    // a) Data de nascimento: dd/mm/aaaa ou dd/mm/aa
    function validarDataNascimento(valor) {
        const regex = /^(0[1-9]|[12]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{2}(\d{2})?$/;
        const formato = 'dd/mm/aaaa ou dd/mm/aa';
        return { valido: regex.test(valor), formato };
    }

    // b) CPF (jwifi): xxx.xxx.xxx-xx
    function validarCPF(valor) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const formato = 'xxx.xxx.xxx-xx';
        return { valido: regex.test(valor), formato };
    }

    // c) Número de matricula: IFTM-xxx/xxx-yy ou iftm-xxx/xxx-yy
    function validarMatricula(valor) {
        const regex = /^(IFTM|iftm)-\d{3}\/\d{3}-[a-zA-Z0-9]{2}$/;
        const formato = 'IFTM-xxx/xxx-yy ou iftm-xxx/xxx-yy';
        return { valido: regex.test(valor), formato };
    }

    // d) Código de disciplina (jwifi): MT-xx.xxx-IFTM (case insensitive)
    function validarCodDisciplina(valor) {
        const regex = /^[a-zA-Z]{2}-\d{2}\.\d{3}-[a-zA-Z]{4}$/i;
        const formato = 'MT-xx.xxx-IFTM';
        return { valido: regex.test(valor), formato };
    }

    // e) Código de disciplina v2: MT-xx.xxx-IFTM (MT maiúsculo, IFTM case insensitive)
    function validarCodDisciplina2(valor) {
        const regex = /^MT-\d{2}\.\d{3}-IFTM$/i;
        const formato = 'MT-xx.xxx-IFTM';
        return { valido: regex.test(valor), formato };
    }

    // f) Código de disciplina v3: MT-xx.xxx-IFTM (max 1 espaço entre letras)
    function validarCodDisciplina3(valor) {
        const regex = /^(M ?T|MT)-\d{2}\.\d{3}-(I ?F ?T ?M|IFTM)$/i;
        const formato = 'MT-xx.xxx-IFTM';
        return { valido: regex.test(valor), formato };
    }

    // g) Código de disciplina v4: MT-xx.xxx-IFTM Y (Y = UBERLÂNDIA CENTRO ou UBERLÂNDIA - capitalizado)
    function validarCodDisciplina4(valor) {
        const regex = /^(M ?T|MT)-\d{2}\.\d{3}-(I ?F ?T ?M|IFTM) (Uberlândia Centro|Uberlândia)$/i;
        const formato = 'MT-xx.xxx-IFTM Y (Y=Uberlândia Centro ou Uberlândia)';
        return { valido: regex.test(valor), formato };
    }

    // h) Nome de campus: IFTM campus Uberlândia ou IFTM campus Uberlândia Centro
    function validarNomeCampus(valor) {
        const regex = /^IFTM campus (Uberlândia|Uberlândia Centro)$/;
        const formato = 'IFTM campus Uberlândia ou IFTM campus Uberlândia Centro';
        return { valido: regex.test(valor), formato };
    }

    // i) Telefone (jwifi): +yy(xx)xxxxx-xxxx
    function validarTelefone(valor) {
        const regex = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
        const formato = '+yy(xx)xxxxx-xxxx';
        return { valido: regex.test(valor), formato };
    }

    // j) Telefone v2: (xx)xxxxx-xxxx ou (xxx)xxxxx-xxxx
    function validarTelefone2(valor) {
        const regex = /^\(\d{2,3}\)\d{5}-\d{4}$/;
        const formato = '(xx)xxxxx-xxxx ou (xxx)xxxxx-xxxx';
        return { valido: regex.test(valor), formato };
    }

    // k) Altura: x,xz ou x.xz (Intervalo: [1.3, 2.5])
    function validarAltura(valor) {
        const formato = 'x,xz ou x.xz.';
        const regex = /^\d[,\.]\d{1,2}$/;
        let valido = regex.test(valor);
        let mensagemExtra = '';

        if (valido) {
            const alturaNum = parseFloat(valor.replace(',', '.'));
            if (alturaNum < 1.3 || alturaNum > 2.5) {
                valido = false;
                mensagemExtra = `Valor (${alturaNum.toFixed(2)}) fora do intervalo.`;
            }
        }
        return { valido, formato, mensagemExtra };
    }

    // l) Faturamento anual: R$0,00 até R$999.999.999.999,99
    function validarFaturamento(valor) {
        const formato = 'R$0,00 até R$999.999.999.999,99';
        const regex = /^R\$\d{1,3}(\.\d{3}){0,3},\d{1,2}$/;
        return { valido: regex.test(valor), formato };
    }

    // m) Cronômetro (jwifi): HH:MM:SS:CC
    function validarCronometro(valor) {
        const formato = 'HH:MM:SS:CC (HH:00-23, MM:00-59, SS:00-59, CC:00-99)';
        const regex = /^(0\d|1\d|2[0-3]):(0\d|[1-5]\d):(0\d|[1-5]\d):(0\d|[1-9]\d)$/;
        return { valido: regex.test(valor), formato };
    }

    // n) Senha: X&W.Y.Z-U,V.T ou X&W.Y-U,V.T (Complexo)
    function validarSenha(valor) {
        const formato = 'X&W.Y.Z-U,V.T ou X&W.Y-U,V.T (Conforme a descrição complexa)';
        // REGEX com o ponto e traço escapados corretamente
        const regex = /^[a-zA-Z0-9]{5,}[\.\-"]([a-p]+)\.([aeiou]+)(\.[a-zA-Z0-5]+)?-([^0-9]+)\,([^a-zA-Z0-9]{2})\.([^ab01]+)$/i;
        return { valido: regex.test(valor), formato };
    }
    
    // a) Data de nascimento
    document.getElementById('btnValidarDataNascimento').addEventListener('click', () => {
        const valor = document.getElementById('dataNascimento').value.trim();
        exibirResultado(validarDataNascimento(valor), valor);
    });

    // b) CPF
    document.getElementById('btnValidarCpf').addEventListener('click', () => {
        const valor = document.getElementById('cpf').value.trim();
        exibirResultado(validarCPF(valor), valor);
    });

    // c) Matrícula
    document.getElementById('btnValidarMatricula').addEventListener('click', () => {
        const valor = document.getElementById('matricula').value.trim();
        exibirResultado(validarMatricula(valor), valor);
    });

    // d) Código de Disciplina
    document.getElementById('btnValidarCodDisciplina').addEventListener('click', () => {
        const valor = document.getElementById('codDisciplina').value.trim();
        exibirResultado(validarCodDisciplina(valor), valor);
    });

    // e) Código de Disciplina v2
    document.getElementById('btnValidarCodDisciplina2').addEventListener('click', () => {
        const valor = document.getElementById('codDisciplina2').value.trim();
        exibirResultado(validarCodDisciplina2(valor), valor);
    });

    // f) Código de Disciplina v3
    document.getElementById('btnValidarCodDisciplina3').addEventListener('click', () => {
        const valor = document.getElementById('codDisciplina3').value.trim();
        exibirResultado(validarCodDisciplina3(valor), valor);
    });
    
    // g) Código de Disciplina v4
    document.getElementById('btnValidarCodDisciplina4').addEventListener('click', () => {
        const valor = document.getElementById('codDisciplina4').value.trim();
        exibirResultado(validarCodDisciplina4(valor), valor);
    });

    // h) Nome de Campus
    document.getElementById('btnValidarNomeCampus').addEventListener('click', () => {
        const valor = document.getElementById('nomeCampus').value.trim();
        exibirResultado(validarNomeCampus(valor), valor);
    });
    
    // i) Telefone
    document.getElementById('btnValidarTelefone').addEventListener('click', () => {
        const valor = document.getElementById('telefone').value.trim();
        exibirResultado(validarTelefone(valor), valor);
    });
    
    // j) Telefone v2
    document.getElementById('btnValidarTelefone2').addEventListener('click', () => {
        const valor = document.getElementById('telefone2').value.trim();
        exibirResultado(validarTelefone2(valor), valor);
    });
    
    // k) Altura
    document.getElementById('btnValidarAltura').addEventListener('click', () => {
        const valor = document.getElementById('altura').value.trim();
        exibirResultado(validarAltura(valor), valor);
    });
    
    // l) Faturamento
    document.getElementById('btnValidarFaturamento').addEventListener('click', () => {
        const valor = document.getElementById('faturamento').value.trim();
        exibirResultado(validarFaturamento(valor), valor);
    });
    
    // m) Cronômetro
    document.getElementById('btnValidarCronometro').addEventListener('click', () => {
        const valor = document.getElementById('cronometro').value.trim();
        exibirResultado(validarCronometro(valor), valor);
    });

    // n) Senha
    document.getElementById('btnValidarSenha').addEventListener('click', () => {
        const valor = document.getElementById('senha').value.trim();
        exibirResultado(validarSenha(valor), valor);
    });
    
});