type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: "The Beatles", country: "United Kingdom", period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: "Elvis Presley", country: "United States", period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: "Michael Jackson", country: "United States", period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: "Elton John", country: "United Kingdom", period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: "Madonna", country: "United States", period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: "Led Zeppelin", country: "United Kingdom", period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: "Rihanna", country: "United States", period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: "Pink Floyd", country: "United Kingdom", period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

const tName = document.querySelector("#tName");
const tCountry = document.querySelector("#tCountry");
const inputGenre = document.querySelector("#inputGenre") as HTMLInputElement;
const output = document.querySelector("#output");
let newArr = [...singers];

const drawTable = (arr: Singer[]) => {
    output?.replaceChildren();

    arr.forEach((singer) => {
        const zeile = document.createElement("tr");
        const name = document.createElement("td");
        const country = document.createElement("td");
        const period_active = document.createElement("td");
        const genre = document.createElement("td");

        name.textContent = singer.name;
        country.textContent = singer.country;
        period_active.textContent = `${singer.period_active.start} - ${singer.period_active.end}`;
        genre.textContent = singer.genre;

        zeile.appendChild(name);
        zeile.appendChild(country);
        zeile.appendChild(period_active);
        zeile.appendChild(genre);

        output?.appendChild(zeile);
    });
};

drawTable(singers); // Initialzustand der Seite

tName?.addEventListener("click", () => {
    newArr = singers.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    drawTable(newArr);
});

tCountry?.addEventListener("click", () => {
    newArr = singers.sort((a, b) => {
        return a.country.localeCompare(b.country);
    });
    drawTable(newArr);
});

inputGenre?.addEventListener("input", () => {
    newArr = singers.filter((singer) => {
        if (singer.genre.toLowerCase().includes(inputGenre.value)) {
            return true;
        }
    });
    drawTable(newArr);
});
