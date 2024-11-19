import { IApiResult } from "../interfaces/IApiResult";
import { IFilm } from "../interfaces/IFilm";
import { IPerson } from "../interfaces/IPerson";
import { IPlanet } from "../interfaces/IPlanet";
import { changeFilmTitles, changeHomeworld, changePersons, chnagePlanets } from "./change-functions";

export const planetsArr: IPlanet[] = [];
export const filmsArr: IFilm[] = [];
export const personsArr: IPerson[] = [];

export async function fetchingPlanets(url: string) {
    const response = await fetch(url);
    const data: IApiResult = await response.json();
    const planets: IPlanet[] = data.results.map((result) => {
        const { name, diameter, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, films } = result as IPlanet;
        return { name, diameter, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, films };
    });
    await changeFilmTitles(planets);

    console.log(planets);

    planets.forEach((planet: IPlanet) => planetsArr.push(planet));
}

export async function fetchingFilms(url: string) {
    const response = await fetch(url);
    const data: IApiResult = await response.json();
    const films: IFilm[] = data.results.map((result) => {
        const { title, episode_id, opening_crawl, director, producer, release_date, characters, planets } = result as IFilm;
        return { title, episode_id, opening_crawl, director, producer, release_date, characters, planets };
    });
    console.log(changePersons(films));

    Promise.all([changePersons(films), chnagePlanets(films)])
        .then(() => {
            console.log(films);
            films.forEach((film: IFilm) => filmsArr.push(film));
        })
        .catch((error) => console.error(error));
}

export async function fetchingPersons(url: string) {
    const response = await fetch(url);
    const data: IApiResult = await response.json();
    const persons: IPerson[] = data.results.map((result) => {
        const { name, birth_year, eye_color, gender, hair_color, height, mass, skin_color, homeworld, films } = result as IPerson;
        return { name, birth_year, eye_color, gender, hair_color, height, mass, skin_color, homeworld, films };
    });

    Promise.all([changeFilmTitles(persons), changeHomeworld(persons)]);

    console.log(persons);

    persons.forEach((person: IPerson) => personsArr.push(person));
}
