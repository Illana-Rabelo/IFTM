window.addEventListener('DOMContentLoaded', function() {
    const idades = [15, 20, 30, 45, 17, 10, 55, 22]; 
    const display = document.getElementById('resultados');

    
    const imprimir = (titulo, conteudo) => {
      
        display.innerHTML += `<p><strong>${titulo}:</strong> ${conteudo}</p>`;
    };

    // a) soma das idades 
    const soma = idades.reduce((acc, valor) => acc + valor, 0); 
    imprimir("a) Soma das idades", soma);

    // b) média aritmética simples das idades 
    const media = idades.reduce((acc, valor) => acc + valor, 0) / idades.length; 
    imprimir("b) Média aritmética", media.toFixed(2));

    // c) maior idade 
    const maior = idades.reduce((max, valor) => valor > max ? valor : max); 
    imprimir("c) Maior idade", maior);

    // d) idades ímpares 
    const impares = idades.filter(id => id % 2 !== 0); 
    imprimir("d) Idades ímpares", impares.join(", "));

    // e) verificar se todos são maiores de idade (>=18) 
    const todosMaiores = idades.every(id => id >= 18); 
    imprimir("e) Todos são maiores de idade?", todosMaiores);

    // entrada do usuário
    const valorInformado = parseInt(prompt("Informe uma idade para os exercícios f, g e h:"));

    // f) verificar se todas as idades são >= ao valor informado 
    const todasMaioresQueX = idades.every(id => id >= valorInformado); 
    imprimir(`f) Todas são >= ${valorInformado}?`, todasMaioresQueX);

    // g) exibir todas as idades >= determinada idade 
    const listaMaioresQueX = idades.filter(id => id >= valorInformado); 
    imprimir(`g) Idades >= ${valorInformado}`, listaMaioresQueX.join(", "));

    // h) média das idades >= determinada idade 
    const filtradosH = idades.filter(id => id >= valorInformado); 
    const mediaH = filtradosH.length > 0 
        ? filtradosH.reduce((acc, valor) => acc + valor, 0) / filtradosH.length 
        : 0;
    imprimir(`h) Média das idades >= ${valorInformado}`, mediaH.toFixed(2));
});
