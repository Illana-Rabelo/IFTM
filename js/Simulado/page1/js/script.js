import { saveStorage } from "./storage.js";

window.addEventListener("DOMContentLoaded", () => {
    // Busca os elementos diretamente onde são usados
    const btnEnviar = document.getElementById("btnEnviar");
    const cxTxt = document.getElementById("cxTxt");

    // Usa uma arrow function diretamente no listener
    btnEnviar.addEventListener("click", () => {
        // Enviar()
        saveStorage("texto", cxTxt.value);
        window.location.href = "../page2/index.html";
    });
});