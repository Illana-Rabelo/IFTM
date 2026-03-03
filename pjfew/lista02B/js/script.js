 import { trabalhadores } from "./dados.js";

window.addEventListener('DOMContentLoaded', function() {
   
const select = document.getElementById("opcao");
const resultado = document.getElementById("resultado");

const limparResultado = () => {
  resultado.innerHTML = "";
};

const criarParagrafo = (texto) => {
  const p = document.createElement("p");
  p.innerText = texto;
  resultado.appendChild(p);
};

// 🔹 Funções principais

const maioresDeIdade = () => {
  trabalhadores
    .filter(p => p.idade >= 18)
    .forEach(p => criarParagrafo(`${p.nome} - ${p.idade} anos`));
};

const homens = () => {
  trabalhadores
    .filter(p => p.sexo === "M")
    .forEach(p => criarParagrafo(p.nome));
};

const maiorSalario = () => {
  const maior = trabalhadores.reduce((m, a) =>
    a.salario > m.salario ? a : m
  );

  criarParagrafo(`Nome: ${maior.nome}`);
  criarParagrafo(`Salário: R$ ${maior.salario}`);
};

const verificarMulher= () => {
  const existe = trabalhadores.some(p =>
    p.sexo === "F" && p.salario > 5000
  );

  criarParagrafo(existe ? "Sim" : "Não");
};

const mediaSalarial = () => {
  const homens = trabalhadores.filter(p => p.sexo === "M");
  const mulheres = trabalhadores.filter(p => p.sexo === "F");

  const mediaHomens =
    homens.reduce((acc, p) => acc + p.salario, 0) / homens.length;

  const mediaMulheres =
    mulheres.reduce((acc, p) => acc + p.salario, 0) / mulheres.length;

  criarParagrafo(`Homens: R$ ${mediaHomens.toFixed(2)}`);
  criarParagrafo(`Mulheres: R$ ${mediaMulheres.toFixed(2)}`);
};


select.addEventListener("change", () => {
  limparResultado();

  switch (select.value) {
    case "1":
      maioresDeIdade();
      break;

    case "2":
      homens();
      break;

    case "3":
      maiorSalario();
      break;

    case "4":
      verificarMulher();
      break;

    case "5":
      mediaSalarial();
      break;

    default:
      criarParagrafo("Selecione uma opção válida.");
  }
});
});