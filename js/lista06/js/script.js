document.addEventListener("DOMContentLoaded", function () {
    
    //etapa 1
    const cartas = 27;

    function main() {
        var cartasBaralho = [];
        var paresCartasAletJogo = [];
        var paresCartasAletSorteadas = [];

        gerarBaralho(cartasBaralho);
        // console.log(cartasBaralho);
        paresCartasAletJogo = gerarCartasJogo(cartasBaralho);
        paresCartasAletSorteadas = embaralhaVetor(paresCartasAletJogo);
        console.log(paresCartasAletSorteadas);
        // montarTabuleiro(paresCartasAletSorteadas);

    }

    function gerarBaralho(cartasBaralho) {
        for (let i = 1; i <= cartas; i++) {
            cartasBaralho.push(i + 1);

        }

        // etapa 2
        function gerarCartasJogo(cartas) {
            let cartasJogo = [];
            for (let i = 0; i < 4; i++) {
                cartaSorteada = cartas.splice(Math.floor(Math.random() * cartas.length), 1)[0];
                cartasJogo.push(cartaSorteada);
            }
            return cartasJogo;
        }


        //estapa 3
        function embaralhaVetor(vetor) {
            let vetorAleatorio = [];
            let vetorCopia = [...vetor];
            for (let i = 0; i < vetor.length; i++) {
                vetorAleatorio.push(vetorCopia.splice(Math.floor(Math.random() * vetorCopia.length), 1)[0]);
            }
            return vetorAleatorio;
        }
    }
    main();
});