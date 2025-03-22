console.log("Olá mundo!");

// Capturando a tabela pelo id
const Tabela_campeonato = document.getElementById("tabelaCampeonato");

// Array associativo para injeção de dados na tabela
const ListaTimes = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1816px-Botafogo_de_Futebol_e_Regatas_logo.svg.png",
    posicao: 1,
    siteTime: "https://www.espn.com.br/futebol/time/_/id/6086/botafogo",
    nome: "Bota Fogo",
    pontos: 20,
    qtdJogos: 10,
    qtdVitoria: 10,
    qtdDerrotas: 0,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/2048px-Palmeiras_logo.svg.png",
    posicao: 2,
    siteTime: "https://www.espn.com.br/futebol/time/_/id/2029/palmeiras",
    nome: "Palmeiras",
    pontos: 19,
    qtdJogos: 10,
    qtdVitoria: 9,
    qtdDerrotas: 1,
  },

  {
    img: "https://seeklogo.com/images/F/flamengo-de-grossos-logo-DF503973A8-seeklogo.com.png",
    posicao: 3,
    siteTime: "https://www.espn.com.br/futebol/time/_/id/819/flamengo",
    nome: "Flamengo",
    pontos: 10,
    qtdJogos: 9,
    qtdVitoria: 8,
    qtdDerrotas: 1,
  },
];

// Injetando dados na tabela
ListaTimes.map((time) => {
  Tabela_campeonato.innerHTML += `  
        <tr id="${time.nome}"
        onmouseover="AplicandoCorPorLinha('${time.nome}')"
        onmouseout="RemovendoACorPorLinha('${time.nome}')"
        >
            <td><img src=${time.img} alt="Logo ${time.nome}" /></td>
            <td>${time.posicao}</td>
            <td><p><a href=${time.siteTime} target="_blank">${time.nome}</a></p></td>
            <td>${time.pontos}</td>
            <td>${time.qtdJogos}</td>
            <td>${time.qtdVitoria}</td>
            <td>${time.qtdDerrotas}</td>
        </tr> 
    `;

  if (time.posicao == 1) {
    const vencedor = document.getElementById(`${time.nome}`);
    vencedor.style.backgroundColor = "darkgreen";
    vencedor.style.color = "white";
  }
});

function mudarCorDaLinha() {
  const linha = document.getElementById("Palmeiras");

  linha.style.backgroundColor = "#142f15";
  linha.style.color = "#f3f3f3";
}

function mudarCorPorId(Id) {
  const linhaDaTabela = document.getElementById(Id);

  linhaDaTabela.style.backgroundColor = "#471002";
  linhaDaTabela.style.color = "white";
}

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
