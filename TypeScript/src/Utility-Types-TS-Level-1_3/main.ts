import { IBasicBook } from "./interfaces/IBasicBook";
import { IBook } from "./interfaces/IBook";
import { IBookDescription } from "./interfaces/IBookDescription";
import { IPartialBook } from "./interfaces/IPartialBook";
import { TBasicBook } from "./types/TBasicBook";
import { TBookDescription } from "./types/TBookDescription";
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

const bookDescription: TBookDescription = {
    name: "Harry Potter",
    shortDescription: "Ein junger Zauberer erlebt Abenteuer in einer magischen Welt.",
};

const bookDescription2: IBookDescription = {
    name: "Harry Potter",
    shortDescription: "Ein junger Zauberer erlebt Abenteuer in einer magischen Welt.",
};

console.log(normalBook);
console.log(partialBook);
console.log(iPartialBook);
console.log(basicBook);
console.log(basicBook2);
console.log(bookDescription);
console.log(bookDescription2);
