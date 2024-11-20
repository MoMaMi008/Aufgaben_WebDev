import { IBook } from "./interfaces/IBook";
import { IPartialBook } from "./interfaces/IPartialBook";
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

console.log(normalBook);
console.log(partialBook);
console.log(iPartialBook);
