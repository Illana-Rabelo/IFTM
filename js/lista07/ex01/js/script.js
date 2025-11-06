window.addEventListener('DOMContentLoaded', () => {
    
    const caixa1 = document.getElementById('caixa1');
    const caixa2 = document.getElementById('caixa2');
    const btnTrocar = document.getElementById('btnTrocar');

    const ATRASO = 2000; 

    btnTrocar.addEventListener('click', moverTextoComAtraso);

    function moverTextoComAtraso() {
        const texto = caixa1.value;

        // verifica se há algo para trocar de caixa
        if (texto.trim() === "") {
            alert("A primeira caixa está vazia. Digite algo!");
            return;
        }

        // desabilita o botão para evitar cliques múltiplos durante o atraso
        btnTrocar.disabled = true;
    
        setTimeout(function() {
            // insere o texto na segunda caixa
            caixa2.value = texto; 
            
            // remove o texto da primeira caixa
            caixa1.value = ""; 

            btnTrocar.disabled = false;
            

        }, ATRASO); // O tempo de atraso em milissegundos
    }


});