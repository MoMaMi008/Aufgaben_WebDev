import { fetchingFilms, fetchingPersons, fetchingPlanets, planetsArr, filmsArr, personsArr } from "./functions/fetch-functions";
import { showArray } from "./functions/show-array";
import { IFilm } from "./interfaces/IFilm";

const showFilmsBtn = document.querySelector("#showFilmsBtn") as HTMLButtonElement;
const showPlanetsBtn = document.querySelector("#showPlanetsBtn") as HTMLButtonElement;
const showPersonsBtn = document.querySelector("#showPersonsBtn") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLDivElement;

const BASE_URL: string = "https://swapi.dev/api/";
const fetchingUrlPlanets = BASE_URL + "/planets/";
const fetchingUrlFilms = BASE_URL + "/films/";
const fetchingUrlPersons = BASE_URL + "/people/";

// initiales Laden der Daten
fetchingPlanets(fetchingUrlPlanets);
fetchingFilms(fetchingUrlFilms);
fetchingPersons(fetchingUrlPersons);

showFilmsBtn.addEventListener("click", () => {
    showArray(filmsArr, output);
});
showPlanetsBtn.addEventListener("click", () => {
    showArray(planetsArr, output);
});
showPersonsBtn.addEventListener("click", () => {
    showArray(personsArr, output);
});
