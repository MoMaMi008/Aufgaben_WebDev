import { IBasicBook } from "./interfaces/IBasicBook";
import { IBook } from "./interfaces/IBook";
import { IPartialBook } from "./interfaces/IPartialBook";
import { TBasicBook } from "./types/TBasicBook";
import { TPartialBook } from "./types/TPartialBook";

const normalBook: IBook = {
    author: "J.R.R. Tolkien",
    name: "Der Herr der Ringe",
    publishingYear: "1954",
    numberOfPages: 1178,
};

const partialBook: TPartialBook = {
    author: "George Orwell",
    name: "1984",
};

const iPartialBook: IPartialBook = {
    name: "Die Weihnachtsgeschichte",
};

const basicBook: TBasicBook = {
    author: "Paulo Coelho",
    name: "Der Alchemist",
    numberOfPages: 208,
};

const basicBook2: IBasicBook = {
    author: "Jana Austen",
    name: "Stolz und Vorurteil",
    numberOfPages: 432,
};

console.log(normalBook);
console.log(partialBook);
console.log(iPartialBook);
console.log(basicBook);
console.log(basicBook2);
