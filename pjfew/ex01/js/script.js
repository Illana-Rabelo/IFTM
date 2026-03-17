window.addEventListener('DOMContentLoaded', () => {
    async function carregarClientes() {
  try {
    const resposta = await fetch('clientes.json');
    const clientes = await resposta.json();

    const container = document.getElementById('clientes');

    container.innerHTML = clientes.map(cliente => `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <h3>${cliente.nome}</h3>
        <p>${cliente.depoimento}</p>
        <strong>Nota: ${cliente.rating} ⭐</strong>
      </div>
    `).join('');

  } catch (erro) {
    console.error("Erro ao carregar os dados:", erro);
  }
}

carregarClientes();
});