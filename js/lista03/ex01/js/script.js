btn = document.getElementById("btnExibir");
texto = document.getElementById("txtNome");

btn.addEventListener("click", exibirNome);

function exibirNome(){
    alert(texto.value);
}