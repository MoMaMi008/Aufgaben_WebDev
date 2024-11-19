import { IFilm } from "../interfaces/IFilm";
import { IPerson } from "../interfaces/IPerson";
import { IPlanet } from "../interfaces/IPlanet";

export function showArray(arr: IFilm[] | IPerson[] | IPlanet[], output: HTMLDivElement) {
    output.innerHTML = ``;
    arr.forEach((element) => {
        const article = document.createElement("article");
        output.appendChild(article);
        for (const [key, value] of Object.entries(element)) {
            article.innerHTML += `<p><span>${key}:</span> ${value}</p>`;
        }
    });
}
