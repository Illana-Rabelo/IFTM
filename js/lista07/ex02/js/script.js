window.addEventListener("DOMContentLoaded", function() {
    
    const caixa1 = document.getElementById('caixa1');
    const caixa2 = document.getElementById('caixa2');
    const tempoSelect = document.getElementById('tempoSelect'); 
    const btnTrocar = document.getElementById('btnTrocar');
    
    btnTrocar.addEventListener('click', moverTextoComAtraso);

    function moverTextoComAtraso() {
        const texto = caixa1.value;

        // obtém o tempo selecionado 
        const segundosAtraso = parseInt(tempoSelect.value, 10); 
        
        // converte o tempo de segundos para milissegundos
        const atrasoMs = segundosAtraso * 1000; 

        if (texto.trim() === "") {
            alert("A primeira caixa está vazia. Digite algo!");
            return;
        }

        btnTrocar.disabled = true;

        setTimeout(function() {
          
            caixa2.value = texto; 
            caixa1.value = ""; 

            btnTrocar.disabled = false;

        }, atrasoMs); 
    }
});