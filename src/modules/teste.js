console.log("Olá");
const cursos = [
  {
    id: 1,
    titulo: "HTML5 e CSS3",
    categoria: "Front-end",
    preco: 500,
  },
  {
    id: 2,
    titulo: "JS e React",
    categoria: "Front-end",
    preco: 800,
  },
  {
    id: 3,
    titulo: "React Native",
    categoria: "Mobile",
    preco: 1000,
  },
  {
    id: 4,
    titulo: "Photoshop",
    categoria: "Design",
    preco: 400,
  },
  {
    id: 5,
    titulo: "Php e MySQL",
    categoria: "Back-End",
    preco: 600,
  },
  {
    id: 6,
    titulo: "Flutter",
    categoria: "Mobile",
    preco: 900,
  },
  {
    id: 7,
    titulo: "Figma",
    categoria: "Design",
    preco: 100,
  },
];

const diasDaSemana = [{ dia: "segunda" }, { dia: "terça" }];
const Times = [{ nome: "Corinthinas" }, { nome: "Palmeiras" }];

const divTeste = document.querySelector("#teste");
const ListaSemanas = document.querySelector("#ListaOrdenada");
const ListaTime = document.querySelector("#ListaNaoOrdenada");

cursos.map(({ id, titulo, categoria, preco }) => {
  divTeste.innerHTML += `
    <div id="${id}">
        <h2> ${titulo} </h2>
        <P>Categoria: ${categoria}</P>
        <P> Preço: R$ ${preco}</P>
    </div>
    `;
});

Times.map(({ nome }) => {
  ListaTime.innerHTML += `
    <li>${nome}</li>
    `;
});

diasDaSemana.map(({ dia }) => {
  ListaSemanas.innerHTML += `
        <li> ${dia} </li>    
    `;
});
