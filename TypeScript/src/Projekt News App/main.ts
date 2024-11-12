import { IResponse } from "./interfaces/IResponse";

const searchTermInput = document.querySelector("#searchTermInput") as HTMLInputElement;
const selectLanguage = document.querySelector("#selectLanguage") as HTMLSelectElement;
const selectSort = document.querySelector("#selectSort") as HTMLSelectElement;
const searchBtn = document.querySelector("#searchBtn") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLDivElement;

const API_KEY: string = "086eca9848b84f83b17643c580c50b64";
const BASE_URL: string = "https://newsapi.org/v2/everything?";

searchBtn.addEventListener("click", () => {
    const q: string = searchTermInput.value;
    const language: string = selectLanguage.value;
    const sortBy: string = selectSort.value;

    fetchAndDisplay(BASE_URL, q, language, sortBy);
});

function fetchAndDisplay(url: string, q: string, language: string, sortBy: string) {
    const fetchURL: string = `${url}q=${q}&language=${language}&sortBy=${sortBy}&apiKey=${API_KEY}`;

    fetch(fetchURL)
        .then((response) => {
            return response.json();
        })
        .then((response: IResponse) => {
            const articlesHtmlArr: string[] = response.articles.map((article) => {
                return `
                <article class="news_block">
                    <img src="${article.urlToImage}" class="news_img">
                    <div>
                        <p class="news_source">${article.source.name}</p>
                        <p class="news_time">${article.publishedAt}</p>
                    </div>
                    <h2>${article.title}</h2>
                    <p class="news_description">${article.description}</p>
                    <a href="${article.url}" class="news_link" target="_blank">Zum Artikel</a>
                </article>
                `;
            });
            output.innerHTML = articlesHtmlArr.join("");
        });
}
