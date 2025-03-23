// Exercício 01
function mudarCorDaLinha() {
  const linha = document.getElementById("Tupla-Palmeiras");

  linha.style.backgroundColor = "#142f15";
  linha.style.color = "#f3f3f3";
}

function mudarCorPorId(Id) {
  const linhaDaTabela = document.getElementById(Id);

  linhaDaTabela.style.backgroundColor = "#471002";
  linhaDaTabela.style.color = "white";
}

// Exercício 02
function AplicandoCorPorLinha(elementoId) {
  const linhaDaTabela = document.getElementById(elementoId);
  linhaDaTabela.style.backgroundColor = "orange";
  linhaDaTabela.style.color = "white";
}

function RemovendoACorPorLinha(elementoId) {
  const LinhaComCor = document.getElementById(elementoId);

  LinhaComCor.style.backgroundColor = "#f7f7f7";
  LinhaComCor.style.color = "black";
}

// Exercício 04

const elementoTime = document.getElementById("NomeTupla-Palmeiras");
// Capturando o nome
const nomeTime = elementoTime.innerHTML;
// alert(nomeTime);
console.log(nomeTime);
