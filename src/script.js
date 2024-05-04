console.log("usa la forza luke!!!");
// PREPARAZIONE
const avvioBTN = document.getElementById("avvia");
const listaPG = document.getElementById("pg-list");
const loadingBtn = document.getElementById("loading-btn");
const planets = [];
let totPianeti = 0;
let planetPageCounter = 1;
let pgPageCounter = 1;
//
// --------> FUNZIONI <-------
// chiamata per il totale pianeti
async function ricercaNumeroPianeti() {
  let response = await fetch("https://swapi.dev/api/planets/?page=");
  let data = await response.json();
  totPianeti = data.count;
}
//
// chiamata per i nomi pianeti
async function fetchPlanets() {
  while (planets.length < totPianeti) {
    let planetsPages =
      "https://swapi.dev/api/planets/?page=" + planetPageCounter;
    let response = await fetch(planetsPages);
    let data = await response.json();
    data.results.map((pg) => {
      let singlePlanet = pg.name;
      planets.push(singlePlanet);
    });
    console.log(planets.length + " lunghezza PLANETS ");
    planetPageCounter++;
    console.log(planetPageCounter);
    console.log(planets);
  }
}
//
// Avvio Stampa lista personaggi
async function avviaStampa() {
  avvioBTN.remove();
  loadingBtn.classList.remove("hidden");
  if (totPianeti == 0) {
    await ricercaNumeroPianeti();
  }

  if (planets.length < totPianeti) {
    await fetchPlanets();
  }
  let webPage = "https://swapi.dev/api/people?page=" + pgPageCounter;
  let response = await fetch(webPage);
  let data = await response.json();
  let paginaPersonaggi = data.results;

  paginaPersonaggi.map((singoloPG) => {
    const pgDescr = document.createElement("li");
    let linkPianetaPG = singoloPG.homeworld;

    let pianetaPG = linkPianetaPG.slice(-3, -1).match(/(\d+)/)[0];
    pgDescr.innerHTML = `${singoloPG.name} dal pianeta ${planets[pianetaPG - 1]}`;
    document.getElementById("pg-list").appendChild(pgDescr);
  });
  loadingBtn.classList.add("hidden");
}
//
// Pagina avanti lista personaggi
function paginaAvanti() {
  pgPageCounter < 9 && pgPageCounter >= 1
    ? pgPageCounter++
    : (pgPageCounter = 9);
  console.log(pgPageCounter);

  listaPG.innerHTML = "";
  avviaStampa();
}
//
// Pagina indietro lista personaggi
function paginaIndietro() {
  pgPageCounter <= 1 ? 1 : pgPageCounter--;
  console.log(pgPageCounter);

  listaPG.innerHTML = "";

  avviaStampa();
}
