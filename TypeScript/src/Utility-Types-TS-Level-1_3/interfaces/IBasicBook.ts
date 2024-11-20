import { IBook } from "./IBook";

export interface IBasicBook extends Omit<IBook, "publishingYear" | "shortDescription"> {
    author: string;
    name: string;
    numberOfPages: number;
}
