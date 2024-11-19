import { IFilm } from "../interfaces/IFilm";
import { IPerson } from "../interfaces/IPerson";
import { IPlanet } from "../interfaces/IPlanet";

// Change-Funktionen für die Haupt-Fetches
export async function changeFilmTitles(arr: IPlanet[] | IPerson[]) {
    arr.forEach((element: IPlanet | IPerson) => {
        element.films.forEach(async (url: string) => {
            const response = await fetch(url);
            const data: IFilm = await response.json();
            element.films.push(data.title);
            element.films.shift();
        });
    });
}

export async function changePersons(arr: IFilm[]) {
    arr.forEach((element: IFilm) => {
        element.characters.forEach(async (url: string) => {
            const response = await fetch(url);
            const data: IPerson = await response.json();
            element.characters.push(data.name);
            element.characters.shift();
        });
    });
}

export async function chnagePlanets(arr: IFilm[]) {
    arr.forEach((element: IFilm) => {
        element.planets.forEach(async (url: string) => {
            const response = await fetch(url);
            const data: IPlanet = await response.json();
            element.planets.push(data.name);
            element.planets.shift();
        });
    });
}

export async function changeHomeworld(arr: IPerson[]) {
    arr.forEach(async (person: IPerson) => {
        const response = await fetch(person.homeworld);
        const data: IPlanet = await response.json();
        person.homeworld = data.name;
    });
}
