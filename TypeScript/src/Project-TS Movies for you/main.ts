import { movies } from "./data.ts";
type Movie = [string, string, string, string, string[], string][];

const searchInput = document.querySelector("#searchInput") as HTMLInputElement;
// const searchBtn = document.querySelector("#searchBtn") as HTMLInputElement;
const yearUpBtn = document.querySelector("#yearUpBtn") as HTMLInputElement;
const yearDownBtn = document.querySelector("#yearDownBtn") as HTMLInputElement;
const bestRateBtn = document.querySelector("#bestRateBtn") as HTMLInputElement;
const cardOutput = document.querySelector("#cardOutput") as HTMLElement;
let newArr: Movie = [...movies];

const anzeigen = (arr: Movie) => {
    cardOutput.innerHTML = ""; //zum reseten der Anzeige

    // Prüft ob der Suchbegriff vorhandenist
    if (arr.length === 0) {
        const fehlermeldung = document.createElement("p");
        fehlermeldung.textContent = "Suchbegriff nicht gefunden!";
        cardOutput.appendChild(fehlermeldung);
    }

    //Für jedes Array-Element wird ein <article> mit dem entsprechenden Inhalt erstellt und ausgegeben
    arr.forEach((movie) => {
        const article = document.createElement("article");
        const titel = document.createElement("h3");
        const erscheinungsjahr = document.createElement("p");
        const regisseur = document.createElement("h4");
        const dauer = document.createElement("p");
        const bewertung = document.createElement("p");

        titel.textContent = movie[0];
        erscheinungsjahr.textContent = movie[1];
        regisseur.textContent = movie[2];
        dauer.textContent = movie[3];
        bewertung.textContent = movie[5];

        article.appendChild(titel);
        article.appendChild(erscheinungsjahr);
        article.appendChild(regisseur);
        article.appendChild(dauer);
        movie[4].forEach((genre) => {
            const genreName = document.createElement("p");

            if (typeof genre === "string") {
                genreName.textContent = genre;
                article.appendChild(genreName);
            }
        });
        article.appendChild(bewertung);

        cardOutput.appendChild(article);
    });
};

anzeigen(movies); // Anzeigen, des initialen Zustandes der Seite

// movies.forEach((movie) => {
//     const article = document.createElement("article");
//     const titel = document.createElement("h3");
//     const erscheinungsjahr = document.createElement("p");
//     const regisseur = document.createElement("h4");
//     const dauer = document.createElement("p");
//     const bewertung = document.createElement("p");

//     titel.textContent = movie[0];
//     erscheinungsjahr.textContent = movie[1];
//     regisseur.textContent = movie[2];
//     dauer.textContent = movie[3];
//     bewertung.textContent = movie[5];

//     article.appendChild(titel);
//     article.appendChild(erscheinungsjahr);
//     article.appendChild(regisseur);
//     article.appendChild(dauer);
//     movie[4].forEach((genre) => {
//         const genreName = document.createElement("p");

//         if (typeof genre === "string") {
//             genreName.textContent = genre;
//             article.appendChild(genreName);
//         }
//     });
//     article.appendChild(bewertung);

//     cardOutput.appendChild(article);
// });

searchInput.addEventListener("input", () => {
    const input = searchInput.value.toLowerCase();

    // Filtermöglichkeit für Titel, Regiseur und Erscheinungsjahr
    newArr = movies.filter((movie) => {
        if (movie[0].toLowerCase().includes(input) || movie[1].includes(input) || movie[2].toLowerCase().includes(input)) {
            return true;
        }
    });

    anzeigen(newArr);
});

yearUpBtn.addEventListener("click", () => {
    newArr.sort((a: [string, string, string, string, string[], string], b: [string, string, string, string, string[], string]) => {
        const yearA = parseInt(a[1]);
        const yearB = parseInt(b[1]);
        return yearA - yearB;
    });

    anzeigen(newArr);
});

yearDownBtn.addEventListener("click", () => {
    newArr.sort((a: [string, string, string, string, string[], string], b: [string, string, string, string, string[], string]) => {
        const yearA = parseInt(a[1]);
        const yearB = parseInt(b[1]);
        return yearB - yearA;
    });

    anzeigen(newArr);
});

bestRateBtn.addEventListener("click", () => {
    newArr.sort((a: [string, string, string, string, string[], string], b: [string, string, string, string, string[], string]) => {
        const ratingA = parseFloat(a[5]);
        const ratingB = parseFloat(b[5]);
        return ratingB - ratingA;
    });

    anzeigen(newArr);
});
