import printProducts from "./functions/printProducts";
import TProduct from "./types/TProduct";

const titelSearchInput = document.querySelector("#titelSearchInput") as HTMLInputElement;
const sortBySelect = document.querySelector("#sortBySelect") as HTMLSelectElement;
const filterElectronicsBtn = document.querySelector("#filterElectronicsBtn") as HTMLButtonElement;
const filterJeweleryBtn = document.querySelector("#filterJeweleryBtn") as HTMLButtonElement;
const filterMenBtn = document.querySelector("#filterMenBtn") as HTMLButtonElement;
const filterWomenBtn = document.querySelector("#filterWomenBtn") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLDivElement;

const productsArr: TProduct[] = [];

fetch("https://fakestoreapi.com/products?limit=5")
    .then((response) => response.json())
    .then((json) => {
        json.forEach((element: TProduct) => {
            productsArr.push(element);
        });
        printProducts(productsArr);
    })
    .catch((error: Error) => {
        console.error(error);
    });

console.log(productsArr);
